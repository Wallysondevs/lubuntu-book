import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "lxqt-sob-capo",
    section: "avancado",
    title: "LXQt sob o capô",
    difficulty: "avancado",
    subtitle: "Como as peças do desktop se encaixam por baixo da interface.",
    intro: `Até agora você usou o LXQt clicando, arrastando e configurando pelas janelinhas bonitas. Mas, por baixo dessa casquinha amigável, existem vários programas separados conversando entre si. Pense num restaurante: você só vê o garçom trazendo o prato, mas na cozinha tem o cozinheiro, o ajudante, o lavador de louça, o gerente. Cada um faz uma coisa, e se um sair de férias o restaurante muda de jeito.

O LXQt é exatamente assim. Ele não é um programa único, gigante, como o GNOME ou o KDE Plasma. É um conjunto de pequenos programas independentes que se combinam: o painel é o \`lxqt-panel\`, o gerenciador de janelas (quem desenha as bordas e move as janelas) costuma ser o \`openbox\`, o gerenciador de arquivos é o \`pcmanfm-qt\`, as notificações são do \`lxqt-notificationd\`, e por aí vai. Você pode trocar qualquer peça sem refazer o resto.

Esse design tem dois efeitos importantes para você. Primeiro: o sistema fica leve, porque você só carrega o que precisa. Segundo: quando algo dá errado, dá para identificar exatamente quem é o culpado. Travou só o painel? Reinicia o painel sozinho. Janela sumiu mas o cursor anda? Provavelmente é o gerenciador de janelas, não o LXQt inteiro.

Neste capítulo você vai abrir o capô, ver os principais processos rodando, descobrir os arquivos de configuração no \`~/.config/lxqt/\`, aprender a reiniciar uma peça sem desligar o computador e entender as variáveis de ambiente que o desktop usa. Não é assustador: depois você vai sentir que entende o que está acontecendo, em vez de só clicar e torcer.`,
    codes: [
      {
        lang: "bash",
        code: `# Veja quais processos do LXQt estão rodando agora
ps -ef | grep -E "lxqt|openbox|pcmanfm" | grep -v grep
# saída (resumida):
# voce  1234  ...  /usr/bin/lxqt-session
# voce  1245  ...  /usr/bin/openbox --config-file ...
# voce  1260  ...  /usr/bin/lxqt-panel
# voce  1275  ...  /usr/bin/pcmanfm-qt --desktop`,
      },
      {
        lang: "bash",
        code: `# A pasta de configuração do LXQt fica no seu home
ls ~/.config/lxqt/
# saída:
# lxqt.conf  panel.conf  session.conf  notifications.conf  globalkeyshortcuts.conf

# Cada arquivo é um .ini simples — dá para abrir no editor
nano ~/.config/lxqt/panel.conf
# Procure por [General] e veja position=bottom, iconSize=22, etc.`,
      },
      {
        lang: "ini",
        code: `# Trecho típico de ~/.config/lxqt/panel.conf
[General]
panels=panel1

[panel1]
alignment=-1            # -1 esquerda, 0 centro, 1 direita
position=bottom         # bottom, top, left, right
iconSize=22             # tamanho dos ícones em pixels
panelSize=32            # altura/largura do painel
plugins=mainmenu, quicklaunch, taskbar, tray, clock`,
      },
      {
        lang: "bash",
        code: `# Reiniciar uma peça sem deslogar — útil quando trava
# 1) Reiniciar só o painel:
killall lxqt-panel && lxqt-panel &
# saída: (o painel some por meio segundo e volta)

# 2) Reiniciar o gerenciador de janelas Openbox:
openbox --restart
# Bordas e atalhos recarregam, janelas continuam abertas.

# 3) Reiniciar a sessão inteira (último recurso, fecha apps):
loginctl terminate-user $USER`,
      },
      {
        lang: "bash",
        code: `# Variáveis de ambiente importantes do desktop
echo $XDG_CURRENT_DESKTOP   # → LXQt
echo $XDG_SESSION_TYPE      # → x11   (ou wayland, se você mudou)
echo $DESKTOP_SESSION       # → lxqt
echo $DISPLAY               # → :0     (a tela onde o desktop está)

# Programas usam essas variáveis para se comportar diferente
# em cada desktop. Não mude a menos que saiba o que está fazendo.`,
      },
      {
        lang: "bash",
        code: `# Ver logs da sessão atual do LXQt
journalctl --user -b 0 | grep -i lxqt | tail -20
# saída: linhas com horário e mensagem de cada componente
# Útil quando algo "não abre" e você quer saber por quê.`,
      },
    ],
    points: [
      "LXQt é um conjunto de programas pequenos (painel, WM, notificador, gerenciador de arquivos) — não um bloco único.",
      "O gerenciador de janelas padrão é o Openbox; o painel é o lxqt-panel; o gerenciador de arquivos é o pcmanfm-qt.",
      "Configurações ficam em ~/.config/lxqt/ como arquivos .ini de leitura simples.",
      "Você pode reiniciar uma peça (killall lxqt-panel && lxqt-panel &) sem fechar suas janelas.",
      "openbox --restart recarrega atalhos e tema sem perder nada do que está aberto.",
      "Variáveis como XDG_CURRENT_DESKTOP e DISPLAY contam ao app em qual desktop ele está rodando.",
      "journalctl --user mostra os logs da sessão; comece por ali quando algo \"não funciona\".",
      "Iniciante comum: editar panel.conf com o painel rodando — o LXQt sobrescreve ao fechar. Edite com o painel parado.",
      "Iniciante comum: confundir lxqt-session (o orquestrador) com lxqt-panel (a barra) e matar o errado.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Antes de mexer em qualquer arquivo dentro de ~/.config/lxqt/, faça uma cópia: cp panel.conf panel.conf.bak. Se quebrar tudo, basta restaurar.",
      },
      {
        type: "info",
        content: "Se você matar o lxqt-session, o desktop inteiro fecha (volta para a tela de login). Os outros componentes morrem junto, é o pai deles.",
      },
      {
        type: "tip",
        content: "Quer trocar o gerenciador de janelas? Edite ~/.config/lxqt/session.conf, na seção [General], window_manager=kwin_x11 (ou outro). Saia e entre na sessão para aplicar.",
      },
      {
        type: "danger",
        content: "Não rode programas do LXQt com sudo (ex: sudo lxqt-panel). Isso bagunça permissões dos arquivos de config e cria erros chatos de resolver.",
      },
    ],
  },
  {
    slug: "scripts-shell-uteis",
    section: "avancado",
    title: "Scripts de shell úteis",
    difficulty: "intermediario",
    subtitle: "Automatizando tarefas chatas com poucas linhas de Bash.",
    intro: `Imagine que toda segunda-feira você abre o terminal e digita as mesmas seis coisas: atualizar pacotes, limpar a lixeira, fazer backup da pasta Documentos, mostrar o espaço em disco. É como escovar dente: necessário, mas chato. Um script de shell é um arquivo de texto onde você guarda esses comandos em ordem, salva com um nome (\`segunda.sh\`) e roda com uma linha só. O computador faz a parte chata, você bebe seu café.

Bash é a linguagem dos scripts no Lubuntu. É a mesma língua que você fala com o terminal: cada linha do script é como se você tivesse digitado e apertado Enter. Mas o script ganha super-poderes: variáveis, condições (\`if\`), loops (\`for\`), funções. Tudo o que você precisa para automatizar 90% das tarefas do dia a dia.

Quem nunca escreveu script tem medo, mas a verdade é que os úteis são curtos. Um backup decente cabe em 10 linhas. Um lembrete diário, em 3. Um script que abre seu ambiente de trabalho (terminal + editor + navegador), em 5. A regra é: começar pequeno, salvar em \`~/bin/\` ou \`~/.local/bin/\` para ficar disponível como qualquer comando, e ir melhorando conforme aprende.

Neste capítulo você aprende a estrutura mínima de um script (\`#!/bin/bash\`, permissão de execução), variáveis, leitura de input, condições simples, loops em arquivos e algumas receitas prontas que dá para copiar, colar e adaptar para sua rotina. Bem-vindo ao clube dos preguiçosos produtivos.`,
    codes: [
      {
        lang: "bash",
        code: `# Crie sua pasta pessoal de scripts e adicione ao PATH
mkdir -p ~/.local/bin

# Verifique se já está no PATH
echo $PATH | grep -q "$HOME/.local/bin" && echo "ok" || echo "adicione manualmente"

# Se "adicione manualmente", coloque no final do ~/.bashrc:
# export PATH="$HOME/.local/bin:$PATH"
# Depois: source ~/.bashrc`,
      },
      {
        lang: "bash",
        code: `# Estrutura mínima de um script — arquivo: ~/.local/bin/ola
#!/bin/bash
# A primeira linha (shebang) diz qual interpretador usar.

nome="\${1:-mundo}"   # \$1 é o primeiro argumento; se vazio, usa "mundo"
echo "Olá, \$nome!"

# Torne executável e rode
chmod +x ~/.local/bin/ola
ola              # → Olá, mundo!
ola Bruno        # → Olá, Bruno!`,
      },
      {
        lang: "bash",
        code: `# Backup rápido de uma pasta — arquivo: ~/.local/bin/backup-docs
#!/bin/bash
set -euo pipefail   # falha cedo: erro/variavel-vazia/pipe quebrado

origem="\$HOME/Documentos"
destino="\$HOME/backups"
data=\$(date +%Y-%m-%d)              # ex: 2025-01-30
arquivo="\$destino/docs-\$data.tar.gz"

mkdir -p "\$destino"
tar -czf "\$arquivo" -C "\$HOME" Documentos
echo "Backup salvo em \$arquivo"
# saída: Backup salvo em /home/voce/backups/docs-2025-01-30.tar.gz`,
      },
      {
        lang: "bash",
        code: `# Atualizar o sistema com confirmação — arquivo: ~/.local/bin/atualizar
#!/bin/bash
echo "Vou atualizar o sistema. Continuar? (s/N)"
read -r resposta
if [[ "\$resposta" == "s" || "\$resposta" == "S" ]]; then
    sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
    echo "Pronto."
else
    echo "Cancelado."
fi`,
      },
      {
        lang: "bash",
        code: `# Loop: renomear todas as fotos de uma pasta com data atual
#!/bin/bash
cd ~/Imagens || exit 1
contador=1
for arquivo in *.jpg; do
    # nome novo: 2025-01-30_001.jpg, 2025-01-30_002.jpg ...
    novo=\$(printf "%s_%03d.jpg" "\$(date +%F)" "\$contador")
    mv -- "\$arquivo" "\$novo"
    contador=\$((contador + 1))
done
echo "Renomeei \$((contador - 1)) arquivos."`,
      },
      {
        lang: "bash",
        code: `# Mini menu interativo — arquivo: ~/.local/bin/menu
#!/bin/bash
echo "1) Espaço em disco"
echo "2) Memória livre"
echo "3) IP da máquina"
read -rp "Escolha: " op
case "\$op" in
    1) df -h / ;;
    2) free -h ;;
    3) hostname -I ;;
    *) echo "Opção inválida" ;;
esac`,
      },
      {
        lang: "bash",
        code: `# Verificar a saúde dos seus scripts com shellcheck
sudo apt install shellcheck -y
shellcheck ~/.local/bin/backup-docs
# Mostra dicas de segurança e bugs antes de você cair neles.`,
      },
    ],
    points: [
      "Todo script começa com #!/bin/bash (shebang) e precisa de chmod +x para virar executável.",
      "~/.local/bin é o lugar pessoal para guardar seus scripts; já entra no PATH na maioria dos sistemas.",
      "set -euo pipefail no topo evita que erros silenciosos quebrem o script no meio.",
      "$1, $2... são os argumentos passados na linha de comando; ${1:-padrão} usa um valor se vazio.",
      "Sempre coloque variáveis entre aspas duplas (\"$var\") para sobreviver a espaços e caracteres estranhos.",
      "for, if, case e read cobrem 90% da automação; comece com eles antes de partir para coisas exóticas.",
      "shellcheck encontra bugs e más práticas antes de você rodar o script — vale instalar.",
      "Iniciante comum: esquecer o chmod +x e ficar tentando entender por que \"comando não encontrado\".",
      "Iniciante comum: copiar script da internet com sudo cego — leia antes de executar com privilégios.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca rode scripts baixados sem ler. Um script com sudo rm -rf / passa em 0.3 segundos. Abra no editor, leia, e só depois execute.",
      },
      {
        type: "tip",
        content: "Coloque um cabeçalho de comentário em cada script: o que faz, quem escreveu e a data. Daqui a um ano, o seu eu do futuro vai te agradecer.",
      },
      {
        type: "info",
        content: "Para rodar um script automaticamente todo dia, agende com cron (visto na seção Manutenção) ou systemd timer.",
      },
      {
        type: "warning",
        content: "Bash não é a melhor linguagem para tudo. Se o script passar de 200 linhas, pense em reescrever em Python — fica mais legível e testável.",
      },
    ],
  },
  {
    slug: "acessibilidade",
    section: "avancado",
    title: "Acessibilidade no Lubuntu",
    difficulty: "intermediario",
    subtitle: "Leitor de tela, lupa, alto contraste e atalhos para todos.",
    intro: `Acessibilidade é o conjunto de recursos que permite a qualquer pessoa usar o computador, independentemente de visão, audição, mobilidade ou cognição. Pense numa rampa do lado da escada: ela é "para cadeirantes", mas também ajuda quem empurra carrinho, quem carrega caixa, quem está com o joelho machucado. No software, é igual: a fonte maior ajuda quem enxerga pouco, mas também quem está com o olho cansado às onze da noite.

O Lubuntu, por ser leve, vem com menos recursos de acessibilidade do que o GNOME ou o Windows fora da caixa. Mas tudo pode ser instalado: o leitor de tela Orca, a lupa Magnus, teclas de aderência (sticky keys) para quem não consegue apertar duas teclas ao mesmo tempo, temas de alto contraste, ajuste de tamanho de fonte e zoom no painel.

Mesmo que você não tenha nenhuma necessidade especial agora, vale conhecer. Em algum momento você vai precisar mostrar o computador para alguém com presbiopia ou catarata, ou para uma criança aprendendo. Saber onde aumentar fonte, ativar contraste e ler texto em voz alta é parte do kit básico de quem domina o sistema.

Neste capítulo, você vai instalar e ativar os principais recursos, configurar atalhos para ligar/desligar rápido, ajustar fontes e contraste pelo \`lxqt-config-appearance\`, e conhecer as opções no painel de Configurações. Tudo testado no Lubuntu LTS atual com LXQt.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar o leitor de tela Orca e a lupa Magnus
sudo apt update
sudo apt install orca magnus -y

# Verificar versões
orca --version
magnus --version`,
      },
      {
        lang: "bash",
        code: `# Ligar e desligar o Orca pelo teclado
# Atalho padrão: Super (tecla Windows) + Alt + S
# Ou pelo terminal:
orca &              # liga o leitor (lê em voz alta)
killall orca        # desliga

# Configurar voz, idioma e atalhos:
orca --setup
# Abre um assistente; escolha pt-BR para voz em português.`,
      },
      {
        lang: "bash",
        code: `# Lupa Magnus: aumenta uma área da tela em janela flutuante
magnus &            # abre a lupa (3x por padrão)
# Aproxime/afaste com a roda do mouse sobre a janela da lupa.

# Para um zoom rápido só com teclado, use o do Compton/Picom
# ou instale o xzoom como alternativa simples:
sudo apt install xzoom -y
xzoom -mag 3`,
      },
      {
        lang: "bash",
        code: `# Tema de alto contraste — menus, janelas e ícones mais legíveis
# Abra: Preferências → LXQt → Aparência
# Em "Tema do Widget", escolha um tema escuro como "Lubuntu Arc Dark"
# Em "Ícones", "HighContrast" oferece bordas grossas e cores fortes.

# Pelo terminal, edite direto:
nano ~/.config/lxqt/lxqt.conf
# Ajuste: theme=lubuntu-arc-dark e icon_theme=HighContrast`,
      },
      {
        lang: "bash",
        code: `# Aumentar a fonte do sistema sem mexer em monitor
# Preferências → LXQt → Aparência → Aba "Fontes"
# Subir de 10pt para 12pt ou 14pt já ajuda muito.

# Pelo arquivo de config:
nano ~/.config/lxqt/lxqt.conf
# [General]
# font="Noto Sans,12,-1,5,50,0,0,0,0,0"
# Saia e entre na sessão para aplicar em todas as janelas.`,
      },
      {
        lang: "bash",
        code: `# Teclas de aderência (Sticky Keys) — aperte Shift e depois letra
# Útil para quem não consegue Ctrl+Shift+T ao mesmo tempo.
# Ative com xkbset (precisa instalar):
sudo apt install xkbset -y
xkbset sticky -twokey -latchlock
xkbset exp =sticky

# Para desligar:
xkbset -sticky`,
      },
      {
        lang: "bash",
        code: `# Atalhos globais úteis para acessibilidade
# Configure em: Preferências → LXQt → Atalhos do teclado globais
# Sugestões:
#   Super + Plus      → magnus
#   Super + Minus     → killall magnus
#   Super + Alt + S   → orca (liga/desliga)
#   Super + +         → aumentar fonte (script próprio)`,
      },
    ],
    points: [
      "Acessibilidade beneficia todo mundo, não só quem tem necessidade especial.",
      "Lubuntu vem leve: instale orca (leitor) e magnus (lupa) com apt para começar.",
      "Orca lê em voz alta o que está na tela; rode orca --setup para escolher voz em pt-BR.",
      "Magnus abre uma janela com zoom; xzoom é uma alternativa mais leve.",
      "Temas de alto contraste estão em Preferências → LXQt → Aparência.",
      "Aumentar a fonte de 10pt para 12pt já reduz fadiga visual e ajuda quem enxerga mal.",
      "Sticky Keys (xkbset sticky) ajuda quem não pressiona combinações simultâneas.",
      "Iniciante comum: ativar Orca sem ouvir o som; confira se o áudio do sistema está ligado e o pulseaudio rodando.",
      "Iniciante comum: trocar o tema e achar que travou — algumas mudanças exigem sair e entrar na sessão.",
    ],
    alerts: [
      {
        type: "info",
        content: "O Lubuntu não inclui o Orca por padrão para manter o tamanho da imagem ISO baixo. Não é descaso — basta instalar.",
      },
      {
        type: "tip",
        content: "Para pessoas idosas, a combinação mais útil costuma ser: fonte 14pt + tema escuro + ícones grandes (28px) + lupa por atalho de teclado.",
      },
      {
        type: "warning",
        content: "Alguns aplicativos GTK podem ignorar o tema do LXQt. Instale lxqt-qtplugin e qt5ct para uniformizar a aparência entre Qt e GTK.",
      },
      {
        type: "success",
        content: "A comunidade Ubuntu mantém o time \"a11y\" focado em acessibilidade. Se algum recurso falta, abra um bug — eles costumam responder rápido.",
      },
    ],
  },
  {
    slug: "particoes-avancadas",
    section: "avancado",
    title: "Partições avançadas e LVM",
    difficulty: "avancado",
    subtitle: "Esquemas de partição, swap, criptografia e LVM explicados.",
    intro: `Quando você instalou o Lubuntu lá no começo do livro, deixou o instalador fazer o particionamento sozinho. Funcionou. Para a maioria das pessoas, isso é o suficiente. Mas chega uma hora em que você quer dividir o disco de um jeito específico: separar \`/home\` para sobreviver a reinstalações, criptografar o disco inteiro para o caso do notebook ser roubado, ou usar LVM para redimensionar partições sem dor.

Pense no disco como um terreno. O particionamento é o muro que você levanta para dividir em lotes. Sem muro, é tudo um espaço só. Com muro, cada lote pode ter dono diferente, finalidade diferente e sobreviver a um problema no lote vizinho. \`/\` (raiz) é o lote do sistema, \`/home\` é o lote dos seus arquivos pessoais, \`swap\` é o "lote de emergência" usado como memória extra.

LVM (Logical Volume Manager) é como ter um terreno com muros móveis. Em vez de fixar o tamanho de cada lote no início, você cria \"volumes lógicos\" que podem crescer ou encolher conforme precisar, mesmo com o sistema rodando. É a opção certa quando você não tem certeza de quanto espaço cada coisa vai ocupar. Junte com criptografia (LUKS) e seu disco fica protegido contra acesso físico.

Neste capítulo você verá os esquemas mais comuns (\`/\` + swap, \`/\` + \`/home\` + swap, LVM com criptografia), comandos para inspecionar partições (\`lsblk\`, \`fdisk -l\`, \`blkid\`), como ver o \`/etc/fstab\` (a "lista de muros" que o sistema lê ao ligar) e quando vale a pena migrar de um esquema simples para LVM. Aviso: mexer em partição de disco em uso é arriscado. Faça sempre em pendrive live ou em máquina virtual antes de fazer no PC principal.`,
    codes: [
      {
        lang: "bash",
        code: `# Ver todos os discos e partições — visão de árvore, fácil de ler
lsblk
# saída exemplo:
# NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
# sda      8:0    0 465.8G  0 disk
# ├─sda1   8:1    0   512M  0 part /boot/efi
# ├─sda2   8:2    0   460G  0 part /
# └─sda3   8:3    0   5.3G  0 part [SWAP]`,
      },
      {
        lang: "bash",
        code: `# Detalhes técnicos das partições (precisa sudo)
sudo fdisk -l /dev/sda
# Mostra tabela GPT/MBR, tamanho em setores, tipo de cada partição

# UUIDs (identificadores únicos) — usados no /etc/fstab
sudo blkid
# /dev/sda1: UUID="ABCD-1234" TYPE="vfat"
# /dev/sda2: UUID="aaa-bbb-ccc" TYPE="ext4"
# /dev/sda3: UUID="111-222-333" TYPE="swap"`,
      },
      {
        lang: "bash",
        code: `# /etc/fstab — quem manda nas montagens automáticas no boot
cat /etc/fstab
# saída típica:
# UUID=ABCD-1234     /boot/efi  vfat   defaults     0 1
# UUID=aaa-bbb-ccc   /          ext4   errors=remount-ro 0 1
# UUID=111-222-333   none       swap   sw           0 0

# NUNCA edite à toa: erro aqui pode travar o boot.
# Sempre faça backup: sudo cp /etc/fstab /etc/fstab.bak`,
      },
      {
        lang: "bash",
        code: `# Esquema recomendado para iniciantes intermediários:
# /boot/efi  →  512MB   (FAT32)   só em sistemas UEFI
# /          →  30-50GB (ext4)    sistema e programas
# /home      →  resto   (ext4)    seus arquivos pessoais
# swap       →  igual à RAM (até 8GB) ou zram

# Vantagem do /home separado: ao reinstalar o Lubuntu,
# você marca "use partição existente, não formatar" no /home
# e mantém todos os seus arquivos e configurações.`,
      },
      {
        lang: "bash",
        code: `# Inspecionar LVM (se você instalou com LVM)
sudo pvs   # physical volumes (discos físicos)
sudo vgs   # volume groups (grupos)
sudo lvs   # logical volumes (volumes lógicos)

# Aumentar um volume lógico (exemplo: /home com 10GB extras)
sudo lvextend -L +10G /dev/mapper/vg0-home
sudo resize2fs /dev/mapper/vg0-home    # ext4 cresce com o sistema rodando
df -h /home   # confirma o novo tamanho`,
      },
      {
        lang: "bash",
        code: `# Verificar se o disco está criptografado (LUKS)
sudo cryptsetup status /dev/mapper/sda3_crypt
# Se for "active", o disco usa criptografia LUKS.

# Trocar a senha do disco criptografado:
sudo cryptsetup luksChangeKey /dev/sda3
# Pede a senha antiga, depois a nova duas vezes.`,
      },
      {
        lang: "bash",
        code: `# Verificar saúde do disco (SSD ou HD) — antes de mexer em partições
sudo apt install smartmontools -y
sudo smartctl -a /dev/sda | grep -E "SMART overall|Reallocated|Power_On_Hours"
# saída:
# SMART overall-health self-assessment test result: PASSED
# Reallocated_Sector_Ct: 0       (zero = ótimo)
# Power_On_Hours: 12500          (horas ligado)`,
      },
    ],
    points: [
      "Particionar é dividir o disco em lotes; cada um tem finalidade diferente.",
      "Para sistemas UEFI modernos, use tabela GPT e tenha uma /boot/efi de 512MB em FAT32.",
      "Separar /home permite reinstalar o sistema sem perder arquivos pessoais.",
      "LVM dá flexibilidade: redimensiona volumes com o sistema rodando.",
      "LUKS criptografa o disco inteiro; protege contra acesso físico ao notebook.",
      "/etc/fstab é a tabela que o sistema lê no boot para montar partições.",
      "lsblk dá uma visão simples; fdisk -l e blkid mostram detalhes técnicos.",
      "Iniciante comum: editar /etc/fstab com erro e travar o boot — sempre faça backup antes.",
      "Iniciante comum: mexer em partição de disco em uso sem booatar pelo live USB — perigo enorme de perder dados.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Mudanças em partições podem destruir dados se você errar. Faça backup completo (Timeshift + arquivos pessoais) ANTES de qualquer operação.",
      },
      {
        type: "warning",
        content: "Redimensionar partição em uso (mesmo no GParted live) é mais arriscado em HDs do que em SSDs por causa de movimentação física. Tenha paciência e não interrompa.",
      },
      {
        type: "info",
        content: "Se você usa SSD, a tradicional partição de swap pode ser substituída por zram (visto em Hardware Leve). Reduz escrita no disco e melhora desempenho.",
      },
      {
        type: "tip",
        content: "Para experimentar particionamento sem risco, use uma máquina virtual (VirtualBox ou GNOME Boxes). Crie disco virtual de 20GB e brinque à vontade.",
      },
    ],
  },
  {
    slug: "glossario",
    section: "avancado",
    title: "Glossário do mundo Lubuntu",
    difficulty: "iniciante",
    subtitle: "Termos técnicos explicados em português simples.",
    intro: `Toda comunidade tem seu vocabulário. Mecânicos falam de "junta homocinética", médicos falam de "anamnese", e quem usa Linux fala de "kernel", "shell", "PPA" e "init system". No começo soa como código secreto. A boa notícia é que cada um desses termos tem um significado simples e concreto, e depois que você entende, lê fórum, tutorial e mensagem de erro com bem mais facilidade.

Pense neste capítulo como um pequeno dicionário do mundo Lubuntu/Linux. Não está em ordem alfabética rigorosa: agrupei por temas (sistema, software, rede, segurança) para você relacionar palavras parecidas. Cada termo vem com uma definição curta, uma analogia do dia a dia quando útil, e um exemplo prático.

Você não precisa decorar tudo. Use como referência: quando bater a dúvida sobre o que é \"systemd\" ou \"Wayland\", volte aqui. Aos poucos, esses termos vão aparecendo no seu vocabulário sem você perceber. É o sinal de que você passou de \"usuário curioso\" para \"pessoa que entende Linux\".

Vou usar exemplos rápidos no formato \`# termo: explicação curta\` em blocos de código, para você varrer com os olhos. Quando o conceito for mais denso, escrevo um parágrafo dentro do código mesmo, comentado. Tudo cabível e já testado. Boa leitura.`,
    codes: [
      {
        lang: "text",
        code: `KERNEL
O coração do sistema operacional. É o programa que conversa diretamente
com o hardware (CPU, memória, disco, dispositivos USB). No Linux, o kernel
se chama "Linux" mesmo (criado por Linus Torvalds em 1991). Cada release
do Lubuntu vem com uma versão específica do kernel.
Comando: uname -r   → mostra a versão atual (ex: 6.5.0-25-generic)`,
      },
      {
        lang: "text",
        code: `DISTRIBUIÇÃO (DISTRO)
Um sistema operacional completo construído em volta do kernel Linux.
Inclui: kernel + utilitários básicos + gerenciador de pacotes + interface
gráfica + aplicativos. Lubuntu, Ubuntu, Debian, Fedora, Arch, Manjaro são
distros. Diferentes escolhas para diferentes gostos.

SHELL
O programa que recebe comandos de texto e os executa. Bash é o shell
padrão do Lubuntu. Outros: zsh, fish, sh.
Comando: echo $SHELL   → /bin/bash`,
      },
      {
        lang: "text",
        code: `TERMINAL (EMULADOR)
A janela onde você digita comandos. No Lubuntu é o QTerminal.
Não confunda: o terminal é a janela; o shell é o programa que processa.

REPOSITÓRIO (REPO)
Servidor que guarda pacotes prontos para instalar. O apt baixa de lá.
Listas em /etc/apt/sources.list e /etc/apt/sources.list.d/

PPA (Personal Package Archive)
Repositório extra hospedado no Launchpad por uma pessoa ou time.
Útil para versões mais novas que as oficiais. Cuidado com fonte desconhecida.`,
      },
      {
        lang: "text",
        code: `SYSTEMD
O "init system" — o primeiro processo (PID 1) que o kernel inicia.
Cuida de subir todos os serviços (rede, log, audio, etc.) e gerenciar
o ciclo de vida deles. Comando: systemctl status, systemctl restart NOME.

SERVIÇO (DAEMON)
Programa que roda em segundo plano, sem interface. Exemplos: cups
(impressão), bluetooth, NetworkManager, sshd. Por convenção, terminam em "d".

SUDO
"Substitute User Do" — executa um comando como outro usuário,
normalmente root. Exige senha. Comando: sudo apt update`,
      },
      {
        lang: "text",
        code: `X11 (Xorg)
Sistema gráfico clássico do Linux. Desenha as janelas. Padrão no Lubuntu.

WAYLAND
Sistema gráfico moderno, sucessor do X11. Mais simples e seguro.
GNOME e KDE já usam por padrão; LXQt está migrando aos poucos.

GERENCIADOR DE JANELAS (WM)
O programa que desenha bordas, move janelas, controla foco.
No Lubuntu padrão é o Openbox. Outros: kwin, mutter, i3, sway.

DESKTOP ENVIRONMENT (DE)
Conjunto completo: WM + painel + gerenciador de arquivos + temas.
LXQt é o DE do Lubuntu. Outros: GNOME, KDE Plasma, XFCE, MATE.`,
      },
      {
        lang: "text",
        code: `APT / DPKG
apt: ferramenta de alto nível para gerenciar pacotes (.deb).
dpkg: ferramenta de baixo nível, manipula pacotes individuais.

SNAP / FLATPAK
Formatos modernos de empacotamento "universal". Cada app vem com
suas dependências, isolado do resto. Mais pesado, mas evita conflito.

AUR (Arch User Repository) — só Arch/Manjaro, NÃO existe no Lubuntu.

DEPENDÊNCIA
Outro pacote que o seu pacote precisa para funcionar. apt resolve sozinho.`,
      },
      {
        lang: "text",
        code: `GRUB
"GRand Unified Bootloader" — programa que aparece nos primeiros
segundos do boot e deixa você escolher qual sistema iniciar
(útil em dual boot Lubuntu + Windows).

LTS (Long Term Support)
Versão "de longa duração" do Ubuntu/Lubuntu, com 5 anos de atualizações
de segurança. Sai a cada 2 anos: 22.04, 24.04, 26.04...

UEFI / BIOS
Firmware que roda antes do sistema operacional, na placa-mãe.
UEFI é o moderno (suporta GPT, Secure Boot); BIOS é o legado.`,
      },
    ],
    points: [
      "Kernel = coração do SO; distro = sistema completo construído em volta dele.",
      "Shell (bash) é a língua; terminal (QTerminal) é a janela onde você fala.",
      "systemd cuida de iniciar e parar serviços (daemons) do sistema.",
      "apt e dpkg gerenciam pacotes .deb; snap e flatpak são alternativas universais.",
      "PPA é repositório extra; instale só de fontes confiáveis.",
      "X11 (Xorg) é o gráfico clássico; Wayland é o moderno, em adoção gradual.",
      "GRUB é a tela de escolha de SO no boot; LTS é a versão estável de 5 anos.",
      "Iniciante comum: confundir terminal (a janela) com shell (o interpretador).",
      "Iniciante comum: achar que distro Linux é tudo igual — cada uma tem suas escolhas e ferramentas.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Sempre que ver um termo novo num tutorial, busque \"o que é XYZ linux\" no DuckDuckGo. A wiki do Arch (mesmo não usando Arch) é uma das melhores fontes para entender qualquer conceito Linux.",
      },
      {
        type: "info",
        content: "O ManPages (manual do sistema) tem definições oficiais. Comando: man systemd, man apt, man bash. Use / para buscar palavra dentro da página.",
      },
      {
        type: "success",
        content: "Você já usou todos esses termos neste livro. Reler este glossário no final é uma boa forma de fixar o que aprendeu.",
      },
    ],
  },
  {
    slug: "recursos-extras",
    section: "avancado",
    title: "Recursos extras e próximos passos",
    difficulty: "iniciante",
    subtitle: "Sites, livros, fóruns e canais para continuar aprendendo.",
    intro: `Você chegou ao fim do livro. Parabéns! Aprendeu a instalar o Lubuntu, navegar pelo LXQt, dominar o terminal, gerenciar pacotes, fazer backup, resolver problemas, mergulhar em projetos práticos e até abrir o capô do sistema. Mas Linux é um mundo enorme: o que está aqui é o suficiente para usar com confiança no dia a dia, e a base para ir muito além se quiser.

Este capítulo final é um mapa para os próximos passos. Listei sites, fóruns, livros, canais de YouTube e comandos que ajudam a continuar aprendendo. Não saia tentando seguir tudo de uma vez — escolha um ou dois lugares, frequente regularmente e os outros aparecem naturalmente. A regra é: aprender Linux é como aprender um idioma. Pequenas doses diárias funcionam melhor do que maratona de fim de semana.

Recomendo escolher um \"projeto pessoal\" para praticar. Pode ser configurar um servidor de mídia em casa, transformar um notebook velho em estação de estudo, fazer um bot que avisa o tempo no Telegram, automatizar backup das fotos. Projeto real ensina muito mais que tutorial isolado. Se travar, volte aos capítulos anteriores e use o glossário.

Por fim, contribua. Se aprendeu algo aqui, ensine para alguém. Responda dúvida em fórum, traduza um texto, reporte um bug. A comunidade do software livre é feita de gente como você que decidiu retribuir um pouquinho. É assim que o Lubuntu chega cada vez melhor para a próxima pessoa que abre o instalador pela primeira vez. Boa jornada.`,
    codes: [
      {
        lang: "text",
        code: `SITES OFICIAIS
- lubuntu.me               → site oficial, downloads e notícias
- discourse.lubuntu.me     → fórum oficial em inglês
- manual.lubuntu.me        → manual completo, atualizado a cada release
- ubuntu.com/community     → comunidade Ubuntu (pais do Lubuntu)
- wiki.archlinux.org       → wiki técnica fantástica, vale para qualquer distro`,
      },
      {
        lang: "text",
        code: `EM PORTUGUÊS
- ubuntu-br.org            → comunidade Ubuntu Brasil
- diolinux.com.br          → blog e canal com notícias e tutoriais
- terminalroot.com.br      → tutoriais de terminal e shell scripting
- fabricio.org             → blog com posts profundos sobre Linux
- linuxdicas.com.br        → dicas práticas em formato curto`,
      },
      {
        lang: "text",
        code: `FÓRUNS PARA PEDIR AJUDA
- discourse.lubuntu.me     → o lugar certo para dúvidas específicas do Lubuntu
- askubuntu.com            → Q&A no estilo Stack Overflow, mar de respostas
- forum.ubuntu-br.org      → em português, comunidade ativa
- reddit.com/r/lubuntu     → casual, bom para mostrar setup e tirar dúvida rápida
- reddit.com/r/linux4noobs → focado em iniciantes, sem julgamento`,
      },
      {
        lang: "bash",
        code: `# Documentação que já está no seu sistema
man comando         # manual oficial; ex: man apt, man systemctl
comando --help      # ajuda rápida; ex: ls --help
info comando        # versão hipertexto, mais longa
tldr comando        # exemplos práticos (instale: sudo apt install tldr)

# Exemplo: tldr é ótimo para lembrar comandos
tldr tar
# Mostra os 5-6 usos mais comuns com exemplos prontos.`,
      },
      {
        lang: "text",
        code: `LIVROS RECOMENDADOS (em português ou disponíveis traduzidos)
- "The Linux Command Line" — William Shotts (gratuito em linuxcommand.org)
- "Linux: Guia do Administrador" — Carlos E. Morimoto
- "How Linux Works" — Brian Ward
- "Bash Guide for Beginners" — Machtelt Garrels (gratuito online)
- "UNIX and Linux System Administration Handbook" — Nemeth et al.`,
      },
      {
        lang: "text",
        code: `CANAIS DE YOUTUBE
Em português:
- Diolinux                 → notícias e tutoriais semanais
- Linux Tips               → dicas curtas e práticas
- Bóson Treinamentos       → cursos completos em vídeo, didática boa

Em inglês:
- DistroTube               → análises de distros e ferramentas
- The Linux Experiment     → notícias e opinião
- LearnLinuxTV             → tutoriais técnicos passo a passo`,
      },
      {
        lang: "bash",
        code: `# Pratique todo dia: 15 minutos no terminal
# Sugestões de exercícios diários:
#   1) Aprenda 1 comando novo via tldr ou man
#   2) Escreva 1 script de 5-10 linhas que automatize algo seu
#   3) Resolva 1 dúvida no askubuntu (em vez de só ler)
#   4) Configure 1 atalho ou tema no LXQt

# Comando que você vai usar muito ao explorar:
apropos PALAVRA       # busca comandos relacionados
# ex: apropros backup → lista todos os comandos de backup do sistema`,
      },
    ],
    points: [
      "Manual oficial do Lubuntu (manual.lubuntu.me) é a fonte mais confiável.",
      "askubuntu.com tem respostas para 99% das dúvidas comuns de Lubuntu/Ubuntu.",
      "Comunidade brasileira é ativa: Diolinux, Ubuntu-BR, fóruns em português.",
      "Comandos man, --help e tldr trazem documentação direto no sistema.",
      "Livro \"The Linux Command Line\" (gratuito, em inglês) é referência absoluta.",
      "Escolha um projeto pessoal — aprende-se mais fazendo do que só lendo.",
      "Contribua: responder dúvida em fórum é forma de aprender e retribuir.",
      "Iniciante comum: tentar seguir 10 cursos ao mesmo tempo e não terminar nenhum.",
      "Iniciante comum: ter vergonha de perguntar — todo iniciante já passou pelas mesmas dúvidas.",
    ],
    alerts: [
      {
        type: "success",
        content: "Você terminou o livro! Esse é só o começo. Linux fica mais divertido quanto mais você usa. Em 6 meses de uso diário você vai se surpreender com tudo que sabe.",
      },
      {
        type: "tip",
        content: "Antes de perguntar em fórum, faça o dever de casa: copie a mensagem de erro exata e busque no Google + askubuntu. Em 80% dos casos a resposta já existe.",
      },
      {
        type: "info",
        content: "Quando perguntar, dê contexto: versão do Lubuntu (lsb_release -a), o que você fez, o que esperava, o que aconteceu, e logs relevantes. Pergunta boa atrai resposta boa.",
      },
      {
        type: "warning",
        content: "Cuidado com tutoriais antigos da internet. Comandos do Ubuntu 16.04 nem sempre funcionam no 24.04. Confira a data do post e a versão alvo antes de copiar.",
      },
    ],
  },
];
