import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "discover-software",
    section: "pacotes",
    title: "Discover: a loja de aplicativos do Lubuntu",
    difficulty: "iniciante",
    subtitle: "Instalando programas pela interface gráfica, sem terminal.",
    intro: `Imagine o Discover como a Play Store ou a App Store do seu Lubuntu. É uma vitrine bonitinha onde você procura programas pelo nome, vê uma descrição, lê avaliações e clica em "Instalar". Tudo grátis, tudo conferido pela equipe do Ubuntu, sem risco de baixar um instalador suspeito do Google.

Por baixo do pano, o Discover não inventa nada: ele fala com o \`apt\` (que veremos no próximo capítulo) e com os pacotes Snap. A vantagem é que você não precisa decorar comandos no começo. Basta saber digitar o nome do programa e clicar. É a porta de entrada perfeita para quem está saindo do Windows.

Outra coisa que o Discover faz por você é avisar quando há atualizações. Aparece uma bolinha laranja na bandeja do sistema, você abre, lê o que mudou e clica em aplicar. Mais simples impossível. No fim deste capítulo, você vai instalar o seu primeiro programa pelo Lubuntu — e já vai entender de onde os programas vêm.`,
    codes: [
      {
        lang: "bash",
        code: `# Se o Discover não estiver instalado (Lubuntu mínimo às vezes não inclui),
# abra o QTerminal e instale com apt:
sudo apt update
sudo apt install plasma-discover -y
# saída: ... 1 upgraded, 1 newly installed ...`,
      },
      {
        lang: "bash",
        code: `# Para abrir o Discover pelo terminal (testando):
plasma-discover &
# saída: nada — abre a janela do Discover.
# O & no final manda o programa rodar em segundo plano.`,
      },
      {
        lang: "text",
        code: `# Fluxo dentro da janela do Discover (passo a passo):
# 1. Clique na lupa no topo
# 2. Digite o nome do programa, ex: "vlc"
# 3. Clique no resultado correspondente
# 4. Leia descrição, screenshots e tamanho
# 5. Clique no botão "Instalar"
# 6. Digite sua senha quando pedir (é o sudo gráfico)
# 7. Aguarde a barra de progresso terminar`,
      },
      {
        lang: "bash",
        code: `# Depois de instalar, o programa aparece no Menu LXQt
# (canto inferior esquerdo). Para conferir pelo terminal:
which vlc
# saída esperada: /usr/bin/vlc
vlc --version
# saída: VLC media player 3.0.x ...`,
      },
      {
        lang: "bash",
        code: `# O Discover também desinstala. Mas se preferir terminal:
sudo apt remove vlc -y
# saída: ... 1 to remove ...
# Para apagar inclusive arquivos de configuração:
sudo apt purge vlc -y`,
      },
    ],
    points: [
      "Discover é a loja de aplicativos gráfica padrão do Lubuntu (LXQt).",
      "Por baixo dele rodam o apt e o Snap — ele é só uma cara bonita.",
      "Procurar pelo nome funciona na maioria dos casos (vlc, gimp, libreoffice).",
      "Atualizações do sistema aparecem com um aviso na bandeja do sistema.",
      "Iniciante comum: tentar instalar baixando .exe da internet — no Linux isso não funciona.",
      "Iniciante comum: pular o Discover e ir direto ao terminal sem entender o que ele faz.",
      "Sempre digite a senha quando pedir: é o equivalente gráfico do sudo.",
      "Se o Discover travar, feche tudo e use \`sudo apt install\` no terminal.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de instalar, leia a descrição. Programas com poucos downloads ou sem screenshots às vezes são abandonados — confira a data da última atualização.",
      },
      {
        type: "info",
        content: "Lubuntu vem com o Muon ou com o Discover dependendo da versão. Os dois fazem a mesma coisa: gerenciar pacotes graficamente.",
      },
      {
        type: "warning",
        content: "Não instale .exe de Windows pelo Linux. Para isso existe o Wine, mas é assunto avançado e foge do propósito desta seção.",
      },
    ],
  },
  {
    slug: "apt-basico",
    section: "pacotes",
    title: "APT: o gerenciador de pacotes do terminal",
    difficulty: "iniciante",
    subtitle: "O comando que faz tudo no Ubuntu, do zero.",
    intro: `O \`apt\` (Advanced Package Tool) é o coração do gerenciamento de software no Lubuntu. Pense nele como um carteiro inteligente: você diz "quero o programa tal" e ele vai até o servidor oficial do Ubuntu, baixa o pacote, confere a assinatura digital, instala e organiza tudo. Você não precisa caçar instalador na internet, não precisa rodar antivírus depois.

A grande sacada do apt é que ele entende dependências. Se você instala o GIMP, ele percebe que precisa também de várias bibliotecas e instala todas juntas. Quando você desinstala, ele oferece remover o que ficou pendurado. É o jeito mais confiável de cuidar do software do seu sistema.

Quase todo comando do apt precisa de \`sudo\` na frente, porque está mexendo em arquivos do sistema todo, não só na sua pasta de usuário. Decorar uns 6 ou 7 comandos do apt é o suficiente para você sobreviver muito bem no Lubuntu. É menos do que parece.`,
    codes: [
      {
        lang: "bash",
        code: `# Atualizar a LISTA de pacotes disponíveis (não instala nada ainda).
# Faça isso sempre antes de instalar algo novo.
sudo apt update
# saída: Hit:1 http://br.archive.ubuntu.com/ubuntu noble InRelease ...
# Reading package lists... Done`,
      },
      {
        lang: "bash",
        code: `# Procurar um pacote pelo nome ou descrição
apt search firefox
# saída: vai listar firefox, firefox-esr, firefox-locale-pt-br ...
# search NÃO precisa de sudo — só lê.`,
      },
      {
        lang: "bash",
        code: `# Ver detalhes de um pacote antes de instalar
apt show vlc
# saída: Package: vlc
# Version: 3.0.x
# Description: multimedia player and streamer
# Depends: vlc-bin, vlc-plugin-base ...`,
      },
      {
        lang: "bash",
        code: `# Instalar um pacote
sudo apt install htop -y
# -y aceita perguntas automaticamente
# saída: ... Setting up htop ...
# Agora o comando htop está disponível:
htop
# (aperte q para sair)`,
      },
      {
        lang: "bash",
        code: `# Listar tudo que está instalado no sistema
apt list --installed
# saída longa — combine com grep para filtrar:
apt list --installed | grep firefox
# saída: firefox/noble,now 122.0 amd64 [installed]`,
      },
      {
        lang: "bash",
        code: `# Cada execução do apt deixa log em /var/log/apt/
# Útil quando algo deu errado:
ls /var/log/apt/
# saída: history.log  term.log  ...
# Olhe o histórico:
tail /var/log/apt/history.log`,
      },
    ],
    points: [
      "apt = ferramenta padrão de pacotes em Ubuntu/Lubuntu/Debian.",
      "Sempre rode \`sudo apt update\` antes de \`apt install\` para ter a lista fresca.",
      "search e show não precisam de sudo; install, remove e upgrade precisam.",
      "Dependências são resolvidas automaticamente — você não instala biblioteca a biblioteca.",
      "A flag -y serve para responder \"sim\" a confirmações sem precisar digitar nada.",
      "Iniciante comum: rodar \`apt install\` sem \`apt update\` antes — pega versão velha ou erro 404.",
      "Iniciante comum: confundir \`apt\` (moderno, amigável) com \`apt-get\` (antigo, ainda funciona mas verboso).",
      "Logs ficam em /var/log/apt/ — ótimos quando algo quebra e você quer entender.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Nunca interrompa um \`apt install\` no meio (Ctrl+C). Pode deixar o sistema com pacote pela metade. Se acontecer, rode \`sudo dpkg --configure -a\` para arrumar.",
      },
      {
        type: "tip",
        content: "Aperte Tab depois de digitar parte de um nome de pacote — o terminal autocompleta. Ex: \`sudo apt install fire\` + Tab → mostra firefox e amigos.",
      },
      {
        type: "info",
        content: "Existe \`apt-get\` (versão antiga, ainda usada em scripts) e \`apt\` (versão amigável, recomendada para uso humano). Os dois funcionam.",
      },
    ],
  },
  {
    slug: "atualizar-sistema",
    section: "pacotes",
    title: "Atualizando o sistema",
    difficulty: "iniciante",
    subtitle: "Como manter Lubuntu seguro e em dia com poucos comandos.",
    intro: `Sistema desatualizado é casa com porta destrancada. As atualizações trazem correções de segurança que tampam buracos descobertos por pesquisadores no mundo inteiro. Felizmente, no Lubuntu atualizar é rápido e raramente quebra coisa — bem diferente do "atualizar e rezar" do Windows.

Há dois passos no processo: primeiro o sistema busca a lista de versões novas (\`update\`), depois ele aplica essas atualizações (\`upgrade\`). É como conferir o cardápio antes de pedir o prato. Você sempre faz update antes de upgrade, para não pedir versão que sumiu.

A frequência ideal é uma vez por semana. Algumas atualizações pedem reinício, principalmente as do kernel (núcleo do Linux). O sistema avisa quando isso acontece. Iniciantes às vezes ficam ansiosos com a tela cheia de texto correndo no upgrade — é normal, é o apt mostrando o que está fazendo. Deixe terminar tranquilo.`,
    codes: [
      {
        lang: "bash",
        code: `# Atualização básica em duas linhas
sudo apt update           # busca o cardápio novo
sudo apt upgrade -y       # aplica os updates disponíveis
# saída resumida no fim:
# X upgraded, 0 newly installed, 0 to remove`,
      },
      {
        lang: "bash",
        code: `# Versão mais completa: também remove pacotes que não são mais
# necessários e atualiza coisas que mudaram de dependências.
sudo apt update
sudo apt full-upgrade -y
sudo apt autoremove -y    # remove kernels e libs órfãs`,
      },
      {
        lang: "bash",
        code: `# Ver o que SERIA atualizado, sem aplicar nada
apt list --upgradable
# saída: firefox/noble-updates 123.0 amd64 [upgradable from: 122.0]
#        ...`,
      },
      {
        lang: "bash",
        code: `# Algumas atualizações pedem reboot (kernel, libc, systemd).
# O Lubuntu cria este arquivo quando isso acontece:
ls /var/run/reboot-required 2>/dev/null && echo "Reinicie o PC!"
# saída: /var/run/reboot-required
# Reinicie o PC!`,
      },
      {
        lang: "bash",
        code: `# Reiniciando o sistema pelo terminal:
sudo reboot
# saída: o sistema desliga e reinicia em segundos.
# Para apenas desligar:
sudo poweroff`,
      },
      {
        lang: "bash",
        code: `# Limpeza opcional após muitas atualizações:
sudo apt clean        # apaga .deb baixados (libera disco)
sudo apt autoclean    # apaga só os obsoletos
df -h /              # confira o espaço livre depois`,
      },
    ],
    points: [
      "Faça \`sudo apt update && sudo apt upgrade -y\` pelo menos 1x por semana.",
      "update busca a lista; upgrade aplica. Nunca pule a ordem.",
      "full-upgrade é mais agressivo: aceita instalar/remover pacotes para resolver dependências.",
      "autoremove tira kernels antigos e libs que ninguém mais usa.",
      "Atualização de kernel exige reboot — confira /var/run/reboot-required.",
      "Iniciante comum: rodar \`apt upgrade\` sem o \`apt update\` antes e ficar com versão velha.",
      "Iniciante comum: cancelar atualização no meio com Ctrl+C — isso quebra pacote.",
      "Em Lubuntu LTS você fica 5 anos recebendo atualizações de segurança gratuitas.",
    ],
    alerts: [
      {
        type: "success",
        content: "Crie um apelido no terminal para atualizar tudo de uma vez. Adicione em ~/.bashrc: \`alias att='sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y'\`",
      },
      {
        type: "warning",
        content: "Se aparecer aviso sobre repositórios assinados/expirados, NÃO ignore. Pode indicar PPA quebrado. Resolva antes de continuar atualizando.",
      },
      {
        type: "info",
        content: "Atualizações de versão (de 24.04 para 24.10, por exemplo) usam outro comando: \`do-release-upgrade\`. Não use upgrade para isso.",
      },
    ],
  },
  {
    slug: "instalar-remover",
    section: "pacotes",
    title: "Instalando e removendo programas",
    difficulty: "iniciante",
    subtitle: "Adicionar, tirar e fazer faxina de programas com segurança.",
    intro: `Cada programa instalado é um inquilino na sua casa. Uns ajudam todo dia, outros foram instalados em um teste e ficaram esquecidos comendo espaço. Aprender a instalar e remover com calma é o que diferencia quem mora bem em casa arrumada de quem vive em meio a caixas amontoadas.

A boa notícia: no Linux a instalação é uma linha de comando ou um clique no Discover. Não há "próximo, próximo, aceito o termo". O programa entra e sai limpo, sem deixar lixo no Registro (que aliás nem existe aqui). Por isso o Lubuntu se mantém leve por anos.

Neste capítulo você vai aprender três operações: instalar (\`install\`), remover mantendo configurações (\`remove\`) e remover apagando até as configurações (\`purge\`). E também a faxina semanal com \`autoremove\`, que tira pacotes que ficaram pendurados sem ninguém usar mais.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar UM pacote
sudo apt install gimp -y
# saída resumida:
# The following NEW packages will be installed:
#   gimp gimp-data ...
# After this operation, 200 MB of additional disk space will be used.`,
      },
      {
        lang: "bash",
        code: `# Instalar VÁRIOS pacotes de uma vez
sudo apt install neofetch htop tree curl -y
# Só listar separado por espaço.
# Útil para "kit inicial" depois de uma instalação nova.`,
      },
      {
        lang: "bash",
        code: `# Remover um programa (mantém arquivos de configuração)
sudo apt remove gimp -y
# saída: The following packages will be REMOVED: gimp
# Útil se você quer reinstalar depois e manter preferências.`,
      },
      {
        lang: "bash",
        code: `# Remover apagando TUDO, inclusive configs
sudo apt purge gimp -y
# saída: ... gimp* (purge) ...
# Use quando o programa deu problema e você quer começar do zero.`,
      },
      {
        lang: "bash",
        code: `# Faxina de pacotes que sobraram sem dono
sudo apt autoremove -y
# saída: The following packages will be REMOVED:
#   linux-image-6.5.0-old ...
# Tira kernels antigos e libs que viraram órfãs.`,
      },
      {
        lang: "bash",
        code: `# Antes de remover algo importante, descubra do que ele depende
apt-cache rdepends firefox | head -20
# saída: lista de pacotes que dependem do firefox.
# Se a lista for grande, pense duas vezes antes de remover.`,
      },
      {
        lang: "bash",
        code: `# Reinstalar um pacote bagunçado (sem perder configs)
sudo apt install --reinstall firefox -y
# saída: Reinstalling firefox (122.0) ...
# Útil quando o programa quebrou após uma atualização.`,
      },
    ],
    points: [
      "install instala; remove tira; purge tira até configurações.",
      "Pode listar vários pacotes separados por espaço em uma chamada só.",
      "autoremove é faxina semanal: tira lixo pendurado sem dono.",
      "--reinstall conserta programa quebrado sem perder seus dados.",
      "Antes de remover algo do sistema, veja \`rdepends\` para evitar quebrar dependências.",
      "Iniciante comum: usar \`remove\` quando queria \`purge\` e ficar com configs antigas atrapalhando.",
      "Iniciante comum: remover pacote do sistema sem entender — pode tirar o ambiente gráfico inteiro.",
      "Sempre leia o resumo do apt antes de confirmar — ele mostra o que será removido junto.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Cuidado ao remover pacotes com \"lubuntu-\", \"lxqt-\" ou \"xorg\" no nome. Você pode acabar sem interface gráfica e ficar só no terminal.",
      },
      {
        type: "tip",
        content: "Se o apt sugerir remover muitos pacotes que você não esperava, cancele com 'n' e investigue. Geralmente é sinal de que falta uma dependência intermediária.",
      },
      {
        type: "info",
        content: "Pacotes têm nomes em letras minúsculas e hífens (firefox-esr, libreoffice-writer). Não use espaços nem acentos.",
      },
    ],
  },
  {
    slug: "adicionar-ppa",
    section: "pacotes",
    title: "PPAs: repositórios extras",
    difficulty: "intermediario",
    subtitle: "Quando o programa que você quer não está no apt padrão.",
    intro: `Os repositórios oficiais do Ubuntu têm milhares de programas, mas nem tudo cabe lá. Versões muito novas, drivers específicos ou softwares de nicho às vezes só estão em PPAs (Personal Package Archives) — repositórios extras mantidos por desenvolvedores ou comunidades. É como uma feirinha de produtos especiais ao lado do supermercado oficial.

Adicionar um PPA é dizer ao apt: "agora também procure pacotes neste outro endereço". A partir daí, o programa do PPA fica visível e atualizável como qualquer outro. Por baixo, isso adiciona uma chave GPG (para conferir assinaturas) e uma linha em /etc/apt/sources.list.d/.

A precaução é grande: PPA é confiança em quem mantém. Não saia adicionando PPA aleatório da internet. Use só de fontes oficiais (do próprio projeto ou de equipes conhecidas como kisak para Mesa, ou git-core para Git). PPA confiável é o melhor dos dois mundos: software fresco com a comodidade do apt.`,
    codes: [
      {
        lang: "bash",
        code: `# Antes de adicionar PPA, instale a ferramenta que ajuda
sudo apt update
sudo apt install software-properties-common -y
# saída: ... software-properties-common is already the newest ...`,
      },
      {
        lang: "bash",
        code: `# Adicionando um PPA confiável (exemplo: Git oficial)
sudo add-apt-repository ppa:git-core/ppa -y
# saída: Repository: 'deb https://ppa.launchpadcontent.net/git-core/ppa/ubuntu/ noble main'
# Adding ppa: ... Done
# Atualiza a lista automaticamente no fim.`,
      },
      {
        lang: "bash",
        code: `# Agora o git aparece com versão mais nova
sudo apt install git -y
git --version
# saída: git version 2.45.0 (vs 2.43 do repo oficial)`,
      },
      {
        lang: "bash",
        code: `# Listar todos os PPAs adicionados
ls /etc/apt/sources.list.d/
# saída: git-core-ubuntu-ppa-noble.sources
#        ...`,
      },
      {
        lang: "bash",
        code: `# Removendo um PPA quando não quiser mais
sudo add-apt-repository --remove ppa:git-core/ppa -y
# Depois reinstale a versão original do repo oficial:
sudo apt update
sudo apt install --reinstall git -y`,
      },
      {
        lang: "bash",
        code: `# PPA quebrado/expirado costuma dar erro 404 no apt update.
# Localize o arquivo problemático:
grep -r "ppa.launchpad" /etc/apt/sources.list.d/
# Edite para comentar (#) a linha quebrada:
sudo nano /etc/apt/sources.list.d/nome-do-arquivo.sources`,
      },
    ],
    points: [
      "PPA = repositório extra mantido por terceiros, hospedado no Launchpad.",
      "Use \`add-apt-repository ppa:usuario/nome\` para adicionar.",
      "Após adicionar, sempre rode \`sudo apt update\` (o comando moderno já faz).",
      "Para remover use \`add-apt-repository --remove ppa:...\`.",
      "PPAs confiáveis incluem: git-core, kisak (Mesa), libreoffice, deadsnakes (Python).",
      "Iniciante comum: adicionar PPA aleatório que viu num tutorial antigo e abandonado.",
      "Iniciante comum: esquecer de remover PPA antes de fazer upgrade de versão do Ubuntu.",
      "Arquivos de configuração ficam em /etc/apt/sources.list.d/ — apague de lá em último caso.",
    ],
    alerts: [
      {
        type: "danger",
        content: "PPA não passa por revisão da equipe Ubuntu. Se você instalar um PPA malicioso, ele pode rodar código com root no seu sistema. Adicione só de fontes oficiais.",
      },
      {
        type: "warning",
        content: "Antes de fazer \`do-release-upgrade\` (mudar versão do Ubuntu), o sistema desativa todos os PPAs. Reative manualmente um a um depois, conferindo se já têm pacotes para a nova versão.",
      },
      {
        type: "tip",
        content: "Para muitos programas modernos (VS Code, Brave), prefira o pacote Snap ou Flatpak — mais seguros que PPA por rodarem em sandbox.",
      },
    ],
  },
  {
    slug: "snap-pacotes",
    section: "pacotes",
    title: "Snap: pacotes universais com sandbox",
    difficulty: "intermediario",
    subtitle: "O formato \"tudo junto\" criado pela Canonical.",
    intro: `O Snap é um formato de pacote criado pela Canonical (a empresa por trás do Ubuntu). A ideia é levar o programa, suas bibliotecas e dependências tudo dentro de um arquivo só. Você instala o Snap e ele roda igual em qualquer distribuição Linux, sem depender de versão específica do sistema. Pense em uma marmita selada: tudo que o programa precisa vai junto.

Outra característica importante é o sandbox: o Snap roda meio "preso", com permissões limitadas, então um programa Snap não consegue mexer livremente em arquivos do sistema. Isso aumenta a segurança, mas também causa inconvenientes (como Snap não enxergando seu \`~/Downloads\` automaticamente em alguns casos).

No Lubuntu, o snapd já vem instalado por padrão a partir de versões recentes. Você usa o comando \`snap\` no terminal ou abre o Discover, que também lista pacotes Snap. A grande vantagem é receber a versão mais nova de programas como Chromium, Spotify, VS Code direto do desenvolvedor, sem depender da equipe Ubuntu empacotar.`,
    codes: [
      {
        lang: "bash",
        code: `# Verifique se snapd está instalado
snap version
# saída: snap    2.63
# snapd   2.63
# series  16
# Se não tiver, instale:
sudo apt install snapd -y`,
      },
      {
        lang: "bash",
        code: `# Procurar um pacote no Snap Store
snap find spotify
# saída: Name     Version   Publisher   Notes  Summary
# spotify  1.x       spotify✓    -      Music for everyone`,
      },
      {
        lang: "bash",
        code: `# Instalar um Snap
sudo snap install spotify
# saída: spotify 1.x from Spotify✓ installed
# O ✓ verde significa publicador verificado.`,
      },
      {
        lang: "bash",
        code: `# Listar todos os Snaps instalados
snap list
# saída: Name      Version  Rev   Tracking  Publisher
# core22    ...      ...   latest    canonical✓
# spotify   1.x      ...   latest    spotify✓`,
      },
      {
        lang: "bash",
        code: `# Atualizações de Snap são automáticas, mas dá pra forçar
sudo snap refresh
# saída: All snaps up to date.
# Para ver quando vai rodar a próxima checagem:
snap refresh --time`,
      },
      {
        lang: "bash",
        code: `# Remover um Snap
sudo snap remove spotify
# saída: spotify removed
# Apaga inclusive os dados do programa.`,
      },
      {
        lang: "bash",
        code: `# Snaps usam mais espaço (carregam dependências dentro).
# Veja quanto cada um ocupa:
du -sh /var/lib/snapd/snaps/*.snap | sort -h
# saída: 50M ... core22.snap
#        180M ... spotify_xxx.snap`,
      },
    ],
    points: [
      "Snap = pacote universal com tudo dentro, criado pela Canonical.",
      "Roda em sandbox (segurança extra, às vezes inconveniente).",
      "Comandos principais: \`snap find\`, \`snap install\`, \`snap list\`, \`snap remove\`.",
      "Atualizações são automáticas — você não precisa fazer nada.",
      "Publicador verificado mostra um ✓ verde — prefira esses.",
      "Iniciante comum: estranhar que Snap demora a abrir na primeira vez (descompacta o sandbox).",
      "Iniciante comum: reclamar que Snap não vê arquivos em pastas estranhas — é segurança intencional.",
      "Snaps ocupam mais disco que pacotes apt — são autocontidos.",
    ],
    alerts: [
      {
        type: "info",
        content: "Algumas distribuições (Linux Mint, por exemplo) não gostam de Snap. No Lubuntu/Ubuntu o suporte é nativo e oficial.",
      },
      {
        type: "warning",
        content: "Snaps costumam abrir mais devagar na primeira execução por causa do sandbox. Não é seu PC — é o formato. Da segunda vez fica rápido.",
      },
      {
        type: "tip",
        content: "Programas oficiais que ficam ótimos como Snap: spotify, chromium, vlc, code (VS Code), discord, slack. Procure pelo ✓ do publicador verificado.",
      },
    ],
  },
  {
    slug: "flatpak-pacotes",
    section: "pacotes",
    title: "Flatpak: o concorrente do Snap",
    difficulty: "intermediario",
    subtitle: "Outro formato universal, com sandbox e Flathub gigantesco.",
    intro: `Se o Snap é o formato universal da Canonical, o Flatpak é o formato universal da comunidade aberta (apoiado pela Red Hat, GNOME e várias distribuições). Faz a mesma coisa: empacota o programa com suas dependências, roda em sandbox, instala em qualquer Linux. A diferença mora no detalhe: Flatpak usa "runtimes" compartilhados (várias apps Flatpak compartilham as mesmas bibliotecas grandes), o que economiza disco em muitos casos.

A loja oficial do Flatpak é o Flathub (flathub.org), com milhares de programas — muitos com versões mais novas que no apt. É lá que vivem as últimas builds de programas como Inkscape, OBS Studio, Bitwarden e ferramentas para desenvolvedores.

No Lubuntu, o Flatpak não vem instalado por padrão (a Canonical prefere Snap). Mas é trivial adicionar: instala o pacote, adiciona o Flathub como fonte e pronto. Muita gente roda Snap E Flatpak na mesma máquina, escolhendo cada um conforme o programa. Não é guerra: é variedade.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar o Flatpak no Lubuntu
sudo apt update
sudo apt install flatpak -y
# saída: ... Setting up flatpak ...
flatpak --version
# saída: Flatpak 1.14.x`,
      },
      {
        lang: "bash",
        code: `# Adicionar o Flathub (a loja principal)
flatpak remote-add --if-not-exists flathub \\
  https://flathub.org/repo/flathub.flatpakrepo
# saída: nada se deu certo.
# Confira:
flatpak remotes
# saída: Name    Options
# flathub user`,
      },
      {
        lang: "bash",
        code: `# Procurar e instalar um programa
flatpak search bitwarden
# saída: Name        Application ID
# Bitwarden   com.bitwarden.desktop  ...

flatpak install flathub com.bitwarden.desktop -y
# saída: Installing... Installation complete.`,
      },
      {
        lang: "bash",
        code: `# Rodar o programa Flatpak instalado
flatpak run com.bitwarden.desktop
# Ou simplesmente clique no ícone no menu LXQt — ele aparece lá também.`,
      },
      {
        lang: "bash",
        code: `# Listar Flatpaks instalados
flatpak list
# saída: Name           Application ID         Version
# Bitwarden      com.bitwarden.desktop  ...
# Atualizar todos:
flatpak update -y`,
      },
      {
        lang: "bash",
        code: `# Remover um Flatpak
flatpak uninstall com.bitwarden.desktop -y
# Limpar runtimes não usados (libera disco):
flatpak uninstall --unused -y`,
      },
      {
        lang: "bash",
        code: `# Reinicie a sessão (logout/login) depois de instalar
# o Flatpak pela primeira vez, para que os ícones
# apareçam no menu LXQt.
loginctl terminate-user $USER
# Ou simplesmente:
# Menu → Sair → Logout`,
      },
    ],
    points: [
      "Flatpak = formato universal de pacote, alternativa ao Snap.",
      "Usa runtimes compartilhados — economiza disco quando você tem várias apps.",
      "Loja principal: flathub.org — gigantesca, com versões fresquinhas.",
      "Não vem por padrão no Lubuntu, mas instala fácil com \`apt install flatpak\`.",
      "Comandos centrais: \`flatpak install\`, \`flatpak update\`, \`flatpak uninstall\`.",
      "Iniciante comum: instalar o Flatpak e não adicionar o Flathub — fica sem onde procurar pacotes.",
      "Iniciante comum: não fazer logout depois de instalar e estranhar que o ícone não aparece.",
      "Snap e Flatpak convivem bem: use o que for melhor para cada programa.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Para integrar o Flathub ao Discover (loja gráfica), instale também \`plasma-discover-backend-flatpak\`. Aí você procura tudo em um lugar só.",
      },
      {
        type: "info",
        content: "Programas que ficam ótimos como Flatpak: OBS Studio, Inkscape, Krita, Bitwarden, GIMP versão nova, Telegram Desktop.",
      },
      {
        type: "warning",
        content: "Flatpak também roda em sandbox. Se um programa não consegue abrir um arquivo, talvez falte permissão. Use \`flatpak override\` ou o aplicativo Flatseal para ajustar.",
      },
    ],
  },
  {
    slug: "instalar-deb",
    section: "pacotes",
    title: "Instalando pacotes .deb manualmente",
    difficulty: "intermediario",
    subtitle: "Quando o programa só vem como arquivo baixado do site.",
    intro: `Alguns programas (Google Chrome, Microsoft Teams, certos drivers de impressora, AnyDesk) não estão no apt nem em Snap/Flatpak. O fornecedor oferece um arquivo \`.deb\` para download direto no site. O \`.deb\` é o formato de pacote nativo do Debian/Ubuntu — o mesmo que o apt baixa por dentro, só que aqui você baixa manualmente.

Pense num \`.deb\` como um instalador \`.exe\` do Windows, mas para Linux. Tem dentro: os arquivos do programa, scripts de instalação, lista de dependências e metadados. Você abre com clique duplo (instala graficamente) ou pelo terminal.

A regra de ouro é: \`.deb\` precisa vir de fonte confiável. Site oficial do programa, sempre. Nada de baixar de fórum ou link suspeito. E mesmo de fonte oficial, é bom conferir a assinatura digital quando possível. Esse capítulo te ensina a baixar, instalar, conferir dependências e remover pacotes \`.deb\` com tranquilidade.`,
    codes: [
      {
        lang: "bash",
        code: `# Exemplo: baixando o Google Chrome (oficial)
cd ~/Downloads
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# saída: ... google-chrome-stable_current_amd64.deb saved [120MB/120MB]
ls *.deb
# saída: google-chrome-stable_current_amd64.deb`,
      },
      {
        lang: "bash",
        code: `# A forma RECOMENDADA de instalar .deb é com apt:
sudo apt install ./google-chrome-stable_current_amd64.deb -y
# A vantagem: o apt resolve dependências automaticamente.
# Note o ./ na frente — diz ao apt que é arquivo local, não nome de pacote.`,
      },
      {
        lang: "bash",
        code: `# Forma antiga, com dpkg (não resolve dependências sozinha)
sudo dpkg -i google-chrome-stable_current_amd64.deb
# Se faltar dependência, dará erro:
# dpkg: dependency problems prevent configuration ...
# Solução: rode em seguida
sudo apt install -f -y     # -f = fix broken`,
      },
      {
        lang: "bash",
        code: `# Inspecionar um .deb antes de instalar
dpkg -I google-chrome-stable_current_amd64.deb
# saída:
# Package: google-chrome-stable
# Version: 122.x
# Architecture: amd64
# Depends: ca-certificates, fonts-liberation, ...`,
      },
      {
        lang: "bash",
        code: `# Listar arquivos que SERÃO instalados (auditar antes)
dpkg -c google-chrome-stable_current_amd64.deb | head
# saída: drwxr-xr-x ... ./opt/google/chrome/
# -rwxr-xr-x ... ./opt/google/chrome/chrome
# Útil para ver onde o programa vai cair no sistema.`,
      },
      {
        lang: "bash",
        code: `# Remover o pacote depois (mesmo nome usado pelo apt)
sudo apt remove google-chrome-stable -y
# Para remover inclusive configurações:
sudo apt purge google-chrome-stable -y`,
      },
      {
        lang: "bash",
        code: `# Conferir um .deb com sha256 (quando o site fornece)
sha256sum google-chrome-stable_current_amd64.deb
# saída: a1b2c3...  google-chrome-stable_current_amd64.deb
# Compare com o hash publicado no site oficial. Se diferente, NÃO instale.`,
      },
    ],
    points: [
      ".deb é o formato nativo de pacote no Debian/Ubuntu/Lubuntu.",
      "Sempre prefira \`sudo apt install ./arquivo.deb\` — resolve dependências.",
      "\`dpkg -i\` instala mas não resolve dependências sozinho — use \`apt install -f\` depois.",
      "Inspecione antes com \`dpkg -I\` (informações) e \`dpkg -c\` (lista de arquivos).",
      "Confira sha256 quando o site oficial fornecer hash de verificação.",
      "Iniciante comum: baixar .deb de site não oficial — risco real de malware.",
      "Iniciante comum: usar \`dpkg -i\` puro, ver erro de dependência e desistir — basta rodar \`apt install -f\`.",
      "Para remover, use o nome do pacote (não do arquivo): \`sudo apt remove google-chrome-stable\`.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca instale .deb de origem desconhecida. Um .deb malicioso roda scripts com root durante a instalação e pode comprometer o sistema todo.",
      },
      {
        type: "tip",
        content: "Quando o programa oferece tanto .deb quanto Snap/Flatpak, prefira Snap/Flatpak por causa do sandbox. Use .deb só se o fornecedor recomendar.",
      },
      {
        type: "info",
        content: "Programas instalados por .deb costumam adicionar seu próprio repositório em /etc/apt/sources.list.d/ para enviar atualizações automáticas pelo apt. É normal e desejável.",
      },
    ],
  },
];
