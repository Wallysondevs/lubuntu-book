import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "baixar-iso",
    section: "instalacao",
    title: "Baixando a ISO oficial do Lubuntu",
    difficulty: "iniciante",
    subtitle: "Onde encontrar, qual versão escolher e como confirmar que o arquivo veio inteiro.",
    intro: `Antes de instalar o Lubuntu no seu computador, você precisa baixar o "molde" do sistema. Esse molde é um arquivo único, grandinho (uns 2 a 3 GB), com a extensão \`.iso\`. Pense nele como a fotografia de um CD de instalação: tem tudo lá dentro, do instalador aos programas que vêm de fábrica. A partir desse arquivo a gente vai gravar um pendrive nos próximos capítulos.

A primeira regra de ouro é: baixe sempre do site oficial. Existe muito site espelhando ISOs alteradas com vírus ou cripto-mineradores escondidos. O endereço certo é \`lubuntu.me/downloads\`. Lá você encontra duas famílias de versões: as LTS (Long Term Support, com 3 a 5 anos de suporte) e as interim (lançadas a cada 6 meses, suporte de só 9 meses). Para iniciantes, sempre escolha a LTS — você atualiza menos e quebra menos coisa.

Depois de baixar, vem um passo que quase ninguém faz e por isso muita gente acaba com pendrive corrompido: conferir o checksum. É um número longo (tipo um RG do arquivo) que o site publica. Você gera o mesmo número no seu computador e compara. Se bateu, o download veio inteiro. Se não bateu, baixe de novo — uma ISO incompleta dá erro estranho lá na frente, na hora que você menos espera.

Ao final deste capítulo você vai ter no computador um arquivo tipo \`lubuntu-26.04.1-desktop-amd64.iso\` validado, pronto para o pendrive. Esse pequeno cuidado de cinco minutos evita horas de dor de cabeça depois.`,
    codes: [
      {
        lang: "bash",
        code: `# Endereço oficial — abra no navegador:
# https://lubuntu.me/downloads/

# Escolha:
#   - Versão LTS (ex.: 26.04.x LTS) — recomendada
#   - Arquitetura amd64 — para 99% dos PCs/notebooks
#   - Formato Desktop ISO

# Você vai baixar algo como:
#   lubuntu-26.04.1-desktop-amd64.iso   (~2.5 GB)`,
      },
      {
        lang: "bash",
        code: `# No Lubuntu/Ubuntu/Linux, baixe pelo terminal com wget
# (útil se sua conexão cai e você quer retomar de onde parou)

wget -c https://cdimage.ubuntu.com/lubuntu/releases/26.04.1/release/lubuntu-26.04.1-desktop-amd64.iso
# -c = continue: retoma o download interrompido

# Liste para confirmar:
ls -lh lubuntu-*.iso
# saída: -rw-r--r-- 1 voce voce 2.5G out  3 14:22 lubuntu-26.04.1-desktop-amd64.iso`,
      },
      {
        lang: "bash",
        code: `# No Windows (PowerShell), use Invoke-WebRequest
Invoke-WebRequest -Uri "https://cdimage.ubuntu.com/lubuntu/releases/26.04.1/release/lubuntu-26.04.1-desktop-amd64.iso" -OutFile "lubuntu.iso"

# Ou simplesmente clique no link do site e use o navegador.
# Resultado: arquivo salvo na pasta Downloads.`,
      },
      {
        lang: "bash",
        code: `# Conferindo o checksum SHA256 — o "RG" do arquivo
# 1) Baixe o arquivo SHA256SUMS na mesma pasta da ISO:
wget https://cdimage.ubuntu.com/lubuntu/releases/26.04.1/release/SHA256SUMS

# 2) Rode o comando de verificação:
sha256sum -c SHA256SUMS --ignore-missing
# saída esperada:
# lubuntu-26.04.1-desktop-amd64.iso: OK

# Se aparecer "FAILED", baixe a ISO novamente.`,
      },
      {
        lang: "bash",
        code: `# No Windows, gere o SHA256 com PowerShell e compare na mão
Get-FileHash .\\lubuntu.iso -Algorithm SHA256
# saída:
# Hash             : 9F3A...B12C
# Path             : C:\\Users\\voce\\Downloads\\lubuntu.iso

# Abra o arquivo SHA256SUMS no Bloco de Notas e procure
# pela linha que termina com o nome da sua ISO.
# Os 64 caracteres precisam ser idênticos (a caixa não importa).`,
      },
      {
        lang: "bash",
        code: `# Não tem certeza se seu PC é 32 ou 64 bits?
# No Linux:
uname -m
# x86_64 = 64 bits → use a ISO amd64
# i686 ou i386 = 32 bits → o Lubuntu moderno NÃO suporta mais

# No Windows: clique direito em "Este Computador" → Propriedades
# Procure "Tipo de sistema": 64 bits = amd64`,
      },
    ],
    points: [
      "Sempre baixe a ISO de lubuntu.me/downloads — nunca de sites espelhados sem revisão.",
      "Prefira versões LTS: 3 anos de suporte oficial, atualizações de segurança garantidas.",
      "amd64 é a arquitetura para PCs modernos (64 bits) — Lubuntu não roda mais em 32 bits.",
      "Conferir o SHA256 confirma que o arquivo não está corrompido nem adulterado.",
      "wget -c retoma downloads interrompidos sem precisar começar do zero.",
      "Uma ISO de 2.5 GB demora cerca de 10 minutos numa conexão de 50 Mbps.",
      "Iniciante comum: baixar versão interim (não-LTS) e ter que reinstalar em 9 meses.",
      "Iniciante comum: pular a verificação do SHA256 e enfrentar erros estranhos no instalador.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Não baixe ISOs de blogs ou sites que prometem 'Lubuntu turbinado' ou 'modificado'. Eles costumam vir com mineradores ocultos ou drivers desatualizados.",
      },
      {
        type: "tip",
        content: "Se sua conexão for lenta, baixe via torrent na própria página de downloads. É mais rápido em horário de pico e geralmente já valida o checksum sozinho.",
      },
      {
        type: "info",
        content: "A versão LTS atual (em 2026+) é a 26.04. O número antes do ponto é o ano (2026) e depois é o mês (abril). LTSs sempre saem em abril de anos pares.",
      },
      {
        type: "danger",
        content: "Se o sha256sum acusar FAILED, NÃO grave o pendrive. Uma ISO corrompida pode parecer instalar mas deixa o sistema com bugs sutis impossíveis de diagnosticar depois.",
      },
    ],
  },
  {
    slug: "criar-pendrive",
    section: "instalacao",
    title: "Criando o pendrive bootável",
    difficulty: "iniciante",
    subtitle: "Gravando a ISO em um pendrive para iniciar a instalação.",
    intro: `Ter a ISO baixada não é suficiente: o computador não sabe rodar uma instalação a partir de um arquivo solto no HD. Ele precisa "iniciar" (dar boot) a partir de um disco que tenha o instalador na sua estrutura especial. Hoje em dia, ninguém mais usa CD ou DVD para isso — todo mundo grava a ISO em um pendrive e usa o pendrive como se fosse um disco de instalação.

Pense no pendrive como uma cápsula de cinema antigo: ele vai ter o filme inteiro do Lubuntu lá dentro, e o computador vai "passar" esse filme assim que você ligar com ele plugado. Para gravar, você não pode simplesmente arrastar o arquivo .iso para o pendrive — isso não funciona. Você precisa de um programa especial que grava bit a bit, transformando o pendrive em um clone do disco de instalação.

Os dois programas mais usados são o Rufus (Windows, gratuito e em português) e o balenaEtcher (Windows, macOS e Linux, interface bonita e simples). Os dois fazem o mesmo trabalho. Quem já está no Linux tem ainda uma opção poderosa: o comando \`dd\`, que vem instalado de fábrica e grava em uma linha só — mas com uma armadilha terrível: se errar a letra do dispositivo, apaga o seu HD.

Você vai precisar de um pendrive de pelo menos 4 GB (8 GB ou mais é o recomendado em 2024+). Ele vai ser totalmente apagado no processo, então salve qualquer coisa importante antes. Ao final, você terá um pendrive que ao ser plugado em qualquer PC compatível dá boot direto no Lubuntu.`,
    codes: [
      {
        lang: "bash",
        code: `# Windows: usando o Rufus (recomendado)
# 1) Baixe em https://rufus.ie  (versão Portable serve)
# 2) Plugue o pendrive (mínimo 4 GB; será FORMATADO)
# 3) Abra o Rufus e configure:
#    - Dispositivo: seu pendrive (CONFIRA a letra!)
#    - Seleção de boot: clique SELECIONAR e aponte a ISO
#    - Esquema de partição: GPT (UEFI moderno) ou MBR (PC antigo)
#    - Sistema-alvo: UEFI (não-CSM) ou BIOS, conforme o caso
# 4) Clique INICIAR
# 5) Quando perguntar "modo ISO ou DD", escolha ISO Image (recomendado)
# 6) Aceite o aviso de que tudo será apagado
# Tempo: 5 a 10 minutos`,
      },
      {
        lang: "bash",
        code: `# Linux/macOS: balenaEtcher (interface gráfica simples)
# Baixe em https://etcher.balena.io
# Fluxo:
# 1) Flash from file → escolha a ISO do Lubuntu
# 2) Select target → escolha o pendrive
# 3) Flash!
# O Etcher já valida o pendrive depois de gravar (importante!)`,
      },
      {
        lang: "bash",
        code: `# Linux: gravando com dd (rápido e poderoso, mas perigoso)
# 1) PRIMEIRO descubra o nome correto do pendrive:
lsblk
# Vai mostrar algo como:
# NAME   SIZE TYPE MOUNTPOINT
# sda    500G disk           ← seu HD interno (NÃO TOCAR!)
# sdb    8G   disk           ← seu pendrive
# sdb1   8G   part /media/voce/UFD

# 2) Desmonte o pendrive antes de gravar:
sudo umount /dev/sdb1

# 3) Grave a ISO (CONFIRA o /dev/sdX duas vezes!)
sudo dd if=lubuntu-26.04.1-desktop-amd64.iso of=/dev/sdb bs=4M status=progress conv=fsync

# saída durante a execução:
# 2516582400 bytes (2.5 GB, 2.3 GiB) copied, 180 s, 14.0 MB/s`,
      },
      {
        lang: "bash",
        code: `# Atenção ao alvo do dd:
# of=/dev/sdb     ✓ correto: o disco inteiro
# of=/dev/sdb1    ✗ errado: só uma partição (não dá boot)
# of=/dev/sda     ✗✗ DESASTRE: apaga seu HD interno

# Por isso o dd ganhou o apelido de "disk destroyer".
# Sempre confirme com lsblk antes.`,
      },
      {
        lang: "bash",
        code: `# Depois de gravar, no Linux ejete com segurança:
sudo eject /dev/sdb
# ou no LXQt: clique direito no ícone do pendrive → Ejetar

# No Windows: ícone "remover hardware com segurança" na bandeja.
# No macOS: arraste o ícone do pendrive para a Lixeira (vira ejetar).

# Não puxe o pendrive sem ejetar — pode deixar dados pela metade.`,
      },
      {
        lang: "bash",
        code: `# Como saber se o pendrive ficou bootável de verdade?
# Reinicie o PC com ele plugado e entre no menu de boot.
# Teclas comuns para o menu de boot (varia por fabricante):
#   F12 → Dell, Lenovo, Toshiba
#   F9  → HP
#   F10 → ASUS
#   F11 → MSI
#   ESC → Acer, alguns Samsung
# Se aparecer "UEFI: SanDisk..." na lista, deu certo!`,
      },
    ],
    points: [
      "Não dá para arrastar a ISO para o pendrive — precisa gravar com programa especial.",
      "Rufus (Windows), balenaEtcher (multi-plataforma) e dd (Linux) são as três opções.",
      "Pendrive de 4 GB é o mínimo, 8 GB recomendado para folga no caching.",
      "O processo APAGA tudo do pendrive — salve antes o que estiver lá.",
      "No dd, errar a letra do device pode apagar seu HD interno inteiro.",
      "Sempre confirme o dispositivo com lsblk antes de rodar dd.",
      "Iniciante comum: gravar em /dev/sdb1 em vez de /dev/sdb e o pendrive não dá boot.",
      "Iniciante comum: puxar o pendrive sem ejetar e ele ficar com gravação incompleta.",
    ],
    alerts: [
      {
        type: "danger",
        content: "O dd não pede confirmação. Se você digitar /dev/sda no lugar de /dev/sdb, ele apaga o HD principal sem aviso. Use lsblk antes e respire fundo antes de Enter.",
      },
      {
        type: "tip",
        content: "Tem mais de um pendrive? Tire todos da USB, plugue só o que vai gravar e rode lsblk. Assim você tem certeza de qual letra é a dele.",
      },
      {
        type: "info",
        content: "O Rufus pergunta entre 'Modo ISO' e 'Modo DD'. Para Lubuntu, ISO funciona em quase todo PC moderno. Só use DD se o ISO não der boot.",
      },
      {
        type: "warning",
        content: "Pendrives muito antigos ou de marca duvidosa podem gravar e parecer ok, mas falhar no meio da instalação. Se der erro estranho, teste com outro pendrive.",
      },
    ],
  },
  {
    slug: "requisitos-minimos",
    section: "instalacao",
    title: "Requisitos mínimos e recomendados",
    difficulty: "iniciante",
    subtitle: "O que seu computador precisa para rodar o Lubuntu de boa.",
    intro: `Uma das maiores famas do Lubuntu é "rodar em qualquer coisa". Isso é meio verdade e meio mito. O Lubuntu é bem mais leve que o Windows 11 ou que o Ubuntu padrão, mas ele ainda exige um mínimo. Antes de instalar, vale conferir se a sua máquina entra na faixa — assim você evita a frustração de instalar e perceber que tudo trava.

Pense nos requisitos como cardápio: tem o "sobreviver" (mínimo, dá pra usar mas vai engasgar), o "comer bem" (recomendado, fluidez no dia a dia) e o "banquete" (folgado, tudo voa). Cada um serve a um perfil de uso. Se você só vai navegar e escrever no LibreOffice, o mínimo basta. Se quer assistir vídeo em HD e ter dezenas de abas abertas, mire no recomendado.

A versão atual (26.04 LTS) parou de suportar processadores 32 bits — isso significa que máquinas muito antigas (Pentium 4, Athlon XP da década de 2000) estão fora. Para essas, existem distros ainda mais antigas tipo Bodhi Linux ou antiX. Para qualquer coisa de 2008 em diante (Core 2 Duo, Athlon 64), o Lubuntu moderno funciona.

Neste capítulo você vai aprender a descobrir os números do seu PC (quantos GB de RAM, qual processador, quanto espaço em disco) tanto pelo Windows quanto por dentro do Lubuntu Live. Com essa informação, dá para decidir com calma se vale instalar, e se vale, qual a expectativa de desempenho.`,
    codes: [
      {
        lang: "text",
        code: `# Requisitos do Lubuntu 26.04 LTS

# MÍNIMO ABSOLUTO (vai mancar, mas roda):
#   CPU: 64 bits, qualquer (ex.: Core 2 Duo)
#   RAM: 1 GB
#   Disco: 25 GB
#   Vídeo: VGA 1024×768

# RECOMENDADO (uso confortável):
#   CPU: dual-core 1.6 GHz+ (Core i3, Athlon X2 da era 2010+)
#   RAM: 4 GB
#   Disco: 30 GB SSD (HD comum também serve)
#   Vídeo: GPU integrada Intel/AMD/NVIDIA

# IDEAL (folgado, navega com 30 abas):
#   CPU: quad-core 2 GHz+
#   RAM: 8 GB
#   Disco: 60 GB SSD`,
      },
      {
        lang: "bash",
        code: `# No Windows, descubra a configuração rapidinho:
# Atalho: tecla Windows + R, digite msinfo32, Enter

# Ou pelo PowerShell:
systeminfo | findstr /C:"Memória física" /C:"Processador" /C:"Sistema"
# saída:
# Processador(es): Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz
# Memória física total: 4.096 MB
# Tipo do sistema: x64-based PC`,
      },
      {
        lang: "bash",
        code: `# Já no Lubuntu Live (capítulo "testar-live"), pelo terminal:

# Quanto de RAM?
free -h
# saída:
#               total        used        free
# Mem:          3.7Gi       890Mi       2.1Gi   ← total ~4 GB

# Qual o processador?
lscpu | head -20
# Mostra modelo, núcleos, velocidade

# Disco disponível?
lsblk
# Mostra todos os discos e tamanhos`,
      },
      {
        lang: "bash",
        code: `# Verificando se a CPU é 64 bits (obrigatório no 26.04+)
lscpu | grep "Modo(s) operacional"
# Modo(s) operacional da CPU: 32-bit, 64-bit
# Se aparecer só "32-bit", o Lubuntu moderno não vai instalar.

# Alternativa em uma linha:
uname -m
# x86_64 = 64 bits ✓
# i686   = 32 bits ✗`,
      },
      {
        lang: "bash",
        code: `# Quanto espaço o sistema vai ocupar realmente?
# Após instalação limpa do Lubuntu 26.04:
#   ~7-8 GB no disco (raiz /)
#   ~500 MB de swap recomendado (ou zram, ver capítulo de hardware)
#   resto vira sua /home

# Reserve no mínimo 25 GB para ter folga para atualizações,
# arquivos pessoais e instalar uns programas extras.`,
      },
      {
        lang: "bash",
        code: `# Teste de "sobrevive ou não" rápido na live:
# Abra 3 ou 4 programas:
qterminal &
firefox &
libreoffice --calc &
pcmanfm-qt &

# Em outro terminal, monitore RAM:
watch -n 1 free -h
# Se "available" cair abaixo de 100 MB, sua RAM está estourando.`,
      },
    ],
    points: [
      "1 GB de RAM é o mínimo absoluto; 4 GB é onde a experiência vira agradável.",
      "CPU precisa ser 64 bits no Lubuntu 26.04 LTS — máquinas antes de 2008 podem não servir.",
      "25 GB de disco bastam, mas 30+ GB dá folga para o sistema crescer com atualizações.",
      "SSD não é exigido, mas troca o Lubuntu de 'rápido' para 'instantâneo'.",
      "GPU integrada Intel/AMD funciona out-of-the-box; NVIDIA pode precisar driver extra.",
      "free -h e lscpu mostram a config do PC dentro do Lubuntu Live, antes de instalar.",
      "Iniciante comum: tentar Lubuntu moderno em PC 32 bits e ficar confuso com a recusa do instalador.",
      "Iniciante comum: deixar 8 GB de partição para o sistema e ficar sem espaço em 2 meses.",
    ],
    alerts: [
      {
        type: "info",
        content: "Para máquinas com menos de 1 GB de RAM, considere o Bodhi Linux, antiX ou Puppy Linux. Eles são ainda mais leves que o Lubuntu moderno.",
      },
      {
        type: "tip",
        content: "Se o seu PC tem HD mecânico, instalar um SSD de 240 GB (custa pouco em 2024) faz mais diferença que qualquer outra mudança. O boot cai de 1 minuto para 15 segundos.",
      },
      {
        type: "warning",
        content: "Cuidado com 'PCs gamer' antigos com placa NVIDIA: podem precisar de driver proprietário, que é fácil de instalar mas não vem ativo de fábrica.",
      },
    ],
  },
  {
    slug: "testar-live",
    section: "instalacao",
    title: "Testando no modo Live (sem instalar)",
    difficulty: "iniciante",
    subtitle: "Rodar o Lubuntu inteiro a partir do pendrive, antes de tocar no HD.",
    intro: `Uma das características mais bonitas das distros modernas de Linux é o "modo live": você pode rodar o sistema inteiro a partir do pendrive, sem instalar nada, sem mexer em nada do que já está no HD. É como dirigir um carro na concessionária antes de comprar. Tudo funciona — internet, programas, arquivos — só que tudo vive na RAM e some quando você desliga.

Isso serve para três coisas importantes. Primeiro, validar que o hardware funciona: se o Wi-Fi pega na live, vai pegar instalado. Se o som sai, está tudo certo. Segundo, conhecer a interface antes de comprometer o disco. Terceiro, resgatar arquivos de um Windows que não dá mais boot — você inicia pelo Lubuntu Live, abre o gerenciador de arquivos e copia tudo para um HD externo.

Para entrar na live, você reinicia o PC com o pendrive plugado e aciona o "menu de boot" (uma tecla específica que muda por fabricante). Aparece uma lista de dispositivos; você escolhe o pendrive. Em segundos você vê o logotipo do Lubuntu e cai numa área de trabalho funcional, com o instalador disponível como atalho na própria área.

Cuidado: como tudo vive na RAM, a live é mais lenta que o sistema instalado. Pendrive USB 2.0 piora isso. Não tire conclusões de desempenho pelo modo live — espere instalar para julgar.`,
    codes: [
      {
        lang: "text",
        code: `# Teclas mais comuns para abrir o "menu de boot"
# (apertar repetidamente assim que liga o PC)

# Dell, Lenovo, Toshiba .......... F12
# HP ............................. F9 ou Esc
# ASUS ........................... F8 ou Esc
# MSI ............................ F11
# Acer ........................... F12 (pode precisar habilitar)
# Samsung ........................ F12 ou Esc
# Apple Mac ...................... segurar Option (⌥) ao ligar
# Genérico/clones ................ F12, F11, F10, F9, F8, Esc

# No menu, escolha algo como:
#   "UEFI: SanDisk..."   ← preferir UEFI se aparecer
#   "USB-HDD" ou "USB Flash"`,
      },
      {
        lang: "text",
        code: `# Ao iniciar pelo pendrive, aparece o menu do Lubuntu:
#
#   Try or Install Lubuntu              ← escolha esta opção
#   Test memory
#   Boot from local disk
#
# Aperte Enter. Em ~30 segundos cai na área de trabalho.
# Aparece um ícone "Install Lubuntu 26.04 LTS" na área —
# por enquanto IGNORE: estamos só testando.`,
      },
      {
        lang: "bash",
        code: `# Já dentro do Lubuntu Live, abra o terminal (QTerminal)
# pelo menu ou com Ctrl+Alt+T e teste:

# Ver versão do kernel (confirma que é mesmo o Live):
uname -r
# saída: 7.0.0-XX-generic

# Ver o nome do sistema:
lsb_release -a
# Description: Ubuntu 26.04.x LTS
# (sim, ele se identifica como Ubuntu — Lubuntu é um sabor)`,
      },
      {
        lang: "bash",
        code: `# Checklist de validação na live:
# 1) Wi-Fi: clique no ícone de rede no canto inferior direito
#    Conecte na sua rede e teste:
ping -c 3 google.com
# 64 bytes from ... time=22 ms

# 2) Som: abra qualquer vídeo no Firefox e ouça
# 3) Vídeo: abra um vídeo no YouTube em 1080p; deve rodar
# 4) Touchpad/teclado: digite e movimente — tudo responde?
# 5) Brilho da tela: teclas Fn funcionam?`,
      },
      {
        lang: "bash",
        code: `# Resgatar arquivos de um Windows quebrado
# (use case clássico do Live)

# Liste os discos:
lsblk
# Vai aparecer algo como:
# nvme0n1p3   200G part           ← disco do Windows
#
# Crie um ponto de montagem e monte:
sudo mkdir /mnt/windows
sudo mount /dev/nvme0n1p3 /mnt/windows

# Acesse pelo gerenciador de arquivos (PCManFM-Qt)
# em /mnt/windows/Users/SeuNome/...
# Copie para um HD externo plugado.`,
      },
      {
        lang: "text",
        code: `# Atenção: tudo que você fizer no Live some ao desligar.
# Configurações, downloads, senhas — todos voláteis.
# Para algo persistente, instale (próximo capítulo)
# ou crie um pendrive persistente (capítulo do final do livro).

# Para sair: menu → Logout → Shutdown
# Retire o pendrive QUANDO o PC pedir, antes de religar.`,
      },
    ],
    points: [
      "Modo Live roda o sistema todo a partir do pendrive, sem instalar nada.",
      "Serve para testar hardware, conhecer a interface e resgatar arquivos.",
      "A tecla do menu de boot varia por fabricante — F12, F9, F10, F11, Esc são as mais comuns.",
      "Tudo vive na RAM no Live: configurações somem ao desligar.",
      "Live é mais lenta que sistema instalado — não use desempenho aqui como referência.",
      "Wi-Fi, som, vídeo e touchpad: se funcionarem na live, vão funcionar instalados.",
      "Iniciante comum: tirar o pendrive antes de o PC desligar e travar o sistema vivo.",
      "Iniciante comum: achar que está lento por culpa do Lubuntu, quando é o pendrive USB 2.0.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de instalar, passe pelo menos 15 minutos na live testando o que você usa no dia a dia. Se algo crítico não funciona, é melhor descobrir agora.",
      },
      {
        type: "warning",
        content: "Não confie em senhas salvas ou bookmarks na sessão Live. Se desligar o PC sem exportar, perde tudo. Use apenas para teste.",
      },
      {
        type: "info",
        content: "Em alguns notebooks com Secure Boot ativo, o pendrive pode não aparecer no menu de boot. Veja o capítulo 'Instalação completa' para como desativar temporariamente.",
      },
      {
        type: "success",
        content: "O modo Live é uma das vantagens mais subestimadas do Linux. Carregue um pendrive Lubuntu sempre — ele já salvou a vida de muita gente que perdeu o boot do Windows.",
      },
    ],
  },
  {
    slug: "instalacao-completa",
    section: "instalacao",
    title: "Instalação completa do Lubuntu",
    difficulty: "iniciante",
    subtitle: "Passo a passo do instalador Calamares — do idioma ao primeiro login.",
    intro: `Chegou a hora. Você baixou a ISO, gravou o pendrive, testou na live e gostou. Agora vamos instalar o Lubuntu de verdade no HD ou SSD. O instalador do Lubuntu chama Calamares — uma interface gráfica clara, em português, que faz quase tudo sozinha. Em uma máquina razoável, o processo inteiro dura entre 10 e 20 minutos.

Pense no Calamares como o assistente de um cartório: ele te faz perguntas (idioma, fuso, qual disco usar, qual seu nome), confere os documentos (verifica que tem espaço, que a partição está saudável) e ao final entrega o sistema pronto. As perguntas são poucas e podem ser respondidas com calma — ele só executa de verdade depois que você revisa tudo na última tela.

Você tem três cenários comuns de instalação: 1) máquina vazia ou que vai virar 100% Lubuntu (caminho mais simples); 2) instalar ao lado do Windows existente (dual boot, próximo capítulo); 3) particionamento manual para usuários avançados (capítulo dedicado). Neste vamos focar no cenário 1, que é o tranquilo.

Antes de começar, três cuidados. Primeiro: faça backup. Mesmo na opção "use o disco inteiro", erros podem acontecer. Segundo: ligue o notebook na tomada — se a bateria acabar no meio, você fica com um sistema pela metade impossível de bootar. Terceiro: tenha conexão com a internet, opcional mas muito recomendada — assim o instalador já baixa as atualizações de segurança e os codecs no mesmo passo.`,
    codes: [
      {
        lang: "text",
        code: `# Passo 1: inicie pela live (capítulo anterior)
# Passo 2: na área de trabalho, clique duas vezes em
#          "Install Lubuntu 26.04 LTS"
# Passo 3: o Calamares abre. Você vai passar por estas telas:
#
#   1. Boas-vindas (idioma)
#   2. Localização (mapa-múndi para o fuso)
#   3. Layout do teclado
#   4. Partições (PRINCIPAL — escolha do disco)
#   5. Usuários (nome, login, senha)
#   6. Resumo (revise tudo!)
#   7. Instalação (barra de progresso)
#   8. Reinicializar`,
      },
      {
        lang: "text",
        code: `# Tela 1 — Idioma
# Selecione "Português - Brasil" e clique Próximo.
# Toda a interface a partir daqui fica em PT-BR.

# Tela 2 — Localização
# Clique no Brasil no mapa, depois selecione sua cidade
# (São Paulo, Brasília, etc.) para o fuso horário.
# Formato regional: pt_BR — define moeda, data, separador decimal.`,
      },
      {
        lang: "text",
        code: `# Tela 3 — Teclado
# Layout mais comum no Brasil: Portuguese (Brazil) ABNT2
# Para teclado sem cedilha visível (notebooks): ABNT
# Teste digitando ç, ã, ´a no campo de teste no rodapé.

# Se ç sai como Ç ou não sai: você escolheu errado.
# Volte e tente "Portuguese (Brazil), Eliminate dead keys"`,
      },
      {
        lang: "text",
        code: `# Tela 4 — Partições (CUIDADO! É aqui que pode dar M)
#
# Opções típicas:
#   ◉ Apagar disco             ← USA O DISCO TODO. Apaga tudo.
#   ○ Instalar lado a lado     ← dual boot (próximo capítulo)
#   ○ Substituir uma partição  ← reaproveita partição existente
#   ○ Particionamento manual   ← controle total (capítulo dedicado)
#
# Para HD/SSD VAZIO ou que vai virar só Lubuntu:
# escolha "Apagar disco".
# Marque "Criar arquivo de troca (swap)" — recomendado.
# Sistema de arquivos: ext4 (padrão, deixe assim).`,
      },
      {
        lang: "text",
        code: `# Tela 5 — Usuários
# Seu nome:        Maria Silva
# Nome do login:   maria          ← minúsculas, sem espaço/acento
# Nome do PC:      maria-laptop   ← aparece em redes e terminais
# Senha:           ••••••••       (mín. 8 caracteres é boa prática)
# Confirme senha:  ••••••••
# ☐ Login automático sem senha   ← NÃO marque (insegurança)
# ☑ Pedir senha para tarefas administrativas (sudo)

# Anote a senha em local seguro. Sem ela, você não instala
# nada nem atualiza o sistema.`,
      },
      {
        lang: "text",
        code: `# Tela 6 — Resumo
# O Calamares mostra TUDO que vai fazer, em forma de lista:
#   - Apagar todos os dados de /dev/sda
#   - Criar partição EFI 300 MB FAT32 em /dev/sda1
#   - Criar partição raiz 230 GB ext4 em /dev/sda2
#   - Criar swap 4 GB em /dev/sda3
#   - Instalar Lubuntu, GRUB, configurar usuário maria
#
# LEIA com calma. Se algo está errado, clique Voltar.
# Se está tudo certo, clique INSTALAR.
# Caixa de confirmação: "Tem certeza?" → Sim.`,
      },
      {
        lang: "bash",
        code: `# Tela 7 — Instalação rolando
# Barra de progresso e slideshow apresentando o Lubuntu.
# Tempo estimado:
#   SSD: 5-10 minutos
#   HD mecânico: 15-25 minutos

# Tela 8 — Concluído!
# "Reinicie agora" → marque e clique em Pronto.
# Quando o PC reiniciar e pedir, retire o pendrive.
# Aperta Enter. Boot pela primeira vez do Lubuntu instalado!`,
      },
    ],
    points: [
      "O instalador chama Calamares; é gráfico, em português e leva 10-20 minutos.",
      "Faça backup ANTES — mesmo a opção mais segura pode falhar em casos extremos.",
      "Conecte o notebook na tomada para evitar desligamento no meio da instalação.",
      "Internet ativa permite baixar codecs e atualizações já durante o setup.",
      "Use 'Apagar disco' só se for usar o computador 100% para Lubuntu.",
      "Login automático é cômodo mas inseguro; deixe desmarcado em notebooks.",
      "Iniciante comum: escolher layout de teclado errado e o ç não funcionar.",
      "Iniciante comum: pular a tela de Resumo sem ler e descobrir tarde que escolheu o disco errado.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Na tela de partições, 'Apagar disco' é IRREVERSÍVEL. Confirme três vezes que escolheu o disco certo, especialmente se o PC tem mais de um HD.",
      },
      {
        type: "warning",
        content: "Se aparecer 'Erro ao instalar bootloader' no final, geralmente é Secure Boot ou Fast Boot ativos na BIOS. Desligue ambos e reinstale.",
      },
      {
        type: "tip",
        content: "Marque a opção de baixar atualizações durante a instalação se a internet estiver boa. Você economiza tempo depois e já fica protegido contra vulnerabilidades recentes.",
      },
      {
        type: "success",
        content: "Anote login e senha em papel ANTES de instalar. Esquecer a senha de root no Lubuntu é um problema chato (mas tem solução, ver capítulo de troubleshooting).",
      },
    ],
  },
  {
    slug: "particionamento",
    section: "instalacao",
    title: "Particionamento manual",
    difficulty: "intermediario",
    subtitle: "Decidindo /, /home, swap e EFI por conta própria.",
    intro: `O Calamares oferece a opção "Apagar disco" que decide as partições por você. Funciona bem para a maioria. Mas existem situações em que vale assumir o controle: quando você quer separar a sua /home do sistema (para reinstalar sem perder arquivos), quando quer dedicar uma partição grande a dados, ou quando está dual-bootando com vários sistemas operacionais. Aí entra o particionamento manual.

Pense em particionar como dividir um galpão vazio com paredes. Cada cômodo (partição) ganha um nome e um propósito. O Lubuntu precisa pelo menos de uma partição para o sistema (chamada raiz, ou \`/\`). Pode ter também uma para os arquivos de usuário (\`/home\`), uma para área de troca de memória (\`swap\`), e em PCs UEFI uma minúscula chamada EFI System Partition (ESP) que guarda o boot.

A grande vantagem de uma /home separada é a reinstalação. No dia em que você quiser trocar para outra distro Linux, basta formatar a / e manter a /home intacta. Seus arquivos, configurações, fotos, ficam preservados. Em troca disso, você precisa decidir o tamanho de cada partição agora — e mudar depois é trabalhoso.

Este capítulo é mais técnico que os anteriores. Se você está no seu primeiro Linux, talvez seja melhor usar "Apagar disco" e voltar aqui em alguns meses, quando já tiver intimidade com o terminal. Para quem segue, vamos cobrir o esquema clássico para máquinas modernas (UEFI + GPT) e mostrar como verificar tudo com \`gparted\` antes de gravar.`,
    codes: [
      {
        lang: "text",
        code: `# Esquema clássico para PC moderno UEFI + 1 disco SSD 256 GB:
#
#   Partição    Tamanho   Tipo     Ponto de montagem   Para quê
#   /dev/sda1   512 MB    fat32    /boot/efi           ESP do UEFI
#   /dev/sda2   40 GB     ext4     /                   sistema
#   /dev/sda3   8 GB      swap     —                   memória virtual
#   /dev/sda4   resto     ext4     /home               arquivos seus
#
# Vantagem da /home separada: reinstalar o sistema sem
# perder seus documentos, downloads e configurações.`,
      },
      {
        lang: "text",
        code: `# Como criar isso no Calamares (tela de partições):
# 1) Escolha "Particionamento manual"
# 2) Selecione o disco (ex.: /dev/sda)
# 3) Se não tem nada importante: clique "Nova tabela de partições"
#    → escolha GPT (UEFI moderno) ou MBR (BIOS antigo)
# 4) Crie cada partição clicando no espaço livre + "Novo":
#
#    Partição 1: 512 MB, fat32, ponto /boot/efi, flag boot+esp
#    Partição 2: 40 GB, ext4, ponto /, formatar SIM
#    Partição 3: 8 GB, linuxswap, sem ponto
#    Partição 4: resto, ext4, ponto /home, formatar SIM
#       (ATENÇÃO: se já tem /home antiga, NÃO marque formatar!)`,
      },
      {
        lang: "bash",
        code: `# Conferindo o disco antes/depois com gparted (na live)
sudo apt install gparted -y    # se não estiver instalado
sudo gparted

# Interface gráfica mostra:
#   - todas as partições com cores
#   - espaço usado e livre
#   - flags (boot, esp, swap)
# Use para CONFERIR antes de gravar no Calamares.`,
      },
      {
        lang: "bash",
        code: `# Pelo terminal: parted lista de forma compacta
sudo parted -l
# saída exemplo:
# Model: ATA SAMSUNG SSD (scsi)
# Disk /dev/sda: 256GB
# Partition Table: gpt
# Number  Start   End     Size    File system  Name      Flags
#  1      1049kB  538MB   537MB   fat32                  boot, esp
#  2      538MB   43.5GB  42.9GB  ext4
#  3      43.5GB  52.1GB  8590MB  linux-swap(v1)
#  4      52.1GB  256GB   204GB   ext4`,
      },
      {
        lang: "bash",
        code: `# Tamanho recomendado de swap em 2024+
# Regras práticas (para Lubuntu, máquina pessoal):
#
#   RAM ≤ 2 GB      → swap 2× a RAM (compensa sufoco)
#   RAM 4 GB        → swap 4 GB
#   RAM 8 GB        → swap 4-8 GB
#   RAM 16+ GB      → swap 4 GB (só para emergência)
#
# Se for usar HIBERNAÇÃO, swap precisa ser ≥ RAM.
# Se for usar zram (ver capítulo Hardware), pode dispensar swap em disco.`,
      },
      {
        lang: "bash",
        code: `# Já com sistema instalado, ver montagens:
df -h
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/sda2        40G   12G   26G  32% /
# /dev/sda4       190G   15G  166G   9% /home
# /dev/sda1       511M  6.1M  505M   2% /boot/efi

# Ver swap em uso:
swapon --show
# NAME      TYPE      SIZE  USED PRIO
# /dev/sda3 partition   8G    0B   -2`,
      },
    ],
    points: [
      "Particionar manual = você decide tamanho e propósito de cada pedaço do disco.",
      "Esquema mínimo UEFI: ESP (~512 MB), raiz / (>20 GB), opcional /home, opcional swap.",
      "/home separada permite reinstalar sistema sem perder arquivos pessoais.",
      "Em UEFI use tabela GPT; em BIOS antigo use MBR.",
      "Marque flag boot+esp na partição de 512 MB FAT32 — sem isso, não dá boot UEFI.",
      "Tamanho de swap depende do RAM e se você quer hibernar; 4-8 GB cobre a maioria.",
      "Iniciante comum: marcar 'formatar' na /home reaproveitada e apagar tudo sem querer.",
      "Iniciante comum: criar partição raiz pequena demais (10 GB) e ficar sem espaço em meses.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Particionamento manual é onde mais gente perde dados. Sempre faça backup antes e revise duas vezes na tela de Resumo do Calamares.",
      },
      {
        type: "tip",
        content: "Se vai usar a máquina muito tempo, deixe a / com 40-60 GB. Atualizações de kernel, snaps e cache do APT consomem mais do que parece.",
      },
      {
        type: "info",
        content: "BTRFS e ZFS são sistemas de arquivos modernos que oferecem snapshots, mas exigem mais conhecimento. Ext4 é o padrão sólido recomendado para iniciantes intermediários.",
      },
      {
        type: "warning",
        content: "Se está reaproveitando uma /home antiga, confira que o nome de usuário NOVO seja igual ao antigo. Senão o sistema cria uma /home/usuario nova vazia ao lado da antiga.",
      },
    ],
  },
  {
    slug: "dual-boot-windows",
    section: "instalacao",
    title: "Dual boot com Windows",
    difficulty: "intermediario",
    subtitle: "Manter o Windows e adicionar o Lubuntu, escolhendo no boot.",
    intro: `Muita gente quer experimentar o Linux sem abandonar o Windows. A solução é o dual boot: você instala os dois sistemas no mesmo PC, e na hora de ligar aparece um menu perguntando qual quer usar. É como ter dois apartamentos no mesmo prédio — você decide em qual entrar a cada dia.

O processo tem três etapas. Primeiro, no Windows, você libera espaço encolhendo a partição existente. Depois, no instalador do Lubuntu, escolhe "Instalar lado a lado". Por fim, o GRUB (gerenciador de boot do Linux) assume o controle e passa a mostrar os dois sistemas ao ligar. Se você quiser voltar a só ter Windows um dia, basta apagar as partições do Linux e restaurar o boot loader do Windows — tudo reversível.

Existem dois cuidados modernos importantes. O Fast Startup do Windows 10/11 mantém o disco em um estado "meio desligado" que confunde o Linux e pode corromper a partição do Windows. Você precisa desativar isso antes. O Secure Boot do UEFI também pode bloquear o instalador do Lubuntu — em geral, o Lubuntu 26.04 já lida bem com Secure Boot, mas em hardware muito específico precisa desativar.

Por último: dual boot é robusto, mas backup primeiro. Encolher uma partição do Windows é uma operação que muito raramente dá ruim, mas quando dá, dá feio. Faça uma cópia dos seus arquivos importantes em um HD externo ou na nuvem antes de seguir.`,
    codes: [
      {
        lang: "text",
        code: `# Etapa 1 — Preparar o Windows
#
# 1) Desativar Fast Startup (CRÍTICO):
#    Painel de Controle → Opções de Energia
#    → "Escolher a função dos botões de energia"
#    → "Alterar configurações não disponíveis no momento"
#    → desmarcar "Ligar inicialização rápida"
#
# 2) Desfragmentar (só se for HD, não SSD):
#    Iniciar → digitar "desfragmentar" → executar
#
# 3) Backup dos arquivos importantes em HD externo`,
      },
      {
        lang: "text",
        code: `# Etapa 2 — Encolher a partição do Windows
#
# Iniciar → digitar "diskmgmt.msc" → Enter
# Vai abrir o "Gerenciamento de disco"
#
# Clique direito na partição C: → "Diminuir Volume..."
# Insira quanto MB liberar (ex.: 60000 MB = 60 GB)
# Clique "Diminuir"
#
# Vai aparecer "Espaço não alocado" no final do disco —
# é aí que o Lubuntu vai morar.
#
# DICA: deixe pelo menos 30 GB para o Lubuntu.`,
      },
      {
        lang: "text",
        code: `# Etapa 3 — Instalar o Lubuntu ao lado
#
# Boot pelo pendrive (capítulo "Testar Live")
# Inicie o Calamares
# Na tela "Partições", escolha:
#   ◉ Instalar Lubuntu junto com o Windows Boot Manager
#
# Aparece uma régua dividida — você arrasta para
# decidir quanto espaço o Lubuntu pega do espaço livre.
# Padrão: usa o "espaço não alocado" que você criou.
#
# Marque "Criar arquivo de troca (swap)".
# Continue normalmente para Usuários e Resumo.`,
      },
      {
        lang: "text",
        code: `# Resultado: ao ligar o PC, aparece o GRUB:
#
#   *Ubuntu                                       <- Lubuntu (padrão)
#    Advanced options for Ubuntu
#    Windows Boot Manager (on /dev/sda1)
#    UEFI Firmware Settings
#
# Setas ↑↓ para escolher, Enter para confirmar.
# Sem ação em 10 segundos, ele inicia o padrão (geralmente Lubuntu).`,
      },
      {
        lang: "bash",
        code: `# Já dentro do Lubuntu, mudar a ordem padrão do GRUB
sudo nano /etc/default/grub

# Procure a linha:
# GRUB_DEFAULT=0
# 0 = primeiro item (Ubuntu)
# 2 = terceiro item (Windows, no exemplo acima)

# Mude para o número do Windows e salve (Ctrl+O, Enter, Ctrl+X)

# Aplique:
sudo update-grub
# Generating grub configuration file ...
# Found Windows Boot Manager on /dev/sda1
# done`,
      },
      {
        lang: "bash",
        code: `# Acessar arquivos do Windows pelo Lubuntu
# Pelo PCManFM-Qt (gerenciador de arquivos):
# - Painel lateral mostra "240 GB Volume" (a partição do Windows)
# - Clique para montar; senha pode ser pedida
# - Acesse Users/SeuNome/Documents...

# Pelo terminal:
sudo mkdir -p /mnt/windows
sudo mount /dev/sda3 /mnt/windows
ls /mnt/windows/Users/`,
      },
      {
        lang: "bash",
        code: `# Se o Windows "comer" o GRUB depois de uma atualização sua:
# (acontece de vez em quando)

# Boot pelo pendrive Lubuntu Live
# Abra o terminal e:
sudo apt install boot-repair
boot-repair
# Interface gráfica abre. Clique em "Recommended repair"
# Reinicie. GRUB volta a aparecer normalmente.`,
      },
    ],
    points: [
      "Dual boot mantém Windows e Lubuntu no mesmo PC; você escolhe no menu ao ligar.",
      "Desative Fast Startup do Windows ANTES — ele corrompe a partição se ficar ligado.",
      "Encolha o C: pelo Gerenciamento de Disco do próprio Windows; deixe pelo menos 30 GB livres.",
      "No Calamares, escolha 'Instalar lado a lado' e arraste a régua de divisão.",
      "GRUB controla qual sistema iniciar; o Windows aparece como 'Windows Boot Manager'.",
      "Para mudar o padrão do GRUB, edite /etc/default/grub e rode sudo update-grub.",
      "Iniciante comum: esquecer de desativar Fast Startup e perder dados na partição NTFS.",
      "Iniciante comum: encolher a partição do Windows com pouco espaço livre e o Windows ficar lento.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca encolha o C: para menos de 50 GB. O Windows precisa de espaço para atualizações grandes; sem isso ele falha de jeitos imprevisíveis.",
      },
      {
        type: "warning",
        content: "Se o seu PC tem RAID ou Intel RST ativos, dual boot vira um pesadelo. Geralmente precisa desativar no BIOS antes (em geral, mude SATA Mode para AHCI).",
      },
      {
        type: "info",
        content: "Se o GRUB sumir após atualização do Windows, o boot-repair-disk ou o utilitário boot-repair conserta em poucos cliques.",
      },
      {
        type: "tip",
        content: "Quer manter relógio sincronizado entre Windows e Linux? No Lubuntu rode: timedatectl set-local-rtc 1. Sem isso, um sistema mostra horário trocado.",
      },
    ],
  },
  {
    slug: "primeira-inicializacao",
    section: "instalacao",
    title: "Primeira inicialização",
    difficulty: "iniciante",
    subtitle: "O que fazer nos primeiros minutos do Lubuntu instalado.",
    intro: `Reiniciou. Tirou o pendrive. O PC ligou de novo, e dessa vez não veio o Windows nem o pendrive — veio uma tela preta com letras brancas (o GRUB, se for dual boot) ou direto a tela de login do Lubuntu. Parabéns: você instalou um sistema operacional do zero, do seu próprio jeito. Esse é um marco que pouca gente experimenta.

Os primeiros minutos são importantes. Tem três coisas que vale fazer logo: 1) atualizar tudo (a ISO foi gravada algumas semanas ou meses atrás, é praticamente certo que tem atualizações); 2) instalar codecs de mídia (a ISO oficial do Lubuntu, por questões de licenciamento, não inclui MP3, H.264 e fontes Microsoft de fábrica); 3) ajustar coisas básicas como fuso, papel de parede e idioma do teclado se algo escapou.

Pense nesses minutos como o "checkup pós-mudança". Você acabou de se mudar para uma casa nova: ainda está tudo de fábrica, mas você quer luz nas tomadas, água quente funcionando e a rede Wi-Fi configurada antes de relaxar. O capítulo "Pós-instalação" vai ainda mais fundo nas configurações úteis. Aqui é só o essencial dos cinco primeiros minutos.

Vamos passar pelo login, o primeiro update, a verificação se a internet está OK e a instalação do pacote de codecs. Em vinte minutos você tem um sistema atualizado e pronto para o uso real do dia a dia.`,
    codes: [
      {
        lang: "text",
        code: `# Tela de login do SDDM (gerenciador de sessão)
# 
# Aparece o nome do usuário que você criou (ex.: maria)
# Campo de senha — digite a que você definiu na instalação
# Aperte Enter
#
# Em segundos cai na área de trabalho do LXQt:
#   - Painel embaixo (menu, relógio, área de notificação)
#   - Atalho da Lixeira na área
#   - Papel de parede padrão azul/cinza`,
      },
      {
        lang: "bash",
        code: `# Abra o terminal: menu → Sistema → QTerminal
# (ou Ctrl+Alt+T se já configurou)

# Atualizar lista de pacotes (cardápio do APT)
sudo apt update
# saída:
# Hit:1 http://br.archive.ubuntu.com/ubuntu resolute InRelease
# Get:2 ... Ign:3 ...
# Reading package lists... Done
# All packages are up to date. (ou X packages can be upgraded)`,
      },
      {
        lang: "bash",
        code: `# Atualizar todos os pacotes para a versão mais nova
sudo apt upgrade -y
# vai listar dezenas de pacotes; -y aceita tudo automaticamente
# pode levar 5-30 minutos dependendo da conexão e do quanto desatualizou

# Quando terminar, se houver atualização de kernel, reinicie:
sudo reboot`,
      },
      {
        lang: "bash",
        code: `# Confirme que a internet está OK
ping -c 4 8.8.8.8
# 64 bytes from 8.8.8.8: time=22.5 ms (4 vezes)
# 4 packets transmitted, 4 received, 0% packet loss

# E o DNS:
ping -c 4 lubuntu.me
# Se a primeira (IP) responde mas o nome não, é problema de DNS.
# Veja capítulo "DNS troubleshoot" se isso acontecer.`,
      },
      {
        lang: "bash",
        code: `# Instalar pacote de codecs (MP3, H.264, fontes Microsoft)
sudo apt install lubuntu-restricted-extras -y

# Durante a instalação aparece uma tela azul perguntando
# se você aceita os termos das fontes Microsoft (TrueType).
# Use Tab para selecionar <Yes> e Enter.
#
# Depois disso:
# - YouTube, vídeos MP4 funcionam
# - MP3s tocam
# - Documentos com Arial/Times se exibem certinho`,
      },
      {
        lang: "bash",
        code: `# Verificar se está tudo respirando bem
# Uso de RAM:
free -h
# Uso de disco:
df -h /
# Versão do sistema:
lsb_release -a
# Uptime (quanto tempo ligado):
uptime
#  14:32:11 up 25 min, 1 user, load average: 0.15, 0.20, 0.18`,
      },
      {
        lang: "bash",
        code: `# Mudar o papel de parede agora mesmo (interface):
# Clique direito na área de trabalho → "Preferências da área de trabalho"
# → aba "Papel de parede" → escolha um dos prontos ou
# clique em "Adicionar" para usar uma imagem sua.

# Pelo terminal (avançado):
pcmanfm-qt --set-wallpaper="/usr/share/lubuntu/wallpapers/sunrise.jpg"`,
      },
    ],
    points: [
      "Login pelo SDDM: digite a senha criada na instalação e Enter.",
      "sudo apt update + sudo apt upgrade -y é o primeiro comando obrigatório.",
      "Reinicie depois de atualizar kernel — você sente diferença na performance.",
      "lubuntu-restricted-extras traz MP3, H.264 e fontes Microsoft que faltam por licença.",
      "ping testa internet e DNS rapidamente; faça antes de qualquer install.",
      "Se a tela de login não aparece, pode ser problema de driver de vídeo (capítulo Hardware).",
      "Iniciante comum: pular o primeiro update e ficar com sistema vulnerável a falhas conhecidas.",
      "Iniciante comum: estranhar que MP3 e YouTube não tocam e desistir antes de instalar os codecs.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Acostume-se a rodar 'sudo apt update && sudo apt upgrade' uma vez por semana. Mantém o sistema seguro e funcionando bem.",
      },
      {
        type: "info",
        content: "A senha do sudo é a mesma que você criou para o usuário. Lubuntu não usa conta root separada — segue o padrão Ubuntu.",
      },
      {
        type: "warning",
        content: "Se aparecer 'Could not get lock /var/lib/dpkg/lock', já há um apt rodando (talvez atualizador automático). Espere ele terminar; não force pelo dpkg --configure.",
      },
      {
        type: "success",
        content: "Sistema novo, sem antivírus, sem 'otimizadores' — Lubuntu vai durar anos sem ficar lento, desde que você mantenha as atualizações em dia.",
      },
    ],
  },
  {
    slug: "pos-instalacao",
    section: "instalacao",
    title: "Pós-instalação: o checklist essencial",
    difficulty: "iniciante",
    subtitle: "Doze ajustes que valem fazer na primeira semana de Lubuntu.",
    intro: `Sistema instalado, atualizado e funcionando. Hora de personalizar para o seu uso. Esse capítulo é uma lista enxuta de doze ajustes que fazem a diferença entre "Lubuntu padrão" e "Lubuntu do seu jeito". Não é obrigatório fazer tudo de uma vez — pode espalhar pelos primeiros dias.

Pense nisso como mobiliar a casa: já tem teto, parede e chão (sistema), mas faltam móveis (firewall, timeshift), enfeites (tema, papel de parede) e a despensa cheia (apps essenciais). Cada item leva poucos minutos. No final da semana você tem um Lubuntu que reflete suas preferências e está blindado contra os problemas mais comuns.

A maioria desses ajustes são feitos pelo terminal porque é mais rápido e mais fácil de mostrar em livro. Mas TODOS têm equivalentes na interface gráfica, então não é obrigatório usar o terminal — você decide. Se preferir o caminho clicável, sempre dá para encontrar a mesma opção navegando pelo menu.

A ordem importa pouco, mas eu sugiro começar pelas coisas de segurança (firewall, snapshot do timeshift) e depois ir para as estéticas e de conveniência. Vamos lá.`,
    codes: [
      {
        lang: "bash",
        code: `# 1) Ativar firewall (vem instalado, mas desligado por padrão)
sudo ufw enable
# Firewall is active and enabled on system startup

# Ver regras:
sudo ufw status verbose

# Permitir SSH se for usar (capítulo Rede):
# sudo ufw allow ssh`,
      },
      {
        lang: "bash",
        code: `# 2) Instalar Timeshift (snapshots para reverter erros)
sudo apt install timeshift -y

# Abra: menu → Sistema → Timeshift
# Configure:
#   Tipo: RSYNC
#   Local: a maior partição livre
#   Schedule: Daily, manter 5
#   Incluir /home/usuario/Documents (recomendado)
# Clique "Create" para o primeiro snapshot.`,
      },
      {
        lang: "bash",
        code: `# 3) Instalar utilitários básicos do dia a dia
sudo apt install \\
  htop neofetch tree git curl wget unzip p7zip-full \\
  build-essential gdebi -y

# htop = monitor de processos colorido
# neofetch = mostra info do sistema com logo bonito
# tree = ver árvore de diretórios
# git = versionamento (mesmo só para experimentar)
# gdebi = instalar .deb com 1 clique
# build-essential = compilador C/C++ (várias coisas pedem)`,
      },
      {
        lang: "bash",
        code: `# 4) Trocar o navegador padrão (se quiser Firefox em vez do Falkon)
sudo apt install firefox -y

# Definir como padrão:
# Menu → Preferências → Aplicações padrão → Navegador → Firefox

# Ou pelo terminal:
xdg-settings set default-web-browser firefox.desktop`,
      },
      {
        lang: "bash",
        code: `# 5) Habilitar tap-to-click (touchpad de notebook)
# Abra: menu → Preferências → Mouse e teclado → Touchpad
# Marque "Tap to click"
# Marque "Two-finger scrolling"

# Pelo terminal (alternativa):
echo 'Section "InputClass"
    Identifier "touchpad"
    Driver "libinput"
    MatchIsTouchpad "on"
    Option "Tapping" "on"
    Option "NaturalScrolling" "false"
EndSection' | sudo tee /etc/X11/xorg.conf.d/30-touchpad.conf`,
      },
      {
        lang: "bash",
        code: `# 6) Tema escuro do sistema
# Menu → Preferências → LXQt → Aparência
# Aba "Estilo do widget" → Breeze Dark (ou similar)
# Aba "Esquema de cores" → escuro
# Aba "Tema dos ícones" → Papirus-Dark (instale antes:)

sudo add-apt-repository ppa:papirus/papirus -y
sudo apt update
sudo apt install papirus-icon-theme -y`,
      },
      {
        lang: "bash",
        code: `# 7) Reduzir o swap usage (zram já vem ligado, ajustar swappiness)
# Padrão é 60; para SSD, baixe para 10:
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf
sudo sysctl --system

# Verifique:
cat /proc/sys/vm/swappiness
# 10`,
      },
      {
        lang: "bash",
        code: `# 8) Atualizar a lista completa de upgrades semanal automático
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure --priority=low unattended-upgrades
# Tela azul: <Yes> para ativar atualizações de segurança automáticas

# 9) Localização do BR completa (calendário, dicionários)
sudo apt install language-pack-pt language-pack-pt-base \\
                 hunspell-pt-br myspell-pt-br -y

# 10) Habilitar Flatpak (mais apps modernos disponíveis)
sudo apt install flatpak -y
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
# Reinicie a sessão para o Flatpak ficar visível em menus.`,
      },
      {
        lang: "bash",
        code: `# 11) Verificar e instalar drivers proprietários (NVIDIA, Wi-Fi)
ubuntu-drivers devices
# Lista o que está disponível para o seu hardware

sudo ubuntu-drivers autoinstall
# Instala o recomendado automaticamente
# Reinicie depois.

# 12) Backup de configurações no GitHub (opcional, geek)
# Para quem usa git:
cd ~
git init dotfiles
# copie ~/.config/lxqt/, ~/.bashrc, ~/.vimrc para dotfiles/
# commit e push em repositório privado`,
      },
    ],
    points: [
      "Firewall (ufw) vem instalado mas desligado — ative com sudo ufw enable.",
      "Timeshift faz snapshots do sistema; é o seu CTRL-Z se algo der errado.",
      "lubuntu-restricted-extras + utilitários básicos cobrem 90% das necessidades extras.",
      "ubuntu-drivers autoinstall resolve drivers proprietários (NVIDIA, Wi-Fi obscuro).",
      "Reduza vm.swappiness para 10 se tem SSD e bastante RAM (4 GB+).",
      "Habilite Flatpak para acesso a apps modernos que não estão no APT.",
      "Iniciante comum: nunca configurar Timeshift e ficar sem caminho de volta quando algo quebra.",
      "Iniciante comum: instalar 30 'otimizadores' achando que precisa — Lubuntu já vem otimizado.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Tire o primeiro snapshot do Timeshift COM o sistema recém-instalado e atualizado. Ele vira seu 'estado limpo' eterno para reverter.",
      },
      {
        type: "warning",
        content: "Não instale antivírus tradicional (tipo ClamAV) achando que vai te proteger como no Windows. Linux desktop não precisa, e o ClamAV consome RAM à toa.",
      },
      {
        type: "info",
        content: "unattended-upgrades cuida de atualizações de SEGURANÇA sozinho. Atualizações grandes (kernel, distro) continuam manuais — assim evita reboot inesperado.",
      },
      {
        type: "success",
        content: "Reserve 1 hora num final de semana para rodar tudo desse capítulo de uma vez. Depois disso, o Lubuntu fica praticamente em piloto automático por meses.",
      },
    ],
  },
];
