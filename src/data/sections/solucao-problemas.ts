import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "diagnosticar-problemas",
    section: "solucao-problemas",
    title: "Diagnosticando problemas no Lubuntu",
    difficulty: "iniciante",
    subtitle: "Como olhar para um problema com calma e descobrir a causa.",
    intro: `Quando algo dá errado no computador, a vontade é xingar e reiniciar. Reiniciar até resolve às vezes, mas não ensina nada — e o problema volta. Diagnosticar é o jeito do mecânico: antes de trocar peça, você escuta o motor, olha o painel, mede a pressão. No Lubuntu, "escutar o motor" é olhar logs, testar passo a passo e isolar a causa.

Pense num encanador chamado para ver um vazamento. Ele não sai quebrando parede: primeiro fecha o registro, depois testa cada torneira, depois olha o cano por baixo da pia. Diagnóstico é exatamente isso — ir do mais simples (cabo solto, energia, espaço em disco) ao mais complexo (driver, kernel, configuração quebrada). Pular essa ordem custa caro.

A boa notícia é que o Linux fala muito. Quase todo programa escreve no terminal ou em arquivos de log o que aconteceu, com data e hora. Aprendendo a ler dois ou três comandos (\`journalctl\`, \`dmesg\`, \`free\`, \`df\`), você descobre 80% dos problemas sozinho, sem depender de fórum.

Neste capítulo você vai montar um pequeno "kit de primeiros socorros": comandos para ver memória, disco, rede, processos travados e logs do sistema. Não decore tudo — entenda quando usar cada um. A regra de ouro é: leia a mensagem de erro literalmente antes de pesquisar. Ela quase sempre diz o problema.`,
    codes: [
      {
        lang: "bash",
        code: `# Primeira pergunta: tem espaço em disco?
# df = disk free, -h mostra em formato humano (GB, MB)
df -h
# saída exemplo:
# Sistema    Tam   Usado Disp Uso% Montado em
# /dev/sda1  100G  92G   3G   97% /
# Se o disco está em 95%+, MUITA coisa quebra.`,
      },
      {
        lang: "bash",
        code: `# Segunda pergunta: tem memória sobrando?
# free = mostra RAM e swap; -h em formato humano
free -h
# saída exemplo:
#               total   usado   livre   compart  buff/cache  disponível
# Mem.:         3,8Gi   3,5Gi   80Mi    20Mi     250Mi       100Mi
# Swap:         2,0Gi   1,9Gi   100Mi
# Memória disponível baixa = sistema lento, travas.`,
      },
      {
        lang: "bash",
        code: `# Terceira pergunta: o que está consumindo CPU/RAM agora?
# top é interativo; aperte q para sair
top
# Versão mais bonita (precisa instalar):
sudo apt install htop -y
htop
# Use F9 para mandar sinal (kill) num processo travado.`,
      },
      {
        lang: "bash",
        code: `# Logs do sistema com journalctl
# Ver as últimas mensagens de TODO o sistema:
journalctl -xe
# -x adiciona explicações; -e pula para o final.

# Só do boot atual:
journalctl -b
# Só do boot anterior (útil quando o problema travou tudo):
journalctl -b -1`,
      },
      {
        lang: "bash",
        code: `# Mensagens do kernel — útil quando hardware falha
# (USB que não monta, Wi-Fi que some, disco com erro)
dmesg | tail -50
# tail -50 mostra só as 50 últimas linhas.

# Filtrando só erros:
dmesg --level=err,warn`,
      },
      {
        lang: "bash",
        code: `# Testando rede em camadas — do mais simples ao mais complexo
ping -c 3 127.0.0.1        # a placa de rede responde?
ping -c 3 192.168.0.1      # o roteador responde?
ping -c 3 8.8.8.8          # a internet responde por IP?
ping -c 3 google.com       # o DNS funciona?
# Cada camada que falha aponta uma causa diferente.`,
      },
      {
        lang: "bash",
        code: `# Quando um aplicativo trava sem explicar nada,
# abra ele PELO TERMINAL para ver as mensagens de erro:
firefox
# Ele vai imprimir warnings e erros direto na tela
# em vez de engolir tudo silenciosamente.`,
      },
    ],
    points: [
      "Diagnóstico vai do simples (cabo, energia, espaço) ao complexo (driver, kernel).",
      "df -h mostra disco; free -h mostra memória; htop mostra processos vivos.",
      "journalctl -xe e dmesg são o diário do sistema — leia antes de pesquisar.",
      "Para rede, teste em camadas com ping até descobrir onde quebra.",
      "Abra apps travados pelo terminal para ver mensagens que a interface esconde.",
      "Anote a mensagem de erro EXATA antes de buscar — uma palavra a menos muda tudo.",
      "Iniciante comum: reiniciar antes de olhar o erro. Você perde a evidência e o aprendizado.",
      "Iniciante comum: assumir que é vírus. No Lubuntu, 99% das vezes é configuração ou disco cheio.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Mantenha um caderno (digital ou papel) de problemas resolvidos. Da próxima vez você consulta em 2 minutos em vez de revirar fórum por horas.",
      },
      {
        type: "warning",
        content: "Disco acima de 95% causa erros estranhos: travas no login, apps que não abrem, configurações que somem. Sempre teste o df primeiro.",
      },
      {
        type: "info",
        content: "journalctl mostra logs unificados do systemd. Antigamente cada serviço tinha um arquivo em /var/log/. Hoje quase tudo passa pelo journal.",
      },
      {
        type: "success",
        content: "Aprender a ler logs é a habilidade que separa o usuário do administrador. Vale mais que decorar comando bonito.",
      },
    ],
  },
  {
    slug: "modo-recovery",
    section: "solucao-problemas",
    title: "Modo de recuperação (recovery)",
    difficulty: "intermediario",
    subtitle: "Quando o sistema não inicia normal, o recovery é a porta dos fundos.",
    intro: `Imagine que sua casa pegou um curto e a luz da sala não acende. Você não derruba a parede: vai até o quadro de força, desliga tudo e religa um circuito por vez. O modo recovery do Lubuntu é exatamente esse "quadro de força". É um modo de inicialização mínimo, sem interface gráfica, sem rede automática, só com o essencial para você consertar.

Ele é útil quando algo no sistema impede o boot normal: uma atualização que deu errado, um driver gráfico que travou, um arquivo de configuração corrompido, ou o disco que ficou cheio e impede o login. Em vez de reinstalar do zero, você entra no recovery, conserta e segue a vida.

Para acessar, você usa o menu do GRUB (o gerenciador de boot que aparece quando o computador liga). Em Lubuntu, ele costuma ficar escondido — pressione \`Shift\` (BIOS) ou \`Esc\` (UEFI) repetidamente logo após ligar para mostrá-lo. Lá dentro escolha "Advanced options" e depois a entrada com "(recovery mode)".

Neste capítulo você vai conhecer as opções do menu de recovery, entender quando usar cada uma e fazer dois consertos clássicos: dar espaço em disco e reparar pacotes quebrados. É menos assustador do que parece — basicamente é um terminal com privilégios.`,
    codes: [
      {
        lang: "bash",
        code: `# Para acessar o GRUB ao ligar o PC:
# - BIOS legado: segure SHIFT durante o boot
# - UEFI: aperte ESC repetidamente logo após ligar
# Aparece o menu do GRUB:
# Ubuntu
# Advanced options for Ubuntu  <- escolha esta
#   Ubuntu, with Linux 6.x.x-generic
#   Ubuntu, with Linux 6.x.x-generic (recovery mode)  <- esta`,
      },
      {
        lang: "text",
        code: `# Menu do recovery — opções principais:
# resume    -> tenta voltar para boot normal
# clean     -> libera espaço apagando pacotes não usados
# dpkg      -> repara pacotes quebrados (após update interrompido)
# fsck      -> verifica e repara o sistema de arquivos
# network   -> habilita rede (vem desligada por padrão)
# root      -> abre um shell root para você fazer manutenção`,
      },
      {
        lang: "bash",
        code: `# Cenário 1: disco cheio impedindo o login
# Escolha "root" no menu, aperte Enter quando pedir senha
# (o sistema entra em modo "read-only", então remontamos rw)
mount -o remount,rw /

# Veja o que está ocupando espaço:
du -h --max-depth=1 / 2>/dev/null | sort -h | tail
# tail mostra os maiores; investigue /var/log e /home/usuario/.cache`,
      },
      {
        lang: "bash",
        code: `# Cenário 2: limpando arquivos antigos no recovery
# Apaga caches do apt (megabytes recuperados):
apt clean

# Remove pacotes que ninguém mais depende:
apt autoremove --purge -y

# Apaga logs antigos do journal (>7 dias):
journalctl --vacuum-time=7d`,
      },
      {
        lang: "bash",
        code: `# Cenário 3: reparar pacotes quebrados
# Útil quando uma atualização foi interrompida (energia, etc.)
# No menu recovery escolha "dpkg" — ele faz isso sozinho.

# Manualmente, no shell root:
dpkg --configure -a       # finaliza pacotes pendentes
apt --fix-broken install  # resolve dependências quebradas
apt update && apt upgrade -y`,
      },
      {
        lang: "bash",
        code: `# Cenário 4: verificar integridade do disco (fsck)
# IMPORTANTE: a partição precisa estar desmontada ou em read-only.
# Use a opção "fsck" do menu recovery — ela faz isso com segurança.

# Manualmente (avançado), assumindo / em /dev/sda2:
fsck -y /dev/sda2
# -y responde "sim" para todas as perguntas de reparo.`,
      },
      {
        lang: "bash",
        code: `# Saindo do recovery
# Depois de consertar, digite:
exit             # se você estava no shell root
# Volta ao menu — escolha:
resume           # tenta boot normal
# Ou simplesmente reinicie:
reboot`,
      },
    ],
    points: [
      "Recovery é um modo mínimo de boot — sem GUI, sem rede automática, só o essencial.",
      "Acesse via GRUB → Advanced options → entrada com '(recovery mode)'.",
      "As opções clean, dpkg e fsck cobrem 90% dos problemas de boot.",
      "Antes de mexer, monte / como leitura/escrita: mount -o remount,rw /",
      "apt clean e autoremove costumam liberar gigabytes em sistemas antigos.",
      "Use a opção network do menu se precisar baixar pacotes durante o conserto.",
      "Iniciante comum: reinstalar Lubuntu logo. Antes, tente recovery — leva 5 minutos.",
      "Iniciante comum: digitar comandos de Windows (chkdsk, sfc) — eles não existem aqui.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Não confunda 'recovery mode' do GRUB com a opção 'Try Lubuntu' do pendrive de instalação. Os dois servem para consertar, mas são bichos diferentes.",
      },
      {
        type: "tip",
        content: "Se o GRUB nem aparece, mantenha o Shift pressionado desde o momento do POST (a tela do fabricante). Em alguns notebooks, é preciso ESC + F12.",
      },
      {
        type: "info",
        content: "Em sistemas modernos com UEFI e Secure Boot, o recovery funciona normalmente. Não é preciso desligar Secure Boot para isso.",
      },
      {
        type: "danger",
        content: "Não rode fsck em uma partição montada em modo leitura/escrita. Pode corromper de vez. Use sempre a opção do menu recovery, ou um pendrive Live.",
      },
    ],
  },
  {
    slug: "reinstalar-grub",
    section: "solucao-problemas",
    title: "Reinstalando o GRUB",
    difficulty: "intermediario",
    subtitle: "Quando o boot some — recuperando o gerenciador de inicialização.",
    intro: `O GRUB é o porteiro do seu computador. Quando você liga a máquina, é ele quem mostra o menu (Lubuntu, Windows, opções avançadas) e entrega o controle para o sistema escolhido. Sem GRUB, o disco até existe, os arquivos estão lá, mas a BIOS não sabe por onde começar — você liga e cai numa tela preta com "no bootable device" ou um \`grub rescue>\` piscando.

Os dois cenários mais comuns que apagam o GRUB são: instalar o Windows depois do Lubuntu (o Windows reescreve o setor de boot e finge que o Linux não existe) e mexer em partições com gparted sem cuidado. A solução é reinstalar o GRUB a partir de um pendrive Live — exatamente aquele que você usou para instalar o Lubuntu.

A operação tem três passos só: dar boot pelo pendrive Live, montar a partição da raiz do seu Lubuntu instalado e rodar \`grub-install\` mais \`update-grub\`. Parece intimidador, mas são quatro comandos. O segredo é descobrir corretamente qual partição é a sua raiz (geralmente \`/dev/sda2\` ou \`/dev/nvme0n1p2\`) e qual é a partição EFI (em sistemas UEFI).

Neste capítulo você vai aprender as duas variantes: BIOS legado (mais simples) e UEFI (mais comum hoje, exige montar a partição /boot/efi). Também vou mostrar como recuperar a partir do prompt \`grub rescue>\`, que é o "modo super-pânico" quando até o pendrive falha.`,
    codes: [
      {
        lang: "bash",
        code: `# Boot pelo pendrive Live → escolha "Try Lubuntu"
# Abra o terminal (Ctrl+Alt+T) e descubra suas partições:
sudo fdisk -l
# saída resumida:
# /dev/sda1   512M   EFI System
# /dev/sda2   100G   Linux filesystem  <- sua raiz
# /dev/sda3   8G     Linux swap`,
      },
      {
        lang: "bash",
        code: `# Variante 1: sistema BIOS LEGADO (não-UEFI)
# Monte a raiz do seu Lubuntu instalado:
sudo mount /dev/sda2 /mnt

# Reinstale o GRUB no disco INTEIRO (sem número):
sudo grub-install --root-directory=/mnt /dev/sda

# Reinicie sem o pendrive:
sudo reboot`,
      },
      {
        lang: "bash",
        code: `# Variante 2: sistema UEFI (a maioria hoje)
# Monte a raiz e a partição EFI:
sudo mount /dev/sda2 /mnt
sudo mount /dev/sda1 /mnt/boot/efi

# "Entre" no sistema instalado com chroot:
for i in /dev /dev/pts /proc /sys /run; do
    sudo mount -B $i /mnt$i
done
sudo chroot /mnt`,
      },
      {
        lang: "bash",
        code: `# Já dentro do chroot, reinstale o GRUB-EFI:
grub-install --target=x86_64-efi --efi-directory=/boot/efi \\
    --bootloader-id=ubuntu --recheck

# Atualize o menu (descobre Windows e outros sistemas):
update-grub

# Saia do chroot e reinicie:
exit
sudo reboot`,
      },
      {
        lang: "bash",
        code: `# Atalho: ferramenta boot-repair (gráfica, faz tudo sozinha)
# No pendrive Live:
sudo apt update
sudo apt install -y boot-repair
boot-repair
# Clique em "Recommended repair" e siga as instruções.
# É a forma mais segura para iniciantes.`,
      },
      {
        lang: "bash",
        code: `# Pânico: caiu no prompt grub rescue>
# (significa que o GRUB carregou parcial, mas não achou a config)
grub rescue> ls
# (hd0,gpt2) (hd0,gpt1) (hd0)

grub rescue> set root=(hd0,gpt2)
grub rescue> set prefix=(hd0,gpt2)/boot/grub
grub rescue> insmod normal
grub rescue> normal
# Se der certo, entra no menu. Depois, no Lubuntu, rode:
sudo update-grub`,
      },
    ],
    points: [
      "GRUB é o gerenciador de boot — sem ele, a BIOS não acha o sistema.",
      "Instalar Windows depois do Linux é a causa #1 de GRUB sumido.",
      "Para reinstalar, use o pendrive Live e rode grub-install + update-grub.",
      "Em UEFI, é obrigatório montar /boot/efi e usar --target=x86_64-efi.",
      "boot-repair é o atalho gráfico — faz tudo automaticamente, sem decorar comandos.",
      "Sempre identifique a partição certa com fdisk -l antes de rodar comandos.",
      "Iniciante comum: rodar grub-install /dev/sda1 (com número). É no disco SEM número.",
      "Iniciante comum: esquecer de update-grub depois — o Windows não aparece no menu.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Rodar grub-install no disco errado pode quebrar o boot do Windows também. Confirme três vezes qual /dev/sdX é o do sistema antes de executar.",
      },
      {
        type: "tip",
        content: "Para iniciantes, sempre prefira boot-repair. Ele detecta UEFI/BIOS, monta as partições certas e até gera um relatório que você pode colar em fórum.",
      },
      {
        type: "info",
        content: "O comando os-prober dentro do update-grub é o que detecta outros sistemas. No Ubuntu 22.04+, vem desabilitado por segurança — habilite com GRUB_DISABLE_OS_PROBER=false em /etc/default/grub.",
      },
    ],
  },
  {
    slug: "recuperar-senha-root",
    section: "solucao-problemas",
    title: "Recuperando senha de usuário",
    difficulty: "intermediario",
    subtitle: "Esqueceu a senha? Calma — dá para resetar pelo recovery.",
    intro: `Esquecer senha do computador é um clássico. Acontece com todo mundo, inclusive comigo. No Windows, isso costuma virar drama — instalar ferramenta paga, formatar tudo. No Lubuntu, é uma questão de cinco minutos. O sistema confia que quem tem acesso físico ao teclado é o dono, e oferece um caminho oficial para resetar.

A técnica usa o modo recovery do GRUB que você viu dois capítulos atrás. A ideia é: entrar como root no shell de manutenção, montar o disco em modo leitura/escrita e usar o comando \`passwd\` para definir nova senha. Pronto. Sem CD especial, sem programa.

No Lubuntu não existe usuário "root" com senha por padrão — o root está bloqueado e a administração é feita pelo seu usuário com \`sudo\`. Por isso, o que você vai recuperar é a senha do SEU usuário (o que você criou na instalação). Se mais de uma pessoa usa o PC, atenção: qualquer uma com acesso físico pode fazer isso, então em ambiente compartilhado considere ativar criptografia de disco.

Neste capítulo você vai aprender a sequência exata para resetar a senha, como descobrir o nome do seu usuário caso tenha esquecido (sim, acontece) e como criptografar o /home se quiser blindar contra esse mesmo truque sendo usado contra você.`,
    codes: [
      {
        lang: "text",
        code: `# Passo 1: ligar o PC e entrar no GRUB
# - Segure SHIFT (BIOS) ou aperte ESC repetidas vezes (UEFI)
# Escolha:
# Advanced options for Ubuntu
#   Ubuntu, with Linux 6.x.x-generic (recovery mode)
# Aguarde o menu de recovery aparecer.`,
      },
      {
        lang: "text",
        code: `# Passo 2: no menu de recovery, escolha "root"
# (Drop to root shell prompt)
# Aperte Enter quando pedir confirmação.
# Você ganha um prompt # — está como root, sem senha.`,
      },
      {
        lang: "bash",
        code: `# Passo 3: montar o sistema em leitura/escrita
# (no recovery a raiz vem read-only por segurança)
mount -o remount,rw /

# Confirme que deu certo:
mount | grep " / "
# saída deve conter "rw," em vez de "ro,"`,
      },
      {
        lang: "bash",
        code: `# Passo 4: descubra o nome do seu usuário (se esqueceu)
ls /home
# saída exemplo: ana  bruno

# Reset a senha do usuário 'ana':
passwd ana
# Vai pedir nova senha, depois confirmar.
# saída: passwd: password updated successfully`,
      },
      {
        lang: "bash",
        code: `# Passo 5: reinicie e teste
exit            # sai do shell root
# Volta ao menu — escolha "resume" ou
reboot

# Faça login normalmente com a senha nova.`,
      },
      {
        lang: "bash",
        code: `# Bonus: bloquear/desbloquear conta de usuário
# (útil quando você quer impedir login temporariamente)
sudo passwd -l ana    # bloqueia (lock)
sudo passwd -u ana    # desbloqueia (unlock)

# Forçar troca de senha no próximo login:
sudo passwd -e ana
# bom para administradores que criam conta com senha provisória.`,
      },
      {
        lang: "bash",
        code: `# Para se proteger contra esse mesmo truque ser usado em você:
# 1) Ative senha no GRUB (impede acesso ao recovery)
sudo grub-mkpasswd-pbkdf2
# Pega o hash gerado e adiciona em /etc/grub.d/40_custom

# 2) Ou, mais simples, ative criptografia LUKS na instalação.
# Sem a senha LUKS, ninguém monta o disco — nem com pendrive.`,
      },
    ],
    points: [
      "No Lubuntu, root não tem senha — você reseta a senha do seu usuário comum.",
      "Acesse o recovery pelo GRUB e escolha a opção 'root'.",
      "Sempre faça mount -o remount,rw / antes de mexer (a raiz vem em read-only).",
      "passwd nome_do_usuario define nova senha sem pedir a antiga.",
      "Se esqueceu o nome do usuário, ls /home mostra todos.",
      "Acesso físico ao PC = acesso à senha. Use criptografia em laptops e PCs compartilhados.",
      "Iniciante comum: tentar logar como root direto — no Ubuntu/Lubuntu, root é bloqueado.",
      "Iniciante comum: esquecer o remount,rw e ver 'Read-only file system' ao trocar senha.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Esse procedimento é uma porta intencional de recuperação. Em laptops corporativos ou PCs compartilhados, ative senha no GRUB e/ou criptografia LUKS para fechá-la.",
      },
      {
        type: "tip",
        content: "Use um gerenciador de senhas (KeePassXC, Bitwarden) para nunca mais precisar fazer isso. A senha do PC é a única que vale a pena memorizar — todas as outras ficam no cofre.",
      },
      {
        type: "info",
        content: "O comando passwd guarda os hashes em /etc/shadow. Por segurança, esse arquivo só é lido pelo root. Por isso o reset precisa do shell de recovery.",
      },
      {
        type: "success",
        content: "Depois de resetar, abra o LXQt e troque a senha de novo no aplicativo gráfico (Configurações → Usuários). Mantém o registro consistente.",
      },
    ],
  },
  {
    slug: "onde-pedir-ajuda",
    section: "solucao-problemas",
    title: "Onde pedir ajuda",
    difficulty: "iniciante",
    subtitle: "Comunidade, fóruns e como fazer perguntas que recebem resposta.",
    intro: `Linux é gratuito porque milhares de pessoas dedicam tempo voluntário a ele. Esse mesmo espírito mantém a comunidade respondendo dúvidas em fóruns, chats e canais. A ajuda existe e é, em geral, generosa — mas tem etiqueta. Pergunta mal feita raramente recebe resposta boa, e gente educada ajuda gente educada.

A regra de ouro é: faça a lição de casa primeiro. Pesquise a mensagem de erro EXATA no Google entre aspas. Em quase todo caso, alguém já passou por isso. Se ainda assim não achar, formule a pergunta deixando claro: o que você queria fazer, o que tentou, o que aconteceu (com mensagem de erro literal) e qual sua versão do Lubuntu (\`lsb_release -a\`).

Os melhores lugares para Lubuntu em específico são: o fórum oficial (\`discourse.lubuntu.me\`), a documentação (\`manual.lubuntu.me\`) e o canal \`#lubuntu\` no IRC/Matrix. Para Ubuntu em geral, vale \`askubuntu.com\` (formato Stack Overflow), o \`ubuntuforums.org\` e a documentação \`help.ubuntu.com\`. Em português, o \`Diolinux Plus\` é referência viva.

Neste capítulo você vai aprender quais lugares funcionam para cada tipo de problema, como montar uma pergunta clara (com o template "STAR": Situação, Tentativa, Atual, Resultado esperado) e os sete erros que fazem perguntas ficarem sem resposta. Pedir ajuda é uma habilidade — quem aprende, destrava.`,
    codes: [
      {
        lang: "bash",
        code: `# Antes de pedir ajuda, colete informações do sistema
# Versão do Lubuntu/Ubuntu:
lsb_release -a
# Distributor ID: Ubuntu
# Description:    Ubuntu 24.04.1 LTS
# Release:        24.04
# Codename:       noble`,
      },
      {
        lang: "bash",
        code: `# Versão do kernel e arquitetura:
uname -a
# Linux notebook 6.8.0-45-generic #45-Ubuntu SMP x86_64 GNU/Linux

# Modelo do PC (útil para problemas de hardware):
sudo dmidecode -t system | grep -E "Manufacturer|Product"`,
      },
      {
        lang: "bash",
        code: `# Para colar logs longos, use um pastebin (não cole no fórum direto)
# Instale uma ferramenta CLI:
sudo apt install pastebinit -y

# Mande o log inteiro:
journalctl -b | pastebinit
# devolve uma URL que você cola na pergunta.`,
      },
      {
        lang: "text",
        code: `# Template STAR para perguntas:
# (S)ituação: "Estou usando Lubuntu 24.04 em um Dell Latitude D630."
# (T)entativa: "Tentei conectar Wi-Fi pelo painel — não aparece nenhuma rede."
# (A)tual:    "O comando ip link mostra wlan0 como DOWN.
#             Já dei sudo ip link set wlan0 up sem sucesso."
# (R)esultado esperado: "Que a placa wifi seja reconhecida e
#             apareça lista de redes."
# Anexe a saída de: lsb_release -a, uname -r, lspci | grep -i wifi`,
      },
      {
        lang: "text",
        code: `# Onde pedir ajuda — guia rápido:
# 🐧 Lubuntu específico:
#    https://discourse.lubuntu.me   (fórum oficial)
#    https://manual.lubuntu.me      (manual em PDF)
# 🐧 Ubuntu em geral:
#    https://askubuntu.com          (formato Stack Overflow)
#    https://ubuntuforums.org       (clássico)
#    https://help.ubuntu.com        (documentação)
# 🇧🇷 Português:
#    https://forum.diolinux.com.br
#    https://t.me/diolinux          (Telegram)`,
      },
      {
        lang: "bash",
        code: `# Pesquisando erro corretamente
# Errado: "lubuntu não conecta wifi" -> resultado vago
# Certo: copie a mensagem EXATA entre aspas no Google:
# "wlan0: deauthenticated from"  ubuntu 24.04
# As aspas forçam busca pela frase exata.`,
      },
      {
        lang: "text",
        code: `# Os 7 erros que fazem perguntas serem ignoradas:
# 1) "Não funciona" sem dizer o que é "funcionar"
# 2) Sem mensagem de erro nem captura de tela
# 3) Sem versão do sistema (lsb_release -a)
# 4) Print de tela do celular fotografando a tela do PC
# 5) "URGENTE!" no título — comunidade não tem prazo seu
# 6) Não voltar para dizer se a resposta funcionou
# 7) Apagar a pergunta depois — atrapalha quem busca depois`,
      },
    ],
    points: [
      "Pesquise a mensagem de erro literal entre aspas antes de perguntar.",
      "Sempre informe versão do Lubuntu (lsb_release -a) e modelo do PC.",
      "Cole logs grandes em pastebin, não dentro do post.",
      "Use o template STAR: Situação, Tentativa, Atual, Resultado esperado.",
      "Para Lubuntu, prefira discourse.lubuntu.me; para Ubuntu, askubuntu.com.",
      "Volte para marcar a resposta correta ou explicar o que resolveu.",
      "Iniciante comum: tirar foto da tela com celular em vez de Print Screen.",
      "Iniciante comum: pedir 'ajuda urgente' — a comunidade é voluntária, sem SLA.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de criar tópico novo, leia perguntas parecidas — em geral metade da resposta já está lá. Você economiza seu tempo e o de quem responderia.",
      },
      {
        type: "warning",
        content: "Cuidado com tutoriais antigos. Comandos do Ubuntu 16.04 podem quebrar o 24.04. Sempre confira a data do post e a versão a que se referem.",
      },
      {
        type: "info",
        content: "Comunidades de IRC/Matrix dão respostas muito rápidas, mas exigem ficar online. Para problemas que esperam, fórum é melhor — fica registrado para outros.",
      },
      {
        type: "success",
        content: "Depois que conseguir resolver, edite o post original com a solução. Você ajuda os próximos e ganha boa reputação na comunidade.",
      },
    ],
  },
  {
    slug: "faq-erros-comuns",
    section: "solucao-problemas",
    title: "FAQ de erros comuns",
    difficulty: "iniciante",
    subtitle: "Coletânea dos problemas que TODO iniciante encontra — com solução.",
    intro: `Todo iniciante pisa nos mesmos cinco ou seis pedrinhas no caminho. Não é sinal de incompetência: é a tal "curva de aprendizado". Saber que o problema já foi visto mil vezes (e tem solução conhecida) tira metade do estresse. Este capítulo é uma coleção rápida desses problemas — para você consultar quando algo travar, sem ter que abrir fórum.

A organização é simples: cada bloco tem um sintoma ("o som não sai"), uma causa provável e o comando ou ajuste que resolve. Não é o universo todo de erros — é o conjunto que cobre 80% dos casos relatados pelos usuários novos de Lubuntu nos últimos anos. Os outros 20% você resolve com o que aprendeu nos capítulos anteriores (logs, recovery, comunidade).

A ideia é que você leia uma vez agora para reconhecer os padrões e volte aqui depois quando esbarrar em um. Anote no caderno os que você de fato encontrou — você vai notar que repetem em outros sistemas Linux também.

Considere também o "kit do socorro": um pendrive Live de Lubuntu sempre acessível, espaço de pelo menos 5GB livre na partição raiz e snapshots automáticos do Timeshift. Com esses três, qualquer problema desta lista vira inconveniente passageiro, não tragédia.`,
    codes: [
      {
        lang: "bash",
        code: `# Erro 1: "Não tem som" depois de bootar
# Verifique se PulseAudio/PipeWire está ativo:
pactl info | head -5

# Reinicie o serviço de áudio:
systemctl --user restart pulseaudio
# ou, em sistemas com PipeWire (Lubuntu 23.10+):
systemctl --user restart pipewire pipewire-pulse

# Conferir saída ativa: abra pavucontrol
sudo apt install pavucontrol -y && pavucontrol`,
      },
      {
        lang: "bash",
        code: `# Erro 2: "Wi-Fi não aparece" ou some após suspender
# Listar placas e drivers:
lspci -k | grep -A 3 -i network

# Reset rápido:
sudo systemctl restart NetworkManager

# Para placas Realtek que somem ao acordar:
echo 'options rtl8821ce disable_aspm=1' | \\
    sudo tee /etc/modprobe.d/rtl8821ce.conf
sudo update-initramfs -u`,
      },
      {
        lang: "bash",
        code: `# Erro 3: "Disco cheio" sem motivo aparente
# Veja onde estão os GBs:
sudo du -h --max-depth=1 / 2>/dev/null | sort -h | tail
# Suspeitos clássicos:
#   /var/log     -> sudo journalctl --vacuum-size=100M
#   /var/cache/apt -> sudo apt clean
#   ~/.cache     -> rm -rf ~/.cache/* (só seu user)
#   /tmp         -> reinicia que esvazia sozinho`,
      },
      {
        lang: "bash",
        code: `# Erro 4: "Tela travada" — só o mouse mexe
# Tente matar a sessão sem reiniciar:
# Ctrl+Alt+F3  -> abre console em modo texto
# Faça login com seu usuário e senha
sudo systemctl restart sddm
# Volta para a tela de login. Login normal funciona.

# Para voltar do console à GUI sem reiniciar serviço:
# Ctrl+Alt+F1 ou F7 (varia por hardware)`,
      },
      {
        lang: "bash",
        code: `# Erro 5: "apt diz 'dpkg interrupted'"
# (energia caiu durante atualização, por exemplo)
sudo dpkg --configure -a
sudo apt --fix-broken install
sudo apt update && sudo apt upgrade -y
# 9 em 10 vezes resolve sem precisar de recovery.`,
      },
      {
        lang: "bash",
        code: `# Erro 6: "USB não monta automaticamente"
# Liste os dispositivos:
lsblk
# Encontre o pendrive (geralmente /dev/sdb1)

# Monte manual num ponto temporário:
sudo mkdir -p /mnt/usb
sudo mount /dev/sdb1 /mnt/usb
ls /mnt/usb

# Para desmontar (sempre antes de remover!):
sudo umount /mnt/usb`,
      },
      {
        lang: "bash",
        code: `# Erro 7: "Mouse touchpad clicando sozinho"
# (palm rejection ruim em laptops)
# Instale o utilitário e desabilite tap-to-click:
sudo apt install xinput -y
xinput list
# Encontre o ID do touchpad, exemplo id=12
xinput set-prop 12 "libinput Tapping Enabled" 0`,
      },
    ],
    points: [
      "Som mudo: reinicie pulseaudio/pipewire e verifique pavucontrol.",
      "Wi-Fi some: restart no NetworkManager; placas Realtek precisam de modprobe.",
      "Disco cheio: investigue com du; logs e cache do apt são suspeitos clássicos.",
      "Tela travada: Ctrl+Alt+F3 → login → restart sddm — evita reset bruto.",
      "dpkg interrompido: dpkg --configure -a + apt --fix-broken install resolve.",
      "USB não monta: mount manual em /mnt/usb funciona sempre.",
      "Iniciante comum: arrancar o pendrive sem desmontar — corrompe arquivos.",
      "Iniciante comum: reinstalar o sistema inteiro por causa de erro pequeno listado aqui.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Mantenha sempre 10% do disco livre, mínimo. Sistemas com partição cheia exibem erros aleatórios que parecem 'fantasmagóricos' mas têm causa banal.",
      },
      {
        type: "warning",
        content: "Evite copiar e colar comandos sem entender. Esta FAQ é para você ler junto com o que aprendeu — não como receita mágica para qualquer problema parecido.",
      },
      {
        type: "info",
        content: "O Ubuntu 24.04 LTS (e Lubuntu 24.04) usa PipeWire por padrão em vez de PulseAudio. Os comandos para gerenciar mudam um pouco — confira sua versão antes.",
      },
      {
        type: "success",
        content: "Cada erro que você resolve sozinho é XP. Em seis meses você se descobre ajudando outros no fórum — esse é o momento em que o Linux 'clica' de vez.",
      },
    ],
  },
];
