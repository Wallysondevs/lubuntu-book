import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "discover-software",
    section: "pacotes",
    title: "Discover: a loja de aplicativos do Lubuntu",
    difficulty: "iniciante",
    subtitle: "Instalando programas pela interface gráfica, sem tocar no terminal.",
    intro: `Se você está vindo do Windows ou do celular, a primeira pergunta é sempre a mesma: "onde eu baixo os programas?". No Lubuntu a resposta **não** é abrir o navegador e caçar um instalador — é abrir uma loja, exatamente como a Play Store ou a App Store. Essa loja se chama **Discover** (em algumas versões, **Muon**), e ela é a porta de entrada mais tranquila para quem ainda não domina o terminal.

## O que o Discover realmente é

O Discover é só uma **vitrine bonita** por cima de coisas que já existem no sistema. Ele não inventa programa nenhum: quando você clica em "Instalar", por baixo do pano ele chama o \`apt\` (o gerenciador oficial, que veremos no próximo capítulo) ou o \`snap\`. Entender isso tira o medo — você não está baixando nada suspeito da internet, está pedindo um pacote assinado digitalmente que passou pela equipe do Ubuntu.

Pense em três camadas:

- **Discover** — a loja com fotos, descrição e botão. É o que você vê.
- **apt / snap** — os motores que baixam e instalam de verdade. É o que faz o trabalho.
- **Repositórios** — os servidores oficiais do Ubuntu de onde tudo vem. É a "fábrica".

## Por que começar por aqui

Porque é impossível errar feio. Você não digita comando, não usa \`sudo\` na mão, não corre risco de apagar o sistema. É o ambiente perfeito para instalar seus 4 ou 5 primeiros programas (um navegador, um player de vídeo, um editor de imagem) e ganhar confiança. Quando o terminal deixar de ser assustador, você vai preferir o \`apt\` pela velocidade — mas o Discover continua útil para descobrir programas que você nem sabia que existiam.`,
    codes: [
      {
        lang: "bash",
        code: `# Em alguns Lubuntu "mínimos" a loja não vem instalada.
# Confira se o Discover existe:
which plasma-discover
# /usr/bin/plasma-discover   -> já tem, pode pular a instalação
# (nada)                     -> não tem, instale abaixo`,
      },
      {
        lang: "bash",
        code: `# Instalando a loja (só se o 'which' acima não achou nada):
sudo apt update
sudo apt install plasma-discover -y
# ...
# Setting up plasma-discover (5.27.x) ...
# 1 upgraded, 1 newly installed, 0 to remove`,
      },
      {
        lang: "bash",
        code: `# Abrindo pelo terminal (útil para testar):
plasma-discover &
# O & manda o programa para segundo plano e devolve o terminal para você.
# Não sai nada na tela — a JANELA do Discover é que abre.

# No dia a dia, prefira: Menu (canto inferior esquerdo) > Sistema > Discover`,
      },
      {
        lang: "text",
        code: `Fluxo dentro da janela (passo a passo):

  1. Clique na LUPA no canto superior.
  2. Digite o nome do programa. Ex.:  vlc
  3. Clique no resultado certo (confira o ícone e o autor).
  4. Leia a descrição, veja os prints e o tamanho do download.
  5. Clique em "Instalar".
  6. Digite sua senha quando pedir  (é o sudo, só que gráfico).
  7. Espere a barra terminar. Pronto: o ícone aparece no Menu.`,
      },
      {
        lang: "bash",
        code: `# Depois de instalar pela loja, dá para confirmar no terminal:
which vlc
# /usr/bin/vlc
vlc --version | head -n1
# VLC media player 3.0.21 Vetinari ...`,
      },
      {
        lang: "bash",
        code: `# O Discover também DESINSTALA (aba "Instalados" > botão Remover).
# Se preferir tirar pelo terminal, é uma linha:
sudo apt remove vlc -y
# ...
# The following packages will be REMOVED:
#   vlc
# 1 to remove.`,
      },
      {
        lang: "bash",
        code: `# Atualizações também aparecem no Discover (aba "Atualizações").
# Um aviso surge na bandeja do sistema (perto do relógio).
# Você pode conferir o mesmo pelo terminal:
apt list --upgradable 2>/dev/null | head
# Listing... Done
# firefox/... 124.0 amd64 [upgradable from: 123.0]`,
      },
    ],
    points: [
      "Discover (ou Muon) é a loja gráfica de aplicativos padrão do Lubuntu.",
      "Ele é só uma interface: por baixo rodam o `apt` e o `snap` — nada é baixado de sites aleatórios.",
      "Todo programa da loja é **assinado** e vem dos repositórios oficiais do Ubuntu.",
      "Procurar pelo nome resolve a maioria dos casos: `vlc`, `gimp`, `libreoffice`, `firefox`.",
      "Instalar exige só a sua senha (é o `sudo` gráfico) — você não digita comando nenhum.",
      "Atualizações do sistema aparecem como aviso na bandeja, perto do relógio.",
      "Erro clássico de iniciante: procurar um `.exe` na internet — no Linux isso quase nunca é o caminho.",
      "Se o Discover travar ou ficar lento, feche e use `sudo apt install <programa>` no terminal.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de instalar, olhe a **data da última atualização** e o autor. Programa sem prints, com poucos downloads e parado há anos costuma estar abandonado — procure uma alternativa mantida.",
      },
      {
        type: "info",
        content: "Dependendo da versão, o Lubuntu traz o **Muon** em vez do Discover. Os dois fazem a mesma coisa (gerenciar pacotes graficamente); os passos são praticamente idênticos.",
      },
      {
        type: "warning",
        content: "Não tente instalar `.exe` de Windows pela loja — não vai funcionar. Programas de Windows exigem o **Wine**, que é assunto avançado e foge desta trilha.",
      },
      {
        type: "success",
        content: "Kit inicial recomendado pela loja para quem acabou de instalar: um navegador (Firefox), um player (VLC), um editor de imagem (GIMP) e o pacote de escritório (LibreOffice). Com esses quatro você já faz 90% das tarefas do dia.",
      },
    ],
  },
  {
    slug: "apt-basico",
    section: "pacotes",
    title: "APT: o gerenciador de pacotes do terminal",
    difficulty: "iniciante",
    subtitle: "O comando que resolve quase tudo no Ubuntu — do jeito certo, do zero.",
    intro: `Se você aprender **um** comando de terminal no Lubuntu, que seja o \`apt\`. Ele é o gerenciador de pacotes: a ferramenta que instala, atualiza, procura e remove software. Depois que a mão pega o jeito, instalar um programa vira mais rápido do que abrir a loja — uma linha e pronto.

## O carteiro inteligente

Pense no \`apt\` como um carteiro que conhece o endereço de tudo. Você diz "quero o GIMP" e ele: vai ao servidor oficial do Ubuntu, confere a **assinatura digital** do pacote (garantindo que ninguém adulterou), baixa, resolve o que mais é necessário e instala tudo organizado. Você não caça instalador, não roda antivírus depois, não acumula lixo.

## Dependências: a mágica que você nem vê

Todo programa depende de outros pedaços (bibliotecas). O GIMP precisa de bibliotecas de imagem, o VLC de codecs, e assim por diante. O grande trunfo do \`apt\` é resolver isso sozinho: peça o GIMP e ele traz junto as dependências certas; remova o GIMP e ele oferece limpar o que ficou sem uso. Você pensa em "programas", ele cuida das "peças".

## As duas listas que confundem todo mundo

Existe uma diferença que precisa ficar clara agora:

- \`sudo apt update\` — atualiza a **LISTA** do que existe nos servidores. **Não instala nada.** É conferir o cardápio.
- \`sudo apt upgrade\` — **aplica** as atualizações dos programas já instalados. É pedir o prato.

Quase todo comando que **muda** o sistema pede \`sudo\` na frente (porque mexe em arquivos de todos, não só na sua pasta). Já comandos que só **leem** (\`search\`, \`show\`, \`list\`) não precisam.`,
    codes: [
      {
        lang: "bash",
        code: `# 1) Atualizar a LISTA de pacotes (faça sempre antes de instalar algo novo):
sudo apt update
# Hit:1 http://br.archive.ubuntu.com/ubuntu resolute InRelease
# Get:2 http://br.archive.ubuntu.com/ubuntu resolute-updates InRelease
# Reading package lists... Done
# All packages are up to date.  (ou "N packages can be upgraded")`,
      },
      {
        lang: "bash",
        code: `# 2) Procurar um pacote pelo nome ou descrição (NÃO precisa de sudo):
apt search htop
# Sorting... Done
# Full Text Search... Done
# htop/resolute 3.3.0-1 amd64
#   interactive processes viewer`,
      },
      {
        lang: "bash",
        code: `# 3) Ver os detalhes ANTES de instalar (tamanho, versão, do que depende):
apt show htop
# Package: htop
# Version: 3.3.0-1
# Installed-Size: 340 kB
# Depends: libc6, libncursesw6, libtinfo6
# Description: interactive processes viewer ...`,
      },
      {
        lang: "bash",
        code: `# 4) Instalar. O -y responde "sim" às confirmações automaticamente:
sudo apt install htop -y
# The following NEW packages will be installed:
#   htop
# Setting up htop (3.3.0-1) ...
# Agora o comando existe:
htop      # abre o monitor; aperte  q  para sair`,
      },
      {
        lang: "bash",
        code: `# 5) Instalar VÁRIOS de uma vez (ótimo para montar um "kit" pós-instalação):
sudo apt install neofetch tree curl git unzip -y
# Só separar por espaço. O apt baixa e configura todos juntos.`,
      },
      {
        lang: "bash",
        code: `# 6) Descobrir se algo já está instalado e qual versão:
apt list --installed 2>/dev/null | grep firefox
# firefox/resolute,now 124.0 amd64 [installed]

# Ou, mais direto, "onde está o executável?":
which firefox
# /usr/bin/firefox`,
      },
      {
        lang: "bash",
        code: `# 7) O erro campeão do iniciante — instalar SEM ter feito 'update' antes:
sudo apt install algum-pacote
# E: Unable to locate package algum-pacote
#
# Quase sempre a lista está velha. Solução:
sudo apt update           # atualiza a lista
sudo apt install algum-pacote -y   # tente de novo`,
      },
      {
        lang: "bash",
        code: `# 8) Cada ação do apt fica registrada. Quando algo dá errado, o log conta a história:
tail -n 5 /var/log/apt/history.log
# Start-Date: 2026-05-06  14:32:10
# Commandline: apt install htop
# Install: htop:amd64 (3.3.0-1)
# End-Date: 2026-05-06  14:32:12`,
      },
    ],
    points: [
      "`apt` é a ferramenta padrão de pacotes em Ubuntu, Lubuntu e Debian.",
      "Rode `sudo apt update` **antes** de `apt install` para ter a lista fresca — pula esse passo e vem `Unable to locate package`.",
      "`search` e `show` só leem: não precisam de `sudo`. `install`, `remove` e `upgrade` mudam o sistema: precisam.",
      "Dependências são resolvidas sozinhas — você nunca instala biblioteca por biblioteca na mão.",
      "A flag `-y` responde 'sim' às perguntas; útil, mas leia o resumo antes em operações grandes.",
      "Dá para instalar vários pacotes numa linha só, separados por espaço.",
      "`apt` (moderno e amigável) e `apt-get` (antigo, ainda usado em scripts) coexistem e funcionam.",
      "Logs de tudo ficam em `/var/log/apt/history.log` — o primeiro lugar para olhar quando algo quebra.",
    ],
    alerts: [
      {
        type: "warning",
        content: "**Nunca** cancele um `apt install` no meio com Ctrl+C. Você pode deixar um pacote pela metade e travar futuras instalações. Se acontecer, o conserto é `sudo dpkg --configure -a` seguido de `sudo apt install -f`.",
      },
      {
        type: "tip",
        content: "Digite parte do nome e aperte **Tab** — o terminal autocompleta. Ex.: `sudo apt install fire` + Tab mostra `firefox` e amigos. Menos digitação, menos erro de nome.",
      },
      {
        type: "info",
        content: "Diferença rápida: `apt` foi feito para humanos (saída colorida, barra de progresso); `apt-get` é a versão antiga, estável e verbosa, preferida dentro de scripts. Para o dia a dia, use `apt`.",
      },
      {
        type: "success",
        content: "Crie um kit reproduzível: guarde num arquivo de texto a linha `sudo apt install htop tree curl git neofetch -y`. Depois de qualquer reinstalação, cole e em segundos o sistema volta ao seu gosto.",
      },
    ],
  },
  {
    slug: "atualizar-sistema",
    section: "pacotes",
    title: "Mantendo o sistema atualizado",
    difficulty: "iniciante",
    subtitle: "Segurança e programas em dia com dois comandos — e sem medo.",
    intro: `Sistema desatualizado é casa com a porta destrancada. A maioria das atualizações do Lubuntu são **correções de segurança**: buracos que pesquisadores descobriram e que os mantenedores fecharam. Manter em dia é a coisa mais barata que você faz pela sua segurança — e, ao contrário do "atualizar e rezar" do Windows, aqui raramente quebra algo.

## O ritual dos dois passos

Atualizar é sempre a mesma dupla, na mesma ordem:

- \`sudo apt update\` — busca a lista nova de versões. **Confere o cardápio.**
- \`sudo apt upgrade\` — aplica as atualizações disponíveis. **Pede o prato.**

Você faz \`update\` antes de \`upgrade\` para não pedir uma versão que já saiu do cardápio. Inverter a ordem é o erro nº 1 de quem está começando.

## upgrade x full-upgrade

- \`upgrade\` é conservador: atualiza o que dá **sem remover** nada.
- \`full-upgrade\` é mais completo: aceita **remover** um pacote antigo se isso for necessário para instalar a versão nova de outro. Use quando o \`upgrade\` disser "os seguintes pacotes foram retidos" (kept back).

## Com que frequência?

Uma vez por semana é ótimo para uso doméstico. Algumas atualizações — principalmente do **kernel** (o núcleo do Linux), do \`systemd\` ou da \`libc\` — pedem reinício para valer. O sistema cria um arquivo avisando, e você reinicia quando for conveniente. Aquele monte de texto correndo na tela durante o \`upgrade\` é **normal**: é o \`apt\` narrando o que faz. Deixe terminar em paz.`,
    codes: [
      {
        lang: "bash",
        code: `# A dupla do dia a dia:
sudo apt update
sudo apt upgrade -y
# ...
# The following packages will be upgraded:
#   firefox libreoffice-core ...
# 12 upgraded, 0 newly installed, 0 to remove.
# ...
# 12 upgraded, 0 newly installed, 0 to remove.`,
      },
      {
        lang: "bash",
        code: `# Só espiar o que SERIA atualizado, sem aplicar nada:
apt list --upgradable
# Listing... Done
# firefox/resolute-updates 124.0 amd64 [upgradable from: 123.0]
# libreoffice-core/resolute-updates 24.8 amd64 [upgradable from: 24.2]`,
      },
      {
        lang: "bash",
        code: `# Versão mais completa: resolve dependências que mudaram + faz faxina:
sudo apt update
sudo apt full-upgrade -y
sudo apt autoremove -y    # remove kernels antigos e bibliotecas órfãs`,
      },
      {
        lang: "bash",
        code: `# "The following packages have been kept back" — e agora?
# Significa que 'upgrade' não quis mexer porque exigiria remover algo.
# A solução é o full-upgrade:
sudo apt full-upgrade -y`,
      },
      {
        lang: "bash",
        code: `# Depois de atualizar, o sistema pode precisar reiniciar.
# Ele avisa criando este arquivo:
if [ -f /var/run/reboot-required ]; then
  echo "Reinício necessário (provavelmente atualizou o kernel)."
  cat /var/run/reboot-required.pkgs   # mostra QUEM pediu o reboot
fi
# Reinício necessário (provavelmente atualizou o kernel).
# linux-image-7.0.0-12-generic`,
      },
      {
        lang: "bash",
        code: `# Reiniciar ou desligar pelo terminal:
sudo reboot      # reinicia
sudo poweroff    # desliga

# Ver qual kernel está rodando agora (útil depois de atualizar):
uname -r
# 7.0.0-12-generic`,
      },
      {
        lang: "bash",
        code: `# Faxina de espaço depois de muitas atualizações:
sudo apt autoremove -y   # tira kernels velhos e libs sem dono
sudo apt clean           # apaga os .deb baixados que ficaram no cache
df -h /                  # confira o espaço livre da raiz
# Filesystem  Size  Used Avail Use% Mounted on
# /dev/sda2    50G   18G   30G  38% /`,
      },
      {
        lang: "bash",
        code: `# Um atalho para atualizar tudo de uma vez (coloque no ~/.bashrc):
alias att='sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y'
# Depois, recarregue o bashrc e use:
source ~/.bashrc
att      # atualiza, faz upgrade completo e limpa — tudo numa palavra`,
      },
    ],
    points: [
      "Faça `sudo apt update && sudo apt upgrade -y` pelo menos uma vez por semana.",
      "`update` busca a lista; `upgrade` aplica. **Nunca** inverta a ordem.",
      "`full-upgrade` é mais completo: aceita remover pacotes antigos para resolver dependências — use quando aparecer 'kept back'.",
      "`autoremove` tira kernels antigos e bibliotecas órfãs, liberando disco.",
      "Atualização de kernel exige reboot — cheque `/var/run/reboot-required`.",
      "O texto correndo na tela é normal: é o `apt` mostrando o progresso. Não interrompa.",
      "Em uma versão **LTS** você recebe 5 anos de atualizações de segurança gratuitas.",
      "Erro comum: rodar `upgrade` sem o `update` antes e ficar com versão velha ou erro 404.",
    ],
    alerts: [
      {
        type: "info",
        content: "Trocar de **versão do sistema** (ex.: de 26.04 para 26.10) é outra operação: usa `sudo do-release-upgrade`, não o `upgrade`. O `upgrade` só cuida dos programas dentro da versão atual.",
      },
      {
        type: "warning",
        content: "Se aparecer aviso de repositório **expirado** ou **sem assinatura** durante o `update`, não ignore. Costuma ser um PPA quebrado. Resolva (veremos no capítulo de PPAs) antes de seguir atualizando.",
      },
      {
        type: "danger",
        content: "Não desligue o computador no meio de um `upgrade`, ainda mais se for atualização de kernel. Interromper pode deixar o sistema sem inicializar. Se estiver num notebook, faça sempre na tomada.",
      },
      {
        type: "success",
        content: "O alias `att` transforma a rotina de manutenção em uma palavra. Depois de criar, atualizar o sistema inteiro vira digitar três letras e apertar Enter.",
      },
    ],
  },
  {
    slug: "instalar-remover",
    section: "pacotes",
    title: "Instalando e removendo programas com segurança",
    difficulty: "iniciante",
    subtitle: "install, remove, purge e a faxina que mantém o Lubuntu leve por anos.",
    intro: `Cada programa instalado é um inquilino na sua casa. Uns ajudam todo dia; outros entraram num teste e ficaram esquecidos ocupando espaço. Saber instalar **e** remover com calma é o que separa uma casa arrumada de uma cheia de caixas amontoadas — e é justamente essa disciplina que mantém o Lubuntu leve depois de anos de uso.

## Sem "próximo, próximo, aceito"

No Linux não existe aquele instalador com dez telas e um "aceito os termos" escondendo uma barra de ferramentas indesejada. O programa entra por uma linha (ou um clique) e sai limpo, **sem deixar lixo** num Registro (que aqui nem existe). Por isso o sistema não "engorda" com o tempo como o Windows.

## As três operações que você precisa dominar

- \`install\` — instala o programa.
- \`remove\` — desinstala, mas **mantém** os arquivos de configuração (bom se pretende reinstalar depois).
- \`purge\` — desinstala e **apaga também** as configurações (bom quando o programa deu problema e você quer recomeçar do zero).

E, acima de tudo, a faxina:

- \`autoremove\` — tira as dependências que ficaram **penduradas sem dono** depois que você removeu o programa que as trouxe.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar um pacote e ler o resumo (ele avisa o espaço que vai usar):
sudo apt install gimp -y
# The following NEW packages will be installed:
#   gimp gimp-data libgimp2.0 ...
# After this operation, 240 MB of additional disk space will be used.
# Setting up gimp (2.10.x) ...`,
      },
      {
        lang: "bash",
        code: `# Instalar vários de uma vez (kit de multimídia, por exemplo):
sudo apt install vlc audacity handbrake -y
# Separe por espaço. O apt baixa e configura tudo numa tacada.`,
      },
      {
        lang: "bash",
        code: `# Remover MANTENDO as configurações (você pode reinstalar e achar tudo no lugar):
sudo apt remove gimp -y
# The following packages will be REMOVED:
#   gimp
# 0 upgraded, 0 newly installed, 1 to remove.`,
      },
      {
        lang: "bash",
        code: `# Remover APAGANDO tudo, inclusive configs (recomeço do zero):
sudo apt purge gimp -y
# The following packages will be REMOVED:
#   gimp*
# O asterisco (*) sinaliza que as configurações também serão apagadas.`,
      },
      {
        lang: "bash",
        code: `# A faxina: tirar dependências que sobraram sem ninguém usar:
sudo apt autoremove -y
# The following packages will be REMOVED:
#   gimp-data libgimp2.0 linux-image-6.9.0-old ...
# Repare que ele também recolhe kernels antigos.`,
      },
      {
        lang: "bash",
        code: `# ANTES de remover algo do sistema, veja quem depende daquilo:
apt-cache rdepends --installed firefox | head
# firefox
# Reverse Depends:
#   ubuntu-web-launchers
# Se a lista for grande, pense duas vezes: remover pode derrubar outras coisas.`,
      },
      {
        lang: "bash",
        code: `# Reinstalar um programa que bagunçou (sem perder seus dados):
sudo apt install --reinstall firefox -y
# Reinstalling firefox (124.0) ...
# Útil quando o programa quebrou depois de uma atualização.`,
      },
      {
        lang: "bash",
        code: `# Consertar uma instalação interrompida (aquele Ctrl+C infeliz):
sudo dpkg --configure -a   # termina o que ficou pela metade
sudo apt install -f        # -f = fix broken: resolve dependências quebradas`,
      },
    ],
    points: [
      "`install` instala, `remove` desinstala mantendo configs, `purge` desinstala apagando configs.",
      "Dá para listar vários pacotes numa chamada só, separados por espaço.",
      "`autoremove` é a faxina: recolhe dependências órfãs e kernels antigos.",
      "`--reinstall` conserta um programa quebrado **sem** perder seus dados.",
      "Antes de remover algo do sistema, cheque `apt-cache rdepends --installed <pacote>`.",
      "Sempre **leia o resumo** do apt antes de confirmar: ele lista o que será removido junto.",
      "Instalação interrompida trava futuras — o conserto é `dpkg --configure -a` + `apt install -f`.",
      "Erro comum: usar `remove` querendo `purge` e depois estranhar configs velhas atrapalhando.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Muito cuidado ao remover pacotes com **`lubuntu-`**, **`lxqt-`** ou **`xorg`** no nome. Você pode acabar sem interface gráfica e cair num terminal preto no próximo boot. Se o apt avisar que vai remover dezenas de pacotes que você não pediu, cancele com `n` e investigue.",
      },
      {
        type: "tip",
        content: "Nomes de pacote são sempre em **minúsculas, com hífens** e sem acento: `libreoffice-writer`, `firefox-esr`, `vlc-plugin-base`. Se errar o nome, o apt reclama com `Unable to locate package`.",
      },
      {
        type: "info",
        content: "Diferença prática entre `remove` e `purge`: depois de um `remove`, um `apt install` de volta encontra suas preferências antigas intactas. Depois de um `purge`, o programa volta como se fosse a primeira vez.",
      },
    ],
  },
  {
    slug: "adicionar-ppa",
    section: "pacotes",
    title: "PPAs: repositórios extras (e como não se queimar)",
    difficulty: "intermediario",
    subtitle: "Instalando versões novas ou de nicho que não estão no apt oficial.",
    intro: `Os repositórios oficiais do Ubuntu têm dezenas de milhares de programas, mas nem tudo cabe lá — e o que cabe às vezes é uma versão mais antiga, congelada quando a versão do sistema saiu. Quando você precisa da versão **mais nova** de um programa, ou de algo de **nicho**, entram os **PPAs**.

## O que é um PPA

**PPA** significa *Personal Package Archive*: um repositório extra, hospedado no **Launchpad** (a plataforma da Canonical), mantido por um desenvolvedor ou por uma comunidade. Adicionar um PPA é dizer ao \`apt\`: "de agora em diante, procure pacotes **também** neste endereço". A partir daí, o programa do PPA fica visível e **atualizável** como qualquer outro — essa é a grande vantagem sobre baixar um \`.deb\` solto.

## O que acontece por baixo

Ao adicionar um PPA, o sistema faz duas coisas:

- baixa e instala uma **chave GPG**, para conferir a assinatura dos pacotes daquele repositório;
- cria um arquivo em \`/etc/apt/sources.list.d/\` com o endereço do repositório.

## A regra de ouro

PPA é **confiança em quem mantém**. Não passa pela revisão da equipe do Ubuntu. Um PPA malicioso pode rodar código como root no seu sistema durante a instalação. Portanto: use só PPAs de **fontes oficiais** (o próprio projeto) ou de mantenedores reconhecidos — por exemplo \`git-core\` (Git), \`kisak\` (drivers Mesa) ou \`deadsnakes\` (versões do Python). PPA aleatório de tutorial antigo é pedir problema.`,
    codes: [
      {
        lang: "bash",
        code: `# Ferramenta que facilita adicionar/remover PPA (às vezes já vem instalada):
sudo apt update
sudo apt install software-properties-common -y
# software-properties-common is already the newest version (0.99.x).`,
      },
      {
        lang: "bash",
        code: `# Adicionar um PPA confiável (exemplo: Git oficial, sempre atualizado):
sudo add-apt-repository ppa:git-core/ppa -y
# Repository: 'deb https://ppa.launchpadcontent.net/git-core/ppa/ubuntu resolute main'
# Adding key to /etc/apt/... done.
# (o comando moderno já roda 'apt update' sozinho no fim)`,
      },
      {
        lang: "bash",
        code: `# Agora o Git aparece com a versão mais nova do PPA:
sudo apt install git -y
git --version
# git version 2.45.2   (vs 2.43 que vinha do repo oficial)`,
      },
      {
        lang: "bash",
        code: `# Ver todos os PPAs/repositórios extras que você adicionou:
ls /etc/apt/sources.list.d/
# git-core-ubuntu-ppa-resolute.sources
# google-chrome.sources
grep -r "^URIs\\|^deb" /etc/apt/sources.list.d/ | head`,
      },
      {
        lang: "bash",
        code: `# Remover um PPA que você não quer mais:
sudo add-apt-repository --remove ppa:git-core/ppa -y
# Depois, se quiser, volte para a versão do repo oficial:
sudo apt update
sudo apt install --reinstall git -y`,
      },
      {
        lang: "bash",
        code: `# PPA quebrado costuma dar erro no 'apt update' (404 ou sem Release):
sudo apt update
# E: The repository '... resolute Release' does not have a Release file.
# N: Updating from such a repository can't be done securely ...`,
      },
      {
        lang: "bash",
        code: `# Localize e desative o repositório problemático:
grep -rl "launchpad" /etc/apt/sources.list.d/
# /etc/apt/sources.list.d/fulano-ubuntu-app-resolute.sources
# Abra e comente (coloque # nas linhas) ou apague o arquivo:
sudo nano /etc/apt/sources.list.d/fulano-ubuntu-app-resolute.sources
sudo apt update    # confirme que o erro sumiu`,
      },
    ],
    points: [
      "PPA = repositório extra de terceiros, hospedado no Launchpad da Canonical.",
      "Adicione com `sudo add-apt-repository ppa:usuario/nome` (o comando moderno já roda `apt update` no fim).",
      "A vantagem sobre um `.deb` solto: o programa do PPA passa a **receber atualizações** pelo apt.",
      "Remova com `sudo add-apt-repository --remove ppa:usuario/nome`.",
      "PPAs confiáveis incluem `git-core` (Git), `kisak` (Mesa), `deadsnakes` (Python), `libreoffice`.",
      "Os arquivos de configuração vivem em `/etc/apt/sources.list.d/` — é lá que se desativa um PPA quebrado.",
      "PPA quebrado gera erro no `apt update` e **trava** as atualizações — resolva na hora.",
      "Erro comum: seguir tutorial antigo e adicionar PPA abandonado, sem pacote para a sua versão do Ubuntu.",
    ],
    alerts: [
      {
        type: "danger",
        content: "PPA **não** passa por revisão da Canonical. Ao adicionar um, você confia no mantenedor com acesso de root ao instalar. Adicione apenas de fontes oficiais e reconhecidas — nunca de um link aleatório de fórum.",
      },
      {
        type: "warning",
        content: "Antes de trocar de versão do sistema com `do-release-upgrade`, o Ubuntu **desativa todos os PPAs**. Depois, reative um a um, conferindo se cada um já tem pacotes para a versão nova. Reativar tudo às cegas é receita para conflito.",
      },
      {
        type: "tip",
        content: "Para muitos programas modernos (VS Code, Brave, Spotify), prefira **Snap** ou **Flatpak** a um PPA: rodam em sandbox e não dependem de um mantenedor manter o PPA vivo. Veremos os dois nos próximos capítulos.",
      },
    ],
  },
  {
    slug: "snap-pacotes",
    section: "pacotes",
    title: "Snap: pacotes universais com sandbox",
    difficulty: "intermediario",
    subtitle: "O formato \"tudo junto\" da Canonical — vantagens e o preço que se paga.",
    intro: `Depois do \`apt\` e dos PPAs, você vai esbarrar num terceiro jeito de instalar programas: os **Snaps**. É um formato mais novo, criado pela **Canonical** (a empresa do Ubuntu), pensado para resolver uma dor antiga do Linux — a de o mesmo programa precisar de empacotamento diferente para cada distribuição.

## A marmita selada

Um Snap leva **tudo dentro**: o programa, suas bibliotecas e dependências, tudo num arquivo só. Por isso ele roda igual no Ubuntu, no Fedora ou no Arch, sem depender da versão de biblioteca que o sistema tem. É como uma marmita selada — pesa mais, mas você sabe que vai funcionar em qualquer lugar.

## O sandbox: segurança que às vezes incomoda

O outro pilar do Snap é o **sandbox**: o programa roda "preso", com permissões limitadas, sem poder mexer livremente no sistema. Isso aumenta a segurança — um Snap comprometido tem alcance restrito. O preço é que, às vezes, o programa **não enxerga** uma pasta fora do lugar comum (como um \`~/Downloads\` movido), e a primeira abertura é mais lenta porque ele monta o sandbox.

## No Lubuntu

O \`snapd\` (o motor dos Snaps) já vem instalado nas versões recentes. Você usa pelo comando \`snap\` ou pelo Discover, que também lista Snaps. A grande vantagem prática: receber a versão **mais nova**, direto do desenvolvedor, de programas como Spotify, Chromium, VS Code e Discord — sem esperar a equipe do Ubuntu reempacotar.`,
    codes: [
      {
        lang: "bash",
        code: `# Confirme se o snapd está presente:
snap version
# snap    2.63
# snapd   2.63
# series  16
# ubuntu  26.04

# Se não estiver, instale:
sudo apt install snapd -y`,
      },
      {
        lang: "bash",
        code: `# Procurar um programa na Snap Store:
snap find spotify
# Name     Version  Publisher   Notes  Summary
# spotify  1.2.x    spotify✓    -      Music streaming for everyone
# O ✓ verde ao lado do publicador = conta VERIFICADA. Prefira esses.`,
      },
      {
        lang: "bash",
        code: `# Instalar um Snap:
sudo snap install spotify
# spotify 1.2.x from Spotify✓ installed
# O ícone aparece no menu LXQt logo em seguida.`,
      },
      {
        lang: "bash",
        code: `# Alguns Snaps de desenvolvedor pedem a flag --classic
# (eles precisam de acesso amplo ao sistema, sem sandbox estrito):
sudo snap install code --classic
# code (edge) ... installed
# Se esquecer o --classic quando é exigido, o snap avisa e recusa.`,
      },
      {
        lang: "bash",
        code: `# Listar o que você tem instalado via Snap:
snap list
# Name     Version  Rev    Tracking       Publisher   Notes
# core22   ...      ...    latest/stable  canonical✓  base
# spotify  1.2.x    ...    latest/stable  spotify✓    -
# code     1.90     ...    latest/stable  vscode✓     classic`,
      },
      {
        lang: "bash",
        code: `# Atualizações de Snap são AUTOMÁTICAS, mas dá para forçar:
sudo snap refresh
# All snaps up to date.
# Ver quando será a próxima checagem automática:
snap refresh --time
# last: today at 09:12 -03
# next: today at 15:12 -03`,
      },
      {
        lang: "bash",
        code: `# Um Snap não abre um arquivo de uma pasta "estranha"? É o sandbox.
# Veja e ajuste as permissões (interfaces) do Snap:
snap connections spotify
# Interface        Plug                 Slot
# home             spotify:home         :home
# removable-media  spotify:removable    -    (desconectado)
sudo snap connect spotify:removable-media   # libera acesso a pendrives`,
      },
      {
        lang: "bash",
        code: `# Remover um Snap (apaga inclusive os dados do programa):
sudo snap remove spotify
# spotify removed

# Snaps ocupam mais disco (carregam tudo dentro). Veja o tamanho:
du -sh /var/lib/snapd/snaps/*.snap | sort -h | tail
# 68M   .../core22_xxxx.snap
# 210M  .../spotify_xxxx.snap`,
      },
    ],
    points: [
      "Snap = pacote universal, com todas as dependências dentro, criado pela Canonical.",
      "Roda em **sandbox**: mais seguro, mas às vezes não enxerga pastas fora do padrão.",
      "Comandos centrais: `snap find`, `snap install`, `snap list`, `snap refresh`, `snap remove`.",
      "Atualizações são **automáticas** — você não precisa fazer nada.",
      "Publicador com **✓ verde** é conta verificada; prefira sempre esses.",
      "Alguns Snaps de desenvolvedor (VS Code) exigem `--classic` para ter acesso amplo.",
      "Problema de acesso a arquivo? Ajuste as permissões com `snap connections` / `snap connect`.",
      "Snaps ocupam mais disco e abrem mais devagar na primeira vez — é o preço do formato autocontido.",
    ],
    alerts: [
      {
        type: "info",
        content: "Algumas distribuições (Linux Mint, por exemplo) desencorajam Snap por padrão. No **Ubuntu e no Lubuntu** o suporte é nativo e oficial — pode usar sem receio.",
      },
      {
        type: "warning",
        content: "A **primeira** abertura de um Snap costuma ser lenta: ele monta o sandbox e descompacta. Não é o seu PC fraco — da segunda vez em diante fica rápido.",
      },
      {
        type: "tip",
        content: "Programas que ficam ótimos como Snap: **spotify, chromium, code (VS Code), discord, slack, telegram-desktop**. Sempre procure o ✓ do publicador verificado antes de instalar.",
      },
      {
        type: "success",
        content: "Não sabe se um programa está como `.deb`, Snap ou Flatpak? Instale o que o **próprio site oficial** recomendar. Quando houver empate, prefira Snap/Flatpak pelo sandbox.",
      },
    ],
  },
  {
    slug: "flatpak-pacotes",
    section: "pacotes",
    title: "Flatpak: o concorrente aberto do Snap",
    difficulty: "intermediario",
    subtitle: "Outro formato universal, com o Flathub gigantesco por trás.",
    intro: `Se o Snap é o formato universal da Canonical, o **Flatpak** é o formato universal da **comunidade aberta** — apoiado por Red Hat, GNOME, KDE e boa parte do ecossistema Linux. O objetivo é o mesmo: empacotar o programa com suas dependências, rodar em sandbox e instalar em qualquer distribuição. A rivalidade entre os dois é real, mas para você, usuário, é só **variedade**: muita gente roda os dois na mesma máquina.

## A diferença que importa: runtimes compartilhados

O Snap carrega tudo dentro de cada pacote. O Flatpak usa **runtimes compartilhados**: várias aplicações Flatpak apoiam-se na mesma base grande de bibliotecas (por exemplo, o runtime do GNOME ou do KDE), que é baixada **uma vez** e reaproveitada. Na prática, quando você instala muitos programas Flatpak, costuma **economizar disco** em relação a instalar tudo como Snap.

## O Flathub

A loja oficial do Flatpak é o **Flathub** (flathub.org): milhares de programas, muitos com versões mais novas que as do \`apt\`. É lá que vivem as builds recentes de **OBS Studio, Inkscape, Krita, Bitwarden, Blender** e afins.

## No Lubuntu

Diferente do Snap, o Flatpak **não** vem instalado por padrão (a Canonical, naturalmente, prefere o Snap). Mas adicionar é trivial: instala o pacote, cadastra o Flathub como fonte, e pronto. Depois da primeira instalação, faça **logout/login** uma vez para os ícones aparecerem no menu LXQt.`,
    codes: [
      {
        lang: "bash",
        code: `# 1) Instalar o Flatpak no Lubuntu:
sudo apt update
sudo apt install flatpak -y
flatpak --version
# Flatpak 1.14.x`,
      },
      {
        lang: "bash",
        code: `# 2) Adicionar o Flathub (a loja principal). Só precisa fazer UMA vez:
flatpak remote-add --if-not-exists flathub \\
  https://flathub.org/repo/flathub.flatpakrepo
# (sem saída = deu certo)
flatpak remotes
# Name     Options
# flathub  system`,
      },
      {
        lang: "bash",
        code: `# 3) Procurar um programa:
flatpak search obs
# Name        Description              Application ID          Remotes
# OBS Studio  Live streaming/recording com.obsproject.Studio   flathub`,
      },
      {
        lang: "bash",
        code: `# 4) Instalar (repare que se usa o Application ID, no formato com.autor.Programa):
flatpak install flathub com.obsproject.Studio -y
# Installing... Downloading runtime org.kde.Platform ...
# Installation complete.
# (na primeira vez ele baixa o runtime grande; nas próximas, reaproveita)`,
      },
      {
        lang: "bash",
        code: `# 5) Rodar:
flatpak run com.obsproject.Studio
# Ou clique no ícone no menu LXQt (aparece após o primeiro logout/login).`,
      },
      {
        lang: "bash",
        code: `# 6) Listar e atualizar tudo:
flatpak list --app
# Name        Application ID          Version
# OBS Studio  com.obsproject.Studio   30.x
flatpak update -y`,
      },
      {
        lang: "bash",
        code: `# 7) Remover e depois liberar os runtimes que ninguém mais usa:
flatpak uninstall com.obsproject.Studio -y
flatpak uninstall --unused -y   # faxina: apaga runtimes órfãos, libera bastante disco`,
      },
      {
        lang: "bash",
        code: `# 8) Programa Flatpak não consegue abrir um arquivo? É o sandbox.
# Instale o Flatseal (gerenciador gráfico de permissões):
flatpak install flathub com.github.tchx84.Flatseal -y
# ou ajuste por linha de comando, ex.: dar acesso à pasta inteira do usuário:
flatpak override --user --filesystem=home com.obsproject.Studio`,
      },
    ],
    points: [
      "Flatpak = formato universal aberto, alternativa ao Snap (apoiado por Red Hat, GNOME, KDE).",
      "Usa **runtimes compartilhados** — costuma economizar disco quando você tem várias apps.",
      "Loja principal: **Flathub** (flathub.org), enorme e com versões fresquíssimas.",
      "Não vem por padrão no Lubuntu; instale com `sudo apt install flatpak` e cadastre o Flathub uma vez.",
      "Instala-se pelo **Application ID** (`com.autor.Programa`), não pelo nome curto.",
      "Comandos centrais: `flatpak install`, `flatpak update`, `flatpak uninstall`, `flatpak uninstall --unused`.",
      "Faça **logout/login** após a primeira instalação para os ícones surgirem no menu.",
      "Problema de permissão? Use o **Flatseal** (gráfico) ou `flatpak override` (terminal).",
    ],
    alerts: [
      {
        type: "tip",
        content: "Para pesquisar e instalar Flatpaks **dentro do Discover** (a loja gráfica), instale `plasma-discover-backend-flatpak`. Assim você acha apt, Snap e Flatpak num lugar só.",
      },
      {
        type: "info",
        content: "Programas que costumam ficar melhores como Flatpak: **OBS Studio, Inkscape, Krita, Blender, Bitwarden, GIMP (versão nova), Telegram**. Muitos desenvolvedores tratam o Flathub como canal oficial.",
      },
      {
        type: "warning",
        content: "Esquecer de cadastrar o Flathub é o erro nº 1: você instala o Flatpak, roda `flatpak search` e não acha nada. Sem uma **remote** cadastrada, não há de onde buscar pacotes.",
      },
    ],
  },
  {
    slug: "instalar-deb",
    section: "pacotes",
    title: "Instalando pacotes .deb baixados do site",
    difficulty: "intermediario",
    subtitle: "Quando o programa só existe como arquivo para download — e como fazer isso com segurança.",
    intro: `Alguns programas — **Google Chrome, Microsoft Teams, AnyDesk**, certos drivers de impressora — não estão no \`apt\`, nem em Snap, nem em Flatpak. O fornecedor oferece um arquivo \`.deb\` para baixar direto do site oficial. Este capítulo fecha a trilha ensinando a lidar com esses casos **sem cair em cilada**.

## O que é um .deb

O \`.deb\` é o **formato de pacote nativo** do Debian e do Ubuntu — o mesmo tipo de arquivo que o \`apt\` baixa por dentro, só que aqui você pega manualmente. Dentro dele estão: os arquivos do programa, a lista de dependências, metadados e scripts que rodam na instalação. É o parente mais próximo, no Linux, do \`.exe\`/\`.msi\` do Windows.

## A forma certa de instalar

Existe a forma antiga (\`dpkg -i\`) e a forma recomendada (\`apt install ./arquivo.deb\`). A diferença é decisiva:

- \`dpkg -i\` instala, mas **não resolve dependências** — se faltar algo, ele para com erro.
- \`sudo apt install ./arquivo.deb\` instala **e resolve as dependências** automaticamente. Repare no \`./\` na frente: é ele que diz ao apt "isto é um arquivo local, não o nome de um pacote no repositório".

## A regra de ouro (de novo)

\`.deb\` roda scripts como root durante a instalação. Um \`.deb\` malicioso compromete o sistema inteiro. Por isso: baixe **apenas do site oficial** do programa. Nada de "baixaki", fórum ou link encurtado. E, quando o site publicar o hash **SHA-256**, confira — leva cinco segundos e elimina o risco de um download adulterado.`,
    codes: [
      {
        lang: "bash",
        code: `# Exemplo real: baixando o Google Chrome do site oficial:
cd ~/Downloads
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# ... 'google-chrome-stable_current_amd64.deb' saved [118MB/118MB]
ls -lh *.deb
# -rw-r--r-- 1 voce voce 118M ... google-chrome-stable_current_amd64.deb`,
      },
      {
        lang: "bash",
        code: `# A forma RECOMENDADA (resolve dependências sozinha). Note o ./ na frente:
sudo apt install ./google-chrome-stable_current_amd64.deb -y
# Note, selecting 'google-chrome-stable' instead of './google-chrome...'
# The following NEW packages will be installed:
#   google-chrome-stable
# Setting up google-chrome-stable ...`,
      },
      {
        lang: "bash",
        code: `# A forma antiga com dpkg NÃO resolve dependências:
sudo dpkg -i google-chrome-stable_current_amd64.deb
# dpkg: dependency problems prevent configuration of google-chrome-stable:
#  google-chrome-stable depends on fonts-liberation; however: ...
# Conserto (rode logo em seguida):
sudo apt install -f -y     # -f = fix broken: baixa o que faltou`,
      },
      {
        lang: "bash",
        code: `# INSPECIONAR o .deb antes de instalar (ver versão e dependências):
dpkg -I google-chrome-stable_current_amd64.deb
# Package: google-chrome-stable
# Version: 124.0.x
# Architecture: amd64
# Depends: ca-certificates, fonts-liberation, libnss3 (>= 2:3.22) ...`,
      },
      {
        lang: "bash",
        code: `# Auditar QUAIS arquivos ele vai colocar e ONDE (bom para desconfiar):
dpkg -c google-chrome-stable_current_amd64.deb | head
# drwxr-xr-x  ./opt/google/chrome/
# -rwxr-xr-x  ./opt/google/chrome/chrome
# -rwxr-xr-x  ./usr/bin/google-chrome-stable`,
      },
      {
        lang: "bash",
        code: `# Conferir o SHA-256 quando o site publica o hash oficial:
sha256sum google-chrome-stable_current_amd64.deb
# a1b2c3d4...  google-chrome-stable_current_amd64.deb
# Compare CARACTERE A CARACTERE com o hash do site. Diferente = NÃO instale.`,
      },
      {
        lang: "bash",
        code: `# Remover depois usa o NOME DO PACOTE, não o do arquivo:
sudo apt remove google-chrome-stable -y
# Para apagar inclusive configurações:
sudo apt purge google-chrome-stable -y`,
      },
      {
        lang: "bash",
        code: `# Muitos .deb de empresa adicionam o próprio repositório para se auto-atualizar.
# Confira (é normal e desejável — mantém o programa em dia pelo apt):
ls /etc/apt/sources.list.d/ | grep -i chrome
# google-chrome.sources
cat /etc/apt/sources.list.d/google-chrome.sources`,
      },
    ],
    points: [
      "`.deb` é o formato nativo de pacote no Debian/Ubuntu/Lubuntu.",
      "Prefira sempre `sudo apt install ./arquivo.deb` — o `./` marca arquivo local e as dependências são resolvidas.",
      "`dpkg -i` instala mas não resolve dependências; se der erro, rode `sudo apt install -f`.",
      "Inspecione antes: `dpkg -I` mostra informações; `dpkg -c` lista os arquivos que serão instalados.",
      "Confira o **SHA-256** quando o site oficial fornecer — compara o download com o original.",
      "Para remover, use o **nome do pacote** (`google-chrome-stable`), não o nome do arquivo.",
      "Vários `.deb` de empresa adicionam um repositório próprio para atualizar sozinhos pelo apt — é normal.",
      "Erro comum: usar `dpkg -i`, ver o erro de dependência e desistir — bastava rodar `apt install -f`.",
    ],
    alerts: [
      {
        type: "danger",
        content: "**Nunca** instale um `.deb` de origem desconhecida. Durante a instalação ele executa scripts como **root** — um pacote malicioso compromete o sistema inteiro. Baixe só do site oficial do fabricante.",
      },
      {
        type: "tip",
        content: "Quando o mesmo programa oferece `.deb` **e** Snap/Flatpak, prefira Snap/Flatpak pelo sandbox. Use o `.deb` apenas quando o próprio fornecedor recomendar (caso do Chrome, que integra melhor como `.deb`).",
      },
      {
        type: "info",
        content: "Terminou a trilha de Pacotes! Você já sabe os **cinco** caminhos para instalar software no Lubuntu: loja Discover, `apt`, PPA, Snap, Flatpak e `.deb`. Na dúvida sobre qual usar, siga esta ordem de preferência: repositório oficial (`apt`) → Snap/Flatpak → `.deb`/PPA de fonte oficial.",
      },
    ],
  },
];
