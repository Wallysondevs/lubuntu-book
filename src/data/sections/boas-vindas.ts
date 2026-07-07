import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "bem-vindo",
    section: "boas-vindas",
    title: "Bem-vindo ao mundo Lubuntu",
    difficulty: "iniciante",
    subtitle: "Uma carta de boas-vindas para quem nunca tocou em Linux.",
    intro: `Se você está lendo isto, parabéns: você decidiu dar uma chance para um sistema operacional diferente. Talvez seu computador esteja velho, talvez você esteja cansado de pop-ups, talvez só queira aprender algo novo. Qualquer que seja o motivo, este livro foi escrito pensando em você, que nunca abriu um terminal Linux na vida e olha para a tela preta com aquela sensação de "será que vou conseguir?". Vai conseguir, sim — e mais rápido do que imagina.

Pense neste livro como um amigo professor que se senta do seu lado. Ele não vai te jogar comandos sem explicar, não vai supor que você sabe o que é "kernel" ou "shell". A cada conceito novo, vamos comparar com algo do dia a dia: a cozinha, o prédio onde você mora, uma biblioteca pública, um mordomo discreto. Linux fica simples quando para de ser tratado como mágica de hacker e vira só uma ferramenta bem feita.

O Lubuntu é o nosso ponto de partida porque é leve, organizado e perdoa máquinas antigas. Roda bem em um notebook de 2010 que o Windows abandonou. Ele usa uma área de trabalho chamada LXQt, parecida com o que você já conhece: barra embaixo, menu Iniciar no canto, lixeira na mesa. Nada de revolução visual; o objetivo aqui é ser produtivo desde o primeiro clique.

Antes de pular para os capítulos técnicos, este primeiro capítulo só quer te tranquilizar. Não há comando perigoso aqui. Você vai ler, respirar, e seguir em frente sabendo onde vai pisar. No fim, deixei algumas dicas de postura que valem ouro: ir devagar, anotar o que aprende, não ter medo de errar. Bem-vindo. Pode entrar.`,
    codes: [
      {
        lang: "bash",
        code: `# Você não precisa rodar nada agora. Mas se já tem o Lubuntu rodando,
# este é o comando mais inofensivo do mundo: ele só mostra o nome do sistema.
uname -a
# saída exemplo:
# Linux meu-pc 7.0.0-14-generic #14-Ubuntu SMP x86_64 GNU/Linux`,
      },
      {
        lang: "bash",
        code: `# Outro comando "saudação": mostra qual versão do Lubuntu está instalada.
lsb_release -a
# saída exemplo:
# Distributor ID: Ubuntu
# Description:    Ubuntu 26.04.1 LTS
# Release:        26.04
# Codename:       resolute`,
      },
      {
        lang: "bash",
        code: `# Se quiser saber quanto tempo o computador está ligado:
uptime
# saída exemplo:
#  14:32:01 up 2 days,  3:14,  1 user,  load average: 0.12, 0.18, 0.20

# "load average" é o quanto o processador está trabalhando.
# Valores baixos (perto de 0) significam que a máquina está tranquila.`,
      },
      {
        lang: "bash",
        code: `# E para ver quem você é, do ponto de vista do sistema:
whoami
# saída: o nome do seu usuário, tipo: ana

# E em qual pasta você está agora?
pwd
# saída: /home/ana
# /home/ana é a sua "casa" no Lubuntu, equivalente a "C:\\Users\\Ana" no Windows.`,
      },
      {
        lang: "bash",
        code: `# Postura recomendada para estudar este livro:
# 1) Tenha um caderno (físico ou digital) só para anotações.
# 2) Toda vez que ler um comando novo, escreva o que ele faz com suas palavras.
# 3) Repita o comando no terminal — ler é diferente de fazer.
# 4) Se algo der errado, leia a mensagem de erro INTEIRA antes de pesquisar.
# 5) Não decore: entenda. Você só precisa lembrar onde procurar.`,
      },
    ],
    points: [
      "Linux não é mágica: é um sistema operacional tão comum quanto Windows ou macOS.",
      "Lubuntu foi pensado para ser leve e familiar — você não precisa virar geek para usar.",
      "O terminal será seu amigo, não seu inimigo; comece com comandos inofensivos como uname e pwd.",
      "Tenha paciência: aprender um sistema novo leva semanas, não horas. Está tudo bem ir devagar.",
      "Anotar o que você aprende multiplica a retenção. Mantenha um caderninho de comandos.",
      "Iniciante comum: achar que precisa decorar tudo. Você só precisa entender o conceito e saber onde consultar.",
      "Iniciante comum: ter medo de quebrar o sistema só por explorar. Os comandos deste capítulo não mudam nada.",
      "Errar é parte do processo. A mensagem de erro do Linux quase sempre diz o que fazer, em inglês simples.",
    ],
    alerts: [
      {
        type: "info",
        content: "Este livro assume Lubuntu 26.04 LTS (Resolute Raccoon) ou versão mais recente. Versões muito antigas podem ter caminhos e nomes ligeiramente diferentes.",
      },
      {
        type: "tip",
        content: "Se preferir aprender pela prática, instale o Lubuntu em uma máquina virtual (VirtualBox) antes de mexer no PC real. É um espaço seguro para experimentar.",
      },
      {
        type: "success",
        content: "Você só precisa de uma hora por dia, três vezes por semana, para terminar este livro confortavelmente em dois meses. Não há corrida.",
      },
    ],
  },
  {
    slug: "o-que-e-lubuntu",
    section: "boas-vindas",
    title: "O que é o Lubuntu, afinal?",
    difficulty: "iniciante",
    subtitle: "Distribuição, sabor oficial e o que está por trás do nome.",
    intro: `Imagine que o Linux é um motor de carro: poderoso, confiável, mas sozinho não te leva a lugar nenhum. Para virar um carro de verdade, ele precisa de carroceria, painel, bancos e volante. Esses "carros prontos" feitos em volta do motor Linux se chamam distribuições, ou "distros". O Ubuntu é uma das distros mais conhecidas do mundo. O Lubuntu é uma variação oficial do Ubuntu — um "sabor", como dizem por lá — feito para ser leve.

O nome Lubuntu vem da junção de "LXQt" (a interface gráfica) com "Ubuntu" (a base do sistema). Por baixo do capô, é Ubuntu igualzinho: mesmos repositórios de software, mesmos comandos, mesma comunidade gigante de suporte. A diferença está em cima: em vez do GNOME (a interface padrão do Ubuntu, que pede mais memória), o Lubuntu usa o LXQt, uma interface enxuta que cabe em qualquer canto.

Por ser oficial, o Lubuntu recebe atenção da Canonical, a empresa por trás do Ubuntu. Tem ciclo de lançamento previsível (versões novas a cada seis meses, e uma LTS a cada dois anos com cinco anos de suporte) e equipe própria de desenvolvedores voluntários. Não é um projeto de fim de semana: existe desde 2009 e tem milhões de usuários.

Saber o que é uma distro te ajuda a navegar no mundo Linux: quando alguém disser "uso Mint", "uso Fedora" ou "uso Arch", você vai entender que são todos primos do mesmo sistema, diferindo só no jeito de embalar o motor. E quando precisar pesquisar algum problema, lembre-se: tutoriais de Ubuntu funcionam quase 100% no Lubuntu também.`,
    codes: [
      {
        lang: "bash",
        code: `# Confirma que o Lubuntu é Ubuntu por dentro:
cat /etc/os-release
# saída resumida:
# NAME="Ubuntu"
# VERSION="26.04.1 LTS (Resolute Raccoon)"
# ID=ubuntu
# PRETTY_NAME="Ubuntu 26.04.1 LTS"
# Repare: o ID é "ubuntu", não "lubuntu". O sabor está em cima, não na base.`,
      },
      {
        lang: "bash",
        code: `# Mostra qual sessão gráfica está em uso (deve aparecer LXQt):
echo "$XDG_CURRENT_DESKTOP"
# saída: LXQt

# E o servidor gráfico:
echo "$XDG_SESSION_TYPE"
# saída esperada no Lubuntu padrão: x11`,
      },
      {
        lang: "bash",
        code: `# Lista de todos os "sabores oficiais" do Ubuntu (só para curiosidade):
# - Ubuntu        → GNOME, padrão, mais pesado
# - Kubuntu       → KDE Plasma, visual sofisticado
# - Xubuntu       → XFCE, leve e clássico
# - Lubuntu       → LXQt, o mais leve
# - Ubuntu MATE   → MATE, fork do GNOME 2
# - Ubuntu Budgie → Budgie, moderno
# - Ubuntu Studio → focado em produção multimídia
# - Ubuntu Kylin  → focado em chinês`,
      },
      {
        lang: "bash",
        code: `# Quanto de RAM o LXQt está usando agora? (resposta vai te surpreender)
free -h
# saída exemplo:
#                total        used        free      shared  buff/cache   available
# Mem:           3.7Gi       420Mi       2.1Gi        18Mi       1.2Gi       3.0Gi
# Swap:          2.0Gi          0B       2.0Gi
# 420Mi de RAM em uso é típico do Lubuntu logo após ligar.`,
      },
      {
        lang: "bash",
        code: `# Para comparar com Ubuntu padrão (GNOME), o uso de RAM costuma passar de 1.2 GiB.
# Por isso o Lubuntu brilha em máquinas com pouca memória.

# Versão do kernel Linux que está rodando:
uname -r
# saída exemplo: 7.0.0-14-generic
# O kernel é o "núcleo" do sistema — a peça que conversa com o hardware.`,
      },
    ],
    points: [
      "Distribuição (distro) é Linux empacotado com programas e visual prontos para usar.",
      "Lubuntu é um sabor oficial do Ubuntu, com a mesma base e suporte da Canonical.",
      "O nome combina LXQt (interface) + Ubuntu (base): leveza no visual, robustez na fundação.",
      "Tutoriais de Ubuntu funcionam quase sempre no Lubuntu — a base é a mesma.",
      "Versões LTS (Long Term Support) saem de 2 em 2 anos e têm 5 anos de suporte. Prefira-as.",
      "Iniciante comum: achar que Lubuntu é um projeto pequeno e abandonado. Tem mais de 15 anos e equipe ativa.",
      "Iniciante comum: misturar Lubuntu com Linux Mint LXDE ou outros — são distribuições diferentes.",
      "Em pouco mais de 400 MiB de RAM o Lubuntu já está usável; o Ubuntu padrão pede o triplo.",
    ],
    alerts: [
      {
        type: "info",
        content: "A Canonical é a empresa britânica que mantém o Ubuntu desde 2004. Não tem fins lucrativos diretos sobre os usuários domésticos: quem paga é o mercado corporativo de servidores.",
      },
      {
        type: "tip",
        content: "Sempre que possível, baixe a versão LTS mais recente. Versões intermediárias (não-LTS) duram apenas 9 meses e exigem upgrade frequente.",
      },
      {
        type: "warning",
        content: "Não confunda Lubuntu com Ubuntu Lite ou Ubuntu Light. Esses nomes não são oficiais e geralmente são distribuições antigas ou de terceiros.",
      },
    ],
  },
  {
    slug: "lubuntu-vs-ubuntu",
    section: "boas-vindas",
    title: "Lubuntu vs Ubuntu: qual escolher?",
    difficulty: "iniciante",
    subtitle: "Comparando o sabor leve com o sabor padrão.",
    intro: `Imagine entrar em um restaurante que tem dois pratos do dia: um é o tradicional completo, com várias guarnições, sobremesa e bebida. O outro é o executivo enxuto: o essencial bem feito, em prato simples. Os dois saciam a fome. A diferença é o tamanho, o tempo de espera e o preço. Ubuntu e Lubuntu são essas duas opções no menu Linux: o mesmo motor por baixo, jeitos diferentes de servir.

O Ubuntu padrão usa o GNOME, uma interface bonita e moderna, cheia de animações e atalhos. Ela é ótima em máquinas atuais (16 GiB de RAM, processador i5/Ryzen 5 ou superior). Em hardware mais antigo, vira mel grosso: tudo reage com atraso, o cooler liga sem parar e a bateria do notebook some em duas horas. O Lubuntu, com LXQt, faz a mesma coisa em uma fração dos recursos.

A escolha vai depender de três coisas: seu hardware, seu uso e seu gosto. Hardware fraco ou notebook com bateria curta? Lubuntu sem dúvida. Computador novo e quer visual moderno e integrações com nuvem? Ubuntu. Para quem só quer usar o navegador, escrever, ouvir música e ver vídeo, qualquer um dos dois entrega — e o Lubuntu sobra recurso para abrir mais abas.

A boa notícia é que mudar de ideia depois é fácil. Você pode instalar a interface do Ubuntu dentro do Lubuntu (ou vice-versa) com um único comando. Não é decisão de vida. Vamos comparar lado a lado para você escolher consciente.`,
    codes: [
      {
        lang: "text",
        code: `# Comparação rápida (números aproximados, hardware igual):

#                    Ubuntu (GNOME)      Lubuntu (LXQt)
# RAM em repouso:    1.2 - 1.8 GiB       380 - 500 MiB
# Tempo de boot:     30 - 45 segundos    18 - 25 segundos
# Bateria notebook:  ~ 4h                ~ 6h
# Tamanho da ISO:    ~ 5.7 GiB           ~ 3.0 GiB
# Animações:         abundantes          mínimas
# Aparência padrão:  moderna, "tablet"   clássica, "Windows XP-ish"`,
      },
      {
        lang: "bash",
        code: `# Já no Lubuntu, dá para ver o uso de memória de um jeito amigável:
free -h --total
# saída exemplo:
#               total        used        free
# Mem:          3.7Gi       412Mi       2.1Gi
# Swap:         2.0Gi         0B        2.0Gi
# Total:        5.7Gi       412Mi       4.1Gi`,
      },
      {
        lang: "bash",
        code: `# Quer experimentar o GNOME sem reinstalar? Existe pacote para isso:
sudo apt update
sudo apt install ubuntu-desktop -y
# Depois de reiniciar, na tela de login aparece um botão de engrenagem
# onde você escolhe entre LXQt e GNOME para a sessão.

# CUIDADO: instala MUITOS pacotes e ocupa cerca de 2 GiB de disco.`,
      },
      {
        lang: "bash",
        code: `# Para voltar atrás (remover o GNOME e ficar só com LXQt):
sudo apt remove ubuntu-desktop ubuntu-desktop-minimal -y
sudo apt autoremove -y
# autoremove tira pacotes que ficaram órfãos depois da remoção.`,
      },
      {
        lang: "bash",
        code: `# Cenário comum: notebook antigo com 4 GiB de RAM e HD (não SSD).
# Ubuntu padrão fica engasgado, o Lubuntu voa.

# Para confirmar tipo de disco:
lsblk -d -o name,rota
# rota = 1 → HD (mais lento)
# rota = 0 → SSD ou NVMe (rápido)`,
      },
      {
        lang: "text",
        code: `# Regra de bolso para escolher:
# - Menos de 4 GiB de RAM        → Lubuntu sempre
# - 4 a 8 GiB e HD comum         → Lubuntu fortemente recomendado
# - 8 GiB com SSD                → qualquer um
# - 16 GiB ou mais com SSD/NVMe  → gosto pessoal
# - Notebook e bateria importa   → Lubuntu (consome menos energia)`,
      },
    ],
    points: [
      "Mesmo núcleo (kernel) e mesmos repositórios; só muda a interface gráfica em cima.",
      "Lubuntu consome de 3 a 4 vezes menos memória em repouso que o Ubuntu padrão.",
      "GNOME (Ubuntu) é moderno e cheio de animações; LXQt (Lubuntu) é clássico e enxuto.",
      "Em notebook, o Lubuntu costuma render 1-2 horas extras de bateria.",
      "Você pode ter as duas interfaces instaladas e escolher na tela de login.",
      "Iniciante comum: instalar Ubuntu pesado em PC velho e culpar o Linux por estar lento.",
      "Iniciante comum: desistir do Lubuntu por achar o visual ultrapassado, sem saber que dá para personalizar.",
      "Para servidor doméstico ou kiosk, o Lubuntu é melhor: deixa recursos livres para a tarefa-fim.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Se você só vai usar o computador para internet, escritório e mídia, o Lubuntu entrega tudo sem você nem perceber a diferença visual depois de uma semana.",
      },
      {
        type: "info",
        content: "Tanto Ubuntu quanto Lubuntu seguem o mesmo calendário de lançamento (.04 e .10 a cada ano, LTS no .04 a cada dois anos).",
      },
      {
        type: "warning",
        content: "Instalar mais de uma interface gráfica funciona, mas pode poluir o menu de aplicações com itens duplicados (dois gerenciadores de arquivo, dois editores de texto, etc.).",
      },
    ],
  },
  {
    slug: "lxqt-vs-lxde",
    section: "boas-vindas",
    title: "LXQt vs LXDE: a evolução do leve",
    difficulty: "iniciante",
    subtitle: "Por que o Lubuntu trocou de interface em 2018 e o que mudou.",
    intro: `Toda família tem aquele primo mais velho que abriu caminho. No mundo Lubuntu, esse primo se chama LXDE (Lightweight X11 Desktop Environment). Foi a interface original do Lubuntu de 2009 a 2018. Era escrito em uma biblioteca chamada GTK 2, considerada antiga e em vias de aposentadoria. Quando a comunidade GTK começou a empurrar a versão 3 (mais pesada e diferente), o LXDE ficou em uma encruzilhada.

A solução veio em forma de fusão: o LXDE se juntou a outro projeto chamado Razor-qt (que usava Qt em vez de GTK) e nasceu o LXQt. O nome diz tudo: Lightweight X11 Qt Desktop Environment. A partir do Lubuntu 18.10, o sistema oficial passou a usar LXQt, e o LXDE foi descontinuado nessa distro. Pense na transição como trocar de carro: motor parecido, carroceria nova, painel mais moderno, mas você ainda chega ao mesmo destino.

Para quem nunca usou nenhum dos dois, a diferença prática é pequena: ambos têm barra embaixo, menu Iniciar no canto, organização tradicional. O LXQt é só um pouco mais bonito e moderno, com mais opções de configuração visuais (sem precisar editar arquivo de texto). Em consumo de RAM, são quase iguais — diferença de uns 30-50 MiB para mais no LXQt, nada que comprometa.

Saber dessa história te ajuda a entender tutoriais antigos. Se um post de 2015 fala em "lxpanel" ou "lxsession", ele é da era LXDE. Os equivalentes hoje são "lxqt-panel" e "lxqt-session". Os conceitos são iguais, só os nomes mudaram. Vamos ver como reconhecer e onde clicar para configurar cada parte.`,
    codes: [
      {
        lang: "bash",
        code: `# Confirma que está rodando LXQt (e não LXDE):
echo "$XDG_CURRENT_DESKTOP"
# saída: LXQt

# Lista os processos da sessão atual (filtrando os relevantes):
ps -e | grep -E 'lxqt|openbox'
# saída exemplo:
#   1234 ?  00:00:00 lxqt-session
#   1240 ?  00:00:00 openbox
#   1250 ?  00:00:00 lxqt-panel`,
      },
      {
        lang: "text",
        code: `# Componentes do LXQt e seus equivalentes antigos no LXDE:

# LXDE (antigo)         →  LXQt (atual)
# lxpanel               →  lxqt-panel        (a barra de tarefas)
# lxsession             →  lxqt-session      (o gerenciador de sessão)
# pcmanfm               →  pcmanfm-qt        (o gerenciador de arquivos)
# lxappearance          →  lxqt-config-appearance (temas)
# lxrandr               →  lxqt-config-monitor    (monitores)
# lxterminal            →  qterminal         (o terminal padrão)`,
      },
      {
        lang: "bash",
        code: `# Versão do LXQt instalada:
lxqt-about
# Abre uma janelinha com a versão (ex: LXQt 2.2.0).
# Se quiser pelo terminal:
dpkg -l lxqt-session | grep ^ii
# saída exemplo:
# ii  lxqt-session  2.2.0-1ubuntu1  amd64  LXQt Session Manager`,
      },
      {
        lang: "bash",
        code: `# Por curiosidade, dá para instalar o LXDE ao lado do LXQt em um Lubuntu:
sudo apt install lxde-core
# Na tela de login, escolha "LXDE" para experimentar a interface antiga.
# Mas atenção: o LXDE não recebe mais atualizações importantes.`,
      },
      {
        lang: "bash",
        code: `# A maior parte das configurações do LXQt fica em ~/.config/lxqt/
ls ~/.config/lxqt/
# saída exemplo:
# lxqt.conf  panel.conf  session.conf  globalkeyshortcuts.conf

# Esses são arquivos de texto (formato INI). Editar à mão é possível,
# mas o painel de configurações faz tudo via cliques.`,
      },
    ],
    points: [
      "LXDE foi a interface original do Lubuntu de 2009 a 2018, escrita em GTK 2.",
      "LXQt nasceu da fusão LXDE + Razor-qt e usa a biblioteca Qt (a mesma do KDE).",
      "Funcionalmente são parecidíssimos — o LXQt é um pouco mais bonito e configurável.",
      "Tutoriais antigos mencionam lxpanel/lxsession; hoje são lxqt-panel/lxqt-session.",
      "O Openbox, gerenciador de janelas, foi mantido nos dois — ele é quem desenha as bordas das janelas.",
      "Iniciante comum: tentar configurar com tutorial de LXDE e estranhar não achar os menus. Procure por LXQt.",
      "Iniciante comum: instalar lxde-core no Lubuntu sem necessidade. Hoje em dia, fique no LXQt.",
      "Os arquivos de configuração ficam em ~/.config/lxqt/ — apagar essa pasta restaura o padrão.",
    ],
    alerts: [
      {
        type: "info",
        content: "Qt e GTK são duas bibliotecas concorrentes para fazer interfaces gráficas no Linux. Qt é usada pelo KDE; GTK pelo GNOME. LXQt segue o caminho Qt, mais moderno e leve.",
      },
      {
        type: "tip",
        content: "Se você curte personalizar tudo, o LXQt brilha: quase nenhuma decisão é fixa, e o painel de configurações é claro. Reserve uma tarde para explorar.",
      },
      {
        type: "warning",
        content: "Não instale o LXQt em uma distro diferente esperando ficar igual ao Lubuntu. A integração com a base do Ubuntu (atualizações, drivers) é o que faz o sabor funcionar bem.",
      },
    ],
  },
  {
    slug: "hardware-recomendado",
    section: "boas-vindas",
    title: "Hardware recomendado",
    difficulty: "iniciante",
    subtitle: "O que o Lubuntu pede para rodar bem (e o que aguenta no limite).",
    intro: `Pense no Lubuntu como um inquilino educado: ele se acomoda no quarto pequeno se for preciso, mas se você der um quarto maior, vai usar o espaço com inteligência. Este capítulo é sobre conhecer o tamanho do quarto que você tem em casa — ou seja, as peças do seu computador — e ajustar a expectativa.

Os requisitos oficiais do Lubuntu falam em mínimos teóricos: 1 GiB de RAM e processador de 1 GHz. Na prática, com 1 GiB você abre o sistema, mas mal consegue navegar com 3 abas. O ponto doce começa em 2 GiB de RAM e fica confortável a partir de 4 GiB. Para uso pesado (várias abas, edição de imagens, vídeos), 8 GiB já é tranquilidade.

O processador importa, mas menos do que se pensa: qualquer chip dual-core de 2010 para cá roda Lubuntu sem suar. O grande herói da experiência é o disco: trocar HD mecânico por SSD muda mais a sensação de velocidade do que dobrar a RAM. Se seu PC tem HD comum, considere fortemente comprar um SSD de 240 GiB (custa pouco e revive a máquina).

Placa de vídeo e som costumam funcionar de fábrica. Wi-Fi também na maioria dos casos; eventualmente uma placa Realtek ou Broadcom mais nova pede driver extra (vamos ver isso na seção de hardware). O essencial é: olhe o que você tem antes de instalar e compare com a tabela deste capítulo. Vai te poupar surpresas.`,
    codes: [
      {
        lang: "bash",
        code: `# Veja a memória RAM total e disponível:
free -h
# saída exemplo:
#               total        used        free
# Mem:          3.7Gi       420Mi       2.1Gi
# A coluna "total" é o que importa para comparar com requisitos.`,
      },
      {
        lang: "bash",
        code: `# Modelo e velocidade do processador:
lscpu | grep -E 'Model name|CPU MHz|Core'
# saída exemplo:
# Model name: Intel(R) Core(TM) i3-2310M CPU @ 2.10GHz
# CPU(s):     4
# Core(s) per socket: 2`,
      },
      {
        lang: "bash",
        code: `# Tipo e tamanho do disco:
lsblk -d -o name,size,rota,model
# saída exemplo:
# NAME   SIZE  ROTA MODEL
# sda    465G  1    WDC WD5000AAKX
# rota=1 significa rotacional (HD comum, lento).
# rota=0 significa não-rotacional (SSD ou NVMe, rápido).`,
      },
      {
        lang: "bash",
        code: `# Placa de vídeo (GPU):
lspci | grep -iE 'vga|3d'
# saída exemplo:
# 00:02.0 VGA compatible controller: Intel Corporation HD Graphics 3000
# Intel integrada quase sempre funciona sem instalar driver extra.`,
      },
      {
        lang: "bash",
        code: `# Placa de rede sem fio (Wi-Fi):
lspci | grep -i wireless
# ou para placas USB:
lsusb | grep -i wireless

# Realtek e Broadcom às vezes pedem driver. Intel quase sempre funciona out-of-the-box.`,
      },
      {
        lang: "text",
        code: `# Tabela rápida de uso esperado por hardware:

#   RAM     Disco    Cenário típico
#   1 GiB   HD       Roda, mas sofrido. Use só para um navegador leve.
#   2 GiB   HD       Razoável: navegador + escritório + música.
#   2 GiB   SSD      Bom! Sensação de leveza notável.
#   4 GiB   HD       Bom para uso geral; várias abas tranquilo.
#   4 GiB   SSD      Excelente: roda como Windows 11 num i7 atual.
#   8 GiB   SSD      Sobra recurso para tudo que um usuário comum faz.`,
      },
    ],
    points: [
      "Mínimo confortável: 2 GiB de RAM + qualquer processador dual-core dos últimos 12 anos.",
      "Trocar HD por SSD melhora a experiência mais do que dobrar a RAM.",
      "Lubuntu é 64-bit por padrão desde 2018; PCs muito antigos (Pentium 4, Atom 32-bit) não rodam.",
      "Use lscpu, free, lsblk e lspci para inventariar seu hardware antes de instalar.",
      "Wi-Fi Realtek e Broadcom pode precisar de driver via apt; Intel funciona sozinho.",
      "Iniciante comum: confundir os requisitos mínimos com os recomendados — 1 GiB roda, mas não é confortável.",
      "Iniciante comum: tentar instalar em PC 32-bit moderno; o Lubuntu atual só tem ISO 64-bit.",
      "Notebooks com bateria velha duram mais com Lubuntu por causa do menor consumo de CPU.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de instalar, rode o Lubuntu pelo modo Live USB (sem alterar o disco). Você vê na hora se o Wi-Fi, o som e a placa de vídeo funcionam.",
      },
      {
        type: "warning",
        content: "Se seu PC tem menos de 1 GiB de RAM, considere distros ainda mais leves (antiX, Puppy Linux). Lubuntu prefere ao menos 2 GiB para uma experiência decente.",
      },
      {
        type: "info",
        content: "Lubuntu não tem mais versão 32-bit oficial desde a 19.04. Se seu PC é antigo de verdade (Pentium 4 ou anterior), procure distros que ainda suportam i386.",
      },
      {
        type: "success",
        content: "Um SSD de 240 GiB hoje custa pouco e revive qualquer notebook de 5-10 anos. É a melhor melhoria custo-benefício.",
      },
    ],
  },
  {
    slug: "filosofia-leveza",
    section: "boas-vindas",
    title: "A filosofia da leveza",
    difficulty: "iniciante",
    subtitle: "Por que software enxuto é bom para você, seu bolso e o planeta.",
    intro: `Pense em um restaurante japonês tradicional: poucos elementos no prato, cada um com propósito. Nada é decorativo, nada é desperdício. Essa é a estética que move o Lubuntu e outros sistemas leves: usar só o necessário, com elegância, e deixar de lado tudo que não agrega. Não é avareza; é design consciente.

Essa filosofia tem três pilares práticos. Primeiro, o respeito ao hardware: um PC velho não precisa ir para o lixo só porque o Windows não roda mais nele. Segundo, o respeito ao tempo: software leve abre rápido, responde rápido, não te força a esperar barra de progresso. Terceiro, o respeito ao planeta: cada PC reaproveitado é menos lixo eletrônico, e cada watt economizado em consumo é uma escolha verde.

Um Lubuntu instalado em um notebook de 2010 não é "menos" do que um Windows 11 em um Ryzen 7 atual. É outro tipo de coisa. É ferramenta para quem entende que não precisa do último modelo para escrever um e-mail, ouvir música ou estudar. É também um manifesto silencioso contra o ciclo do "compre o novo, jogue o velho fora".

E há um efeito colateral delicioso: quem aprende a viver com pouco, valoriza o muito. Você nunca mais vai aceitar que abrir o navegador demore 8 segundos. Vai querer terminal rápido, atalho de teclado em vez de mouse, configuração que dura, não atualização forçada. A leveza, depois de experimentada, vira um padrão de qualidade pessoal.`,
    codes: [
      {
        lang: "bash",
        code: `# Comprovando a leveza: tempo de boot do Lubuntu
systemd-analyze
# saída exemplo:
# Startup finished in 4.231s (kernel) + 12.840s (userspace) = 17.071s
# Em SSD, espere algo entre 8 e 20 segundos do botão até a área de trabalho.`,
      },
      {
        lang: "bash",
        code: `# Detalha quais serviços demoram mais para subir:
systemd-analyze blame | head -10
# saída exemplo:
# 5.234s NetworkManager-wait-online.service
# 2.011s snapd.service
# 1.840s ...
# Esses são candidatos a desativar para um boot ainda mais rápido.`,
      },
      {
        lang: "bash",
        code: `# Uso de energia em tempo real (precisa instalar):
sudo apt install powertop -y
sudo powertop
# Mostra quanto cada processo consome em watts.
# Notebooks com Lubuntu costumam ficar abaixo de 6W em uso leve.`,
      },
      {
        lang: "bash",
        code: `# Comparação prática: quanto pesa o navegador padrão (Firefox)?
# Abra o Firefox, depois rode:
ps aux --sort=-%mem | head -5
# saída exemplo:
# USER   PID  %CPU %MEM    VSZ   RSS COMMAND
# ana   3120  3.2  18.0 ...   720MB firefox
# Mesmo o Firefox sozinho usa mais RAM que o Lubuntu inteiro.`,
      },
      {
        lang: "text",
        code: `# Princípios práticos da filosofia leve, para você adotar no dia a dia:

# 1. Instale só o que vai usar. Cada programa é um peso.
# 2. Prefira atalho de teclado a clique. Mais rápido, menos energia.
# 3. Mantenha a área de trabalho vazia. Ícones consomem RAM (sim, pouca, mas consomem).
# 4. Desinstale o que parou de usar. Não acumule "por garantia".
# 5. Atualize, mas com calma. Versão LTS dura cinco anos: não há pressa.`,
      },
    ],
    points: [
      "Leveza não é falta: é decisão consciente de usar só o que é útil.",
      "Hardware antigo + Lubuntu = vida útil estendida e menos lixo eletrônico.",
      "Software leve respeita seu tempo: aplicativos abrem em 1-2 segundos em vez de 10.",
      "Notebooks rodam mais frios e duram mais bateria com sistemas enxutos.",
      "Adotar a filosofia leve melhora o senso crítico para todo software que você usa.",
      "Iniciante comum: encher o Lubuntu de programas pesados achando que precisa de tudo. Vá adicionando só o que falta.",
      "Iniciante comum: comparar o Lubuntu com o Windows 11 em recursos visuais. São objetivos diferentes.",
      "Use systemd-analyze, free e powertop para medir e provar a leveza no seu hardware.",
    ],
    alerts: [
      {
        type: "success",
        content: "Reaproveitar um PC velho para um familiar (sua avó usar o WhatsApp Web, sua sobrinha estudar) é uma das melhores aplicações do Lubuntu.",
      },
      {
        type: "info",
        content: "A pegada de carbono de fabricar um PC novo equivale a anos de uso intenso. Estender a vida do que você já tem é ambientalmente significativo.",
      },
      {
        type: "tip",
        content: "Quando avaliar um programa novo, pergunte: ele resolve um problema real meu, ou só parece interessante? Recusar 'mais um' é um superpoder.",
      },
    ],
  },
  {
    slug: "comunidade-ajuda",
    section: "boas-vindas",
    title: "Comunidade e onde pedir ajuda",
    difficulty: "iniciante",
    subtitle: "Os lugares certos para tirar dúvidas sem ser hostilizado.",
    intro: `Linux tem fama de comunidade brava, e em parte é verdade — mas só em parte. Existem cantos onde você é bem recebido, sua dúvida é levada a sério e a resposta vem em horas. O segredo é saber para onde ir, como perguntar e o que esperar. Este capítulo é o seu mapa: onde fica cada balcão, quem atende e qual o tom da casa.

Pense na comunidade Linux como uma cidade grande. Tem o fórum oficial (a prefeitura), o Reddit (a praça pública), o Discord (o bar), o Stack Exchange (a biblioteca técnica), o Telegram em português (a roda de conversa do bairro) e o IRC (o porão antigo, ainda ativo). Cada lugar tem seu jeito. Postar pergunta de iniciante no IRC pode parecer falar inglês com formal demais; o mesmo no Reddit funciona como uma conversa amigável.

A regra de ouro para ser bem recebido em qualquer canto é: descreva o problema com detalhes (o que você esperava, o que aconteceu, qual a mensagem de erro EXATA), diga qual é sua versão de Lubuntu, mostre que você tentou pesquisar antes. Pessoas voluntárias respondem por amor — facilite a vida delas e você terá gente disputando para te ajudar.

Você também pode (e deve) pedir ajuda em português. A comunidade brasileira é ativa, especialmente no Telegram e em fóruns como o Diolinux Plus. Para temas mais técnicos, o inglês ainda dá mais retorno (é a língua franca do mundo Linux), mas iniciante começa em casa, na sua língua.`,
    codes: [
      {
        lang: "text",
        code: `# Mapa rápido: onde perguntar (e onde NÃO perguntar como iniciante)

# BOM PARA INICIANTE:
# - r/Lubuntu no Reddit          (inglês, pessoal e amigável)
# - r/linux4noobs no Reddit      (inglês, focado em iniciantes)
# - Telegram "Linux Brasil"      (português, ativo)
# - Diolinux Plus (forum.diolinux.com.br) (português)
# - Discord oficial Lubuntu      (inglês, resposta rápida)

# MELHOR ESPERAR ALGUNS MESES:
# - askubuntu.com  (técnico, exige boa pergunta)
# - Lubuntu Discourse (discuss.lubuntu.me, oficial em inglês)
# - IRC #lubuntu na Libera.Chat  (cultura mais formal)`,
      },
      {
        lang: "text",
        code: `# Modelo de pergunta que funciona em qualquer comunidade:

# Título: Wi-Fi não conecta no Lubuntu 26.04 (Realtek RTL8821CE)
#
# Corpo:
# Olá! Instalei o Lubuntu 26.04 num notebook Acer Aspire 5.
# O Wi-Fi aparece desligado e não consigo ativar.
# Pelo cabo de rede funciona normal.
#
# O que eu tentei:
# - Reiniciar
# - sudo modprobe rtl8821ce  → "Module rtl8821ce not found"
# - Verifiquei no lspci que a placa é Realtek RTL8821CE
#
# Saída de comandos:
# (cole aqui a saída de lspci -knn | grep -iA 3 net)
#
# Versão: Lubuntu 26.04.1 LTS, kernel 7.0.0-14-generic
# Obrigado!`,
      },
      {
        lang: "bash",
        code: `# Antes de pedir ajuda, junte informações úteis com um único comando:
inxi -Fxz
# Se não tiver, instale: sudo apt install inxi -y
# Mostra: hardware, kernel, drivers, rede, tudo de uma vez.
# Cole no post (mas remova endereço MAC e IP por privacidade).`,
      },
      {
        lang: "bash",
        code: `# Outra forma de coletar dados rapidamente:
journalctl -p err -b
# Mostra os erros desde o último boot.
# Útil quando algo "não funciona" mas você não sabe explicar o quê.`,
      },
      {
        lang: "text",
        code: `# Etiqueta de quem pede ajuda (vale ouro):

# - Pesquise antes. "Como instalar Lubuntu" tem 50 tutoriais prontos.
# - Diga sua versão (lsb_release -a) e seu hardware.
# - Cole o erro EXATO, não parafraseie. Aspas e maiúsculas importam.
# - Não escreva em CAIXA ALTA, não use "URGENTE!!!".
# - Volte para responder se a solução funcionou. Ajuda os próximos.
# - Diga "obrigado" — voluntário trabalha de graça.`,
      },
      {
        lang: "bash",
        code: `# Se a documentação oficial te assusta, lembre que ela está em:
# - help.ubuntu.com         (geral do Ubuntu, vale para Lubuntu)
# - manual.lubuntu.me       (manual oficial em PDF)
# - wiki.lubuntu.me         (dicas e solução de problemas)

# E você pode abrir manuais de comandos no terminal:
man ls    # documentação do comando ls
# Aperte q para sair, / para buscar dentro.`,
      },
    ],
    points: [
      "Existe comunidade hospitaleira: escolha o lugar certo para o seu nível.",
      "Reddit (r/Lubuntu, r/linux4noobs) e Telegram brasileiro são os mais amigáveis para iniciantes.",
      "Pergunta bem feita = problema descrito + o que você tentou + saída de comandos relevantes.",
      "Use inxi -Fxz para gerar um diagnóstico completo do sistema antes de pedir ajuda.",
      "Pesquisar antes (Google, askubuntu) economiza tempo seu e dos voluntários.",
      "Iniciante comum: postar 'não funciona' sem dizer o quê, qual versão, qual erro. Ninguém adivinha.",
      "Iniciante comum: ofender quem tentou ajudar quando a resposta não resolveu. Agradeça e dê detalhes adicionais.",
      "Linux tem documentação enorme: man, --help e a wiki oficial respondem 80% das dúvidas técnicas.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Sempre que um comando der erro, tente rodá-lo com --help ou consultar 'man comando' antes de perguntar. A resposta costuma estar lá.",
      },
      {
        type: "warning",
        content: "Cuidado ao colar comandos sugeridos por estranhos sem entender. Algumas 'soluções' em fóruns aleatórios são destrutivas (ex: rm -rf /*).",
      },
      {
        type: "info",
        content: "O canal oficial do Lubuntu no Discord (link em lubuntu.me/links) tem voluntários respondendo em poucos minutos durante o horário americano.",
      },
      {
        type: "success",
        content: "Quando você dominar algo, volte e responda perguntas de outros iniciantes. É assim que a comunidade Linux se sustenta há décadas.",
      },
    ],
  },
];
