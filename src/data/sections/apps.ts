import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "navegadores-leves",
    section: "apps",
    title: "Navegadores leves",
    difficulty: "iniciante",
    subtitle: "Firefox, Chromium e opções enxutas para máquinas modestas.",
    intro: `O navegador é, hoje, o programa mais pesado da maioria dos computadores. Ele baixa páginas cheias de imagens, vídeos, propaganda e código JavaScript que rodam ao mesmo tempo. Em uma máquina antiga, abrir cinco abas pode comer mais memória do que o Lubuntu inteiro. Por isso, escolher bem o navegador é tão importante quanto escolher o sistema.

Pense no navegador como um carro: você pode dirigir uma SUV potente (Chrome), um sedan equilibrado (Firefox), ou um fusca confiável (Falkon). Todos chegam ao destino, mas gastam combustível diferente. No Lubuntu, o padrão geralmente é o Firefox em pacote Snap, mas existem alternativas mais leves quando o seu hardware pede economia.

Neste capítulo você vai conhecer as opções: o Firefox, que vem instalado, e como trocá-lo por uma versão deb mais rápida; o Chromium, irmão de código aberto do Chrome; e nomes menos famosos como Falkon, Midori e qutebrowser. Também vai aprender truques para deixar qualquer navegador mais leve: bloquear propagandas, descarregar abas inativas e desligar animações.

No final, a escolha é pessoal. O importante é que você saiba que pode trocar — e como medir a diferença. Abrir o monitor de recursos antes e depois é o teste mais honesto.`,
    codes: [
      {
        lang: "bash",
        code: `# O Firefox padrão no Lubuntu costuma vir como Snap.
# Snap é mais lento para abrir. Para trocar pela versão .deb da Mozilla:
sudo snap remove firefox

# Adicione o repositório oficial da equipe do Mozilla
sudo add-apt-repository ppa:mozillateam/ppa

# Instale a versão deb e bloqueie o Snap de voltar
sudo apt install firefox -y
# saída resumida: firefox is already the newest version (versão deb agora)`,
      },
      {
        lang: "bash",
        code: `# Instalando o Chromium (alternativa ao Chrome, sem rastreio do Google)
sudo apt install chromium-browser -y

# Para abrir pelo terminal:
chromium-browser
# saída: abre uma janela do Chromium

# Verificar a versão instalada:
chromium-browser --version
# saída exemplo: Chromium 125.0.6422.141 Ubuntu`,
      },
      {
        lang: "bash",
        code: `# Falkon: navegador leve em Qt, combina visualmente com o LXQt
sudo apt install falkon -y
falkon &
# & joga o programa para o segundo plano e libera o terminal

# Midori: ainda mais enxuto, baseado em WebKit
sudo apt install midori -y
midori &`,
      },
      {
        lang: "bash",
        code: `# Comparando consumo de memória entre navegadores
# Abra cada um com a MESMA aba (ex: https://wikipedia.org)
# e rode em outro terminal:
ps -eo pid,comm,rss --sort=-rss | head -n 10
# RSS é a memória residente em KB.
# Divida por 1024 para ter MB.
# saída exemplo:
#   PID COMMAND          RSS
#  1234 firefox       650000
#  2345 chromium-brow 480000
#  3456 falkon        180000`,
      },
      {
        lang: "bash",
        code: `# Truque: descarregar abas inativas no Firefox automaticamente
# Abra about:config na barra de endereço e mude:
#   browser.tabs.unloadOnLowMemory = true
# Abas que você não usa são "congeladas" e liberam RAM.

# Para bloquear propagandas e poupar dados, instale uBlock Origin:
# Firefox: https://addons.mozilla.org/firefox/addon/ublock-origin/
# Chromium: https://chrome.google.com/webstore (busque uBlock Origin)`,
      },
      {
        lang: "bash",
        code: `# qutebrowser: para quem gosta de teclado e atalhos do Vim
sudo apt install qutebrowser -y
qutebrowser &
# Dentro dele:
#   :open wikipedia.org   abre site
#   J / K                 muda de aba
#   gg / G                topo / fim da página
# Não tem botões — você dirige com o teclado.`,
      },
    ],
    points: [
      "O navegador é geralmente o app que mais consome RAM no sistema.",
      "Snap deixa o Firefox mais lento para abrir; a versão deb da Mozilla é mais ágil.",
      "Chromium é a base do Chrome, mas sem os pacotes de telemetria do Google.",
      "Falkon e Midori são opções leves e suficientes para sites simples.",
      "uBlock Origin reduz consumo de banda, RAM e CPU em qualquer navegador.",
      "Iniciante comum: instalar Chrome direto sem perceber que ele baixa pacotes proprietários e gera tracking.",
      "Iniciante comum: deixar 30 abas abertas e culpar o sistema pela lentidão — feche o que não usa.",
      "Cada navegador tem extensões diferentes; nem tudo do Chrome funciona no Firefox.",
      "Meça memória com ps ou htop antes de decidir qual fica como padrão.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Configure no Firefox a página inicial about:home e desative o Pocket em about:config (extensions.pocket.enabled = false). Reduz tráfego e CPU no boot.",
      },
      {
        type: "warning",
        content: "Evite instalar 5 navegadores ao mesmo tempo só para experimentar. Cada um deixa cache, perfil e processos de fundo. Escolha 1 ou 2.",
      },
      {
        type: "info",
        content: "O Chromium no Ubuntu virou Snap por padrão. Se quiser a versão deb tradicional, use o PPA do projeto Linux Mint (chromium-browser-mint).",
      },
      {
        type: "danger",
        content: "Cuidado com extensões desconhecidas: elas leem TUDO que você navega. Instale só de fontes oficiais e revise permissões.",
      },
    ],
  },
  {
    slug: "libreoffice",
    section: "apps",
    title: "LibreOffice: a suíte de escritório",
    difficulty: "iniciante",
    subtitle: "Writer, Calc e Impress como alternativas ao Word, Excel e PowerPoint.",
    intro: `Se Microsoft Office é a Coca-Cola dos editores, LibreOffice é o guaraná: gratuito, brasileiro de coração (sim, há muita gente do Brasil contribuindo) e capaz de fazer praticamente as mesmas coisas. Ele tem Writer (para textos), Calc (planilhas), Impress (apresentações), Draw (desenho vetorial), Base (banco de dados) e Math (fórmulas).

O LibreOffice abre arquivos do Word, Excel e PowerPoint sem precisar de plugin. Pode também salvar nesses formatos quando você quiser mandar para alguém que ainda usa o Office. A formatação fica 95% igual; coisas muito específicas como macros VBA podem não vir junto, mas para o uso comum funciona muito bem.

No Lubuntu, ele já vem instalado em uma versão enxuta. Se você precisar de algo a mais (corretor ortográfico em outras línguas, Base, etc.), instala via apt em poucos megabytes. Use as primeiras semanas para se acostumar com a interface — os menus mudam de lugar, os ícones são diferentes, mas tudo está lá.

Vamos ver onde encontrar cada programa, como salvar nos formatos certos e alguns ajustes que deixam o LibreOffice mais leve e mais bonito dentro do LXQt.`,
    codes: [
      {
        lang: "bash",
        code: `# Verificar a versão instalada
libreoffice --version
# saída exemplo: LibreOffice 24.2.5.2 420(Build:2)

# Listar todos os componentes disponíveis pelo terminal:
libreoffice --writer    # abre o Writer (textos)
libreoffice --calc      # abre o Calc (planilhas)
libreoffice --impress   # abre o Impress (apresentações)
libreoffice --draw      # abre o Draw (desenho)`,
      },
      {
        lang: "bash",
        code: `# Instalar componentes que faltam (Base e Math costumam não vir)
sudo apt install libreoffice-base libreoffice-math -y

# Instalar o corretor ortográfico em português do Brasil
sudo apt install hunspell-pt-br hyphen-pt-br -y
# Reinicie o LibreOffice depois para ele carregar os dicionários.`,
      },
      {
        lang: "bash",
        code: `# Convertendo arquivos pelo terminal — útil para automação
# Transformar um .docx em PDF sem abrir a interface:
libreoffice --headless --convert-to pdf relatorio.docx
# saída: convert /home/voce/relatorio.docx -> /home/voce/relatorio.pdf

# Converter vários de uma vez:
libreoffice --headless --convert-to pdf *.docx
# Ótimo para fechar o mês transformando vários arquivos.`,
      },
      {
        lang: "bash",
        code: `# Tornar o LibreOffice mais leve no boot
# Abra qualquer programa da suíte e vá em:
#   Ferramentas > Opções > LibreOffice > Memória
# Ajustes recomendados em PCs antigos:
#   - Cache de imagens: 64 MB (em vez de 256)
#   - Desativar "Carregar LibreOffice durante a inicialização do sistema"
# Salvar e reiniciar.`,
      },
      {
        lang: "bash",
        code: `# Mudar o formato padrão de salvamento para .docx (compatibilidade Office)
# Ferramentas > Opções > Carregar/Salvar > Geral
# Em "Sempre salvar como" para Documento de texto, escolha:
#   Word 2007-365 (.docx)
# Faça o mesmo para planilhas (xlsx) e apresentações (pptx).`,
      },
      {
        lang: "bash",
        code: `# Aplicar o tema Breeze (mais bonito no LXQt)
sudo apt install libreoffice-style-breeze -y
# Em qualquer programa: Ferramentas > Opções > LibreOffice > Exibir
# Estilo de ícones: Breeze
# Visual fica integrado ao tema do sistema.`,
      },
    ],
    points: [
      "LibreOffice já vem no Lubuntu; você não precisa instalar nada para começar.",
      "Writer abre .doc/.docx, Calc abre .xls/.xlsx, Impress abre .ppt/.pptx — tudo nativo.",
      "Salve em .docx quando o destinatário usa Office; em .odt para arquivar localmente.",
      "Conversão headless transforma documentos em PDF pelo terminal, ótimo para scripts.",
      "Hunspell traz corretor ortográfico em português; precisa instalar separado.",
      "O tema Breeze deixa os ícones integrados ao look do LXQt.",
      "Iniciante comum: salvar como .odt e mandar para colega de Windows que não consegue abrir.",
      "Iniciante comum: esperar que macros do Excel rodem no Calc — algumas funcionam, outras não.",
      "Reduzir o cache de memória em Ferramentas > Opções deixa o programa mais leve.",
    ],
    alerts: [
      {
        type: "info",
        content: "Existe a versão LibreOffice Still (mais estável, mais antiga) e Fresh (mais recente). O Lubuntu costuma trazer a Still. Para Fresh, use o PPA libreoffice/ppa.",
      },
      {
        type: "tip",
        content: "Aprenda os atalhos: Ctrl+S salva, Ctrl+Z desfaz, Ctrl+Shift+P exporta como PDF direto. Economiza horas em qualquer trabalho longo.",
      },
      {
        type: "warning",
        content: "Documentos com macros VBA do Excel podem abrir mas não rodar no Calc. Se o seu trabalho depende de macros complexas, valide antes de migrar.",
      },
      {
        type: "success",
        content: "O LibreOffice tem extensão TexMaths excelente para inserir fórmulas LaTeX em qualquer documento. Procure no extensions.libreoffice.org.",
      },
    ],
  },
  {
    slug: "cliente-email",
    section: "apps",
    title: "Clientes de e-mail",
    difficulty: "iniciante",
    subtitle: "Thunderbird, Geary e Trojitá para ler e-mails fora do navegador.",
    intro: `Você pode acessar Gmail, Outlook ou seu webmail direto no navegador, e muita gente faz só isso. Mas ter um cliente de e-mail dedicado tem vantagens: você baixa as mensagens para o disco (lê offline), pode juntar várias contas em uma só caixa de entrada, configura filtros poderosos e responde mais rápido sem distração de notificações de site.

Pense no cliente como uma caixa postal física que você instala em casa. O carteiro (servidor IMAP) ainda guarda tudo no prédio dele, mas você tem uma cópia local para abrir quando quiser, mesmo sem internet. Quando responde, o cliente envia pelo SMTP do seu provedor. Esses dois protocolos (IMAP e SMTP) são o segredo que todos os clientes usam.

No Lubuntu, o queridinho é o Thunderbird, da mesma família do Firefox. Ele é completo, tem extensões, agenda, suporte a PGP para criptografia e recebe atualizações até hoje. Para máquinas mais limitadas, existem alternativas leves como Geary (interface bonita e simples) e Trojitá (super enxuto, em Qt).

Vamos ver como instalar, configurar uma conta IMAP/SMTP típica (Gmail) e algumas dicas de segurança importantes — autenticação de dois fatores, senhas de aplicativo e backups da pasta do perfil.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar o Thunderbird (geralmente já vem, mas se não tiver):
sudo apt install thunderbird thunderbird-locale-pt-br -y

# Abrir pela primeira vez:
thunderbird &
# Na janela inicial, ele oferece criar uma conta nova ou usar uma existente.
# Use "uma existente" e digite seu nome, e-mail e senha.`,
      },
      {
        lang: "bash",
        code: `# Configurações típicas para Gmail (IMAP)
# IMAP recebe e mantém os e-mails sincronizados (recomendado).
#
#   Servidor de entrada (IMAP):
#     imap.gmail.com   porta 993   SSL/TLS
#   Servidor de saída (SMTP):
#     smtp.gmail.com   porta 465   SSL/TLS
#
# IMPORTANTE: Gmail exige "Senha de app" se você usa 2FA.
# Crie em https://myaccount.google.com/apppasswords`,
      },
      {
        lang: "bash",
        code: `# Geary — cliente leve da GNOME, integra bem em qualquer ambiente
sudo apt install geary -y
geary &
# Interface mais simples: três colunas (pastas, lista, mensagem).
# Suporta Gmail, Outlook, Yahoo, IMAP/SMTP genérico.`,
      },
      {
        lang: "bash",
        code: `# Trojitá — cliente em Qt, super leve, ideal pro LXQt
sudo apt install trojita -y
trojita &
# Sem suporte a calendário ou contatos: foco em e-mail puro.
# Bom para máquinas com 2 GB de RAM ou menos.`,
      },
      {
        lang: "bash",
        code: `# Backup do perfil do Thunderbird (e-mails, contas, filtros)
# A pasta fica em ~/.thunderbird
ls -lh ~/.thunderbird
# saída exemplo: total 4.0K
# drwx------ 5 voce voce 4.0K out 14 09:33 abc123.default-release

# Para fazer backup:
tar -czvf thunderbird-backup-$(date +%F).tar.gz ~/.thunderbird
# Guarde esse .tar.gz em um pendrive ou nuvem.`,
      },
      {
        lang: "bash",
        code: `# Restaurar o backup em outra máquina (ou após reinstalar o sistema)
# Pare o Thunderbird antes:
pkill thunderbird

# Extraia o backup por cima da pasta home
tar -xzvf thunderbird-backup-2024-10-14.tar.gz -C ~/

# Reabra o Thunderbird — todas as contas e e-mails voltam.
thunderbird &`,
      },
    ],
    points: [
      "Cliente de e-mail baixa mensagens localmente; você lê offline e responde rápido.",
      "IMAP sincroniza com o servidor; POP3 só baixa e apaga (evite POP3 hoje em dia).",
      "Thunderbird é a opção completa; Geary e Trojitá são leves para máquinas modestas.",
      "Gmail e Outlook exigem 'senha de app' se você usa autenticação em dois fatores.",
      "A pasta ~/.thunderbird guarda TUDO; faça backup antes de reinstalar o sistema.",
      "Filtros automáticos (regras) movem mensagens para pastas — economiza muito tempo.",
      "Iniciante comum: usar a senha normal do Gmail e ver erro de autenticação — precisa da senha de app.",
      "Iniciante comum: configurar POP3 sem querer, apagar do servidor e perder os e-mails ao reinstalar.",
      "Para criptografia ponta a ponta, instale a extensão OpenPGP (já vem embutida no Thunderbird recente).",
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca digite a senha do seu e-mail em sites suspeitos. Phishing é o ataque mais comum. Cliente local não pede senha em popup do navegador.",
      },
      {
        type: "warning",
        content: "Provedores como Gmail bloqueiam logins de 'apps menos seguros'. Use sempre senha de app + 2FA, não tente desativar a segurança da conta.",
      },
      {
        type: "tip",
        content: "Configure assinatura padrão em Editar > Configurações da conta > Identidade. Aparece em todo e-mail novo, sem precisar digitar.",
      },
      {
        type: "info",
        content: "Thunderbird tem agenda integrada (Lightning) que sincroniza com Google Calendar via add-on Provider for Google Calendar.",
      },
    ],
  },
  {
    slug: "tocador-musica",
    section: "apps",
    title: "Tocadores de música",
    difficulty: "iniciante",
    subtitle: "Audacious, Clementine, Rhythmbox e o que cabe na sua biblioteca.",
    intro: `Por mais que streaming tenha tomado conta, ainda há quem prefira ter MP3 e FLAC no disco — coleção própria, sem assinatura, sem rastreio. Em Linux, sobra opção de tocador. Cada um tem uma cara: alguns parecem o velho Winamp, outros lembram iTunes, outros são minimalistas e quase invisíveis na bandeja.

No Lubuntu, o tocador padrão historicamente é o Audacious. É leve, abre rápido e até aceita as skins clássicas do Winamp 2 — pura nostalgia. Ele lê todos os formatos comuns (MP3, OGG, FLAC, WAV) e tem equalizador embutido. Para coleção grande com capas, gêneros e playlists organizadas, o Clementine é mais robusto.

Existem ainda opções nichadas: Rhythmbox para quem gosta do estilo iTunes, Strawberry para quem ama metadata e reprodução de altíssima qualidade, e cmus para quem vive no terminal. Cada um pesa diferente — Audacious roda em qualquer máquina, Clementine pede um pouquinho mais.

Vamos instalar, organizar a biblioteca, criar playlists e tocar pelo terminal quando preciso. Tocar música pelo terminal parece bobagem, mas é útil quando você quer fazer um botão no painel do LXQt que toca uma rádio favorita.`,
    codes: [
      {
        lang: "bash",
        code: `# Audacious — tocador padrão, leve, com skins do Winamp
sudo apt install audacious -y
audacious ~/Música/*.mp3 &
# Toca todos os MP3 da pasta Música.

# Para mudar para a interface clássica (Winamp):
# Configurações > Aparência > Interface > Winamp Classic Interface`,
      },
      {
        lang: "bash",
        code: `# Clementine — biblioteca rica, ideal para coleção grande
sudo apt install clementine -y
clementine &
# Na primeira execução, aponte para sua pasta de músicas.
# Ferramentas > Adicionar pasta da biblioteca`,
      },
      {
        lang: "bash",
        code: `# Strawberry — fork moderno do Clementine, melhor suporte a FLAC e DSD
sudo apt install strawberry -y
strawberry &

# Rhythmbox — interface estilo iTunes, integra bem com podcasts
sudo apt install rhythmbox -y
rhythmbox &`,
      },
      {
        lang: "bash",
        code: `# Tocar música pelo terminal (sem interface)
# mpg123 toca MP3:
sudo apt install mpg123 -y
mpg123 ~/Música/musica.mp3
# saída: Title: Wonderful Song   Artist: Banda X
# [0:23] Decoding of musica.mp3 finished.

# Para tocar uma rádio online:
mpg123 https://stream.zeno.fm/c5xpnu0vnuhvv
# Ctrl+C interrompe.`,
      },
      {
        lang: "bash",
        code: `# Baixar capas e tags automaticamente no Clementine
# 1. Selecione a faixa
# 2. Botão direito > Editar etiquetas
# 3. Aba "Capa" > clique "Buscar automaticamente"
# Ele consulta MusicBrainz e Last.fm.

# Para organizar a biblioteca em pastas Artista/Álbum:
# Ferramentas > Organizar arquivos
# Modelo: %artist%/%album%/%track% - %title%.%ext%`,
      },
      {
        lang: "bash",
        code: `# cmus — tocador no terminal, muito leve (~10 MB de RAM)
sudo apt install cmus -y
cmus
# Comandos dentro:
#   :add ~/Música       adiciona pasta
#   c                   tocar/pausar
#   b / z               próxima / anterior
#   v                   parar
#   q                   sair`,
      },
    ],
    points: [
      "Audacious é leve, lê todos os formatos comuns e aceita skins do Winamp.",
      "Clementine é melhor quando você tem milhares de faixas com capas e álbuns.",
      "Strawberry é fork do Clementine focado em qualidade de áudio (FLAC, DSD).",
      "mpg123 e cmus tocam pelo terminal — úteis para scripts e atalhos.",
      "MusicBrainz é o banco de dados aberto de música; quase todos puxam tags dele.",
      "Equalizador integrado evita instalar JACK ou PulseEffects para ajuste simples.",
      "Iniciante comum: deixar a biblioteca em uma pasta e mover sem reindexar — o tocador 'perde' as músicas.",
      "Iniciante comum: instalar 5 tocadores e ficar perdido qual abre o quê — escolha um padrão.",
      "Para podcasts dedicados, instale o gpodder; ele baixa episódios automaticamente.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Defina o tocador padrão em Configurações do LXQt > Associações de arquivos. Assim, dois cliques em um MP3 abrem o programa certo.",
      },
      {
        type: "info",
        content: "Para escutar Spotify de graça (sem instalar o app pesado), use o spotify-tui ou o cliente web direto no Firefox.",
      },
      {
        type: "warning",
        content: "Skins antigas do Winamp podem ter vírus para Windows embutidos. Em Linux não rodam, mas evite baixar de sites obscuros mesmo assim.",
      },
    ],
  },
  {
    slug: "video-vlc",
    section: "apps",
    title: "Vídeo: VLC e alternativas",
    difficulty: "iniciante",
    subtitle: "O canivete suíço dos formatos de vídeo.",
    intro: `O VLC é o tipo de programa que você instala uma vez e nunca mais precisa de outro tocador. Ele toca tudo: MP4, MKV, AVI, MOV, WebM, DVDs, Blu-rays sem proteção, transmissões ao vivo, streams de webcam, e até arquivos quebrados que outros tocadores recusam. O lema do projeto é "se um codec existe, o VLC toca".

A grande força do VLC é trazer todos os codecs embutidos. Em Windows você baixa um pacote chamado K-Lite Codec Pack, em Linux nem isso é necessário porque o VLC traz tudo. Isso evita aquele cenário irritante de abrir um vídeo, ver imagem mas não ouvir som, ou som sem imagem.

O Lubuntu não traz o VLC de fábrica para economizar espaço, mas ele está a um apt install de distância. Existem alternativas mais leves como mpv (terminal-friendly) e celluloid (interface bonita sobre o mpv), úteis quando você quer só assistir e não precisa do canivete suíço inteiro.

Neste capítulo, vamos instalar, ver como tocar mídia local e remota, capturar trechos, converter vídeo entre formatos e até gravar a tela — sim, o VLC faz isso também.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar o VLC
sudo apt install vlc -y

# Tocar um arquivo local:
vlc ~/Vídeos/filme.mkv

# Tocar uma URL (rádio, stream, vídeo direto):
vlc https://exemplo.com/video.mp4

# Tocar do terminal sem interface gráfica:
cvlc --play-and-exit musica.mp3
# cvlc é a versão "console", sem janela.`,
      },
      {
        lang: "bash",
        code: `# Atalhos importantes dentro do VLC
# Espaço      pausar/tocar
# F           tela cheia
# M           mudo
# +/-         velocidade (1.5x, 0.5x...)
# E           avançar 1 frame (ótimo para tirar print)
# Shift+S     captura tela em ~/Imagens
# Ctrl+T      ir para tempo específico (HH:MM:SS)`,
      },
      {
        lang: "bash",
        code: `# Converter um vídeo entre formatos pelo VLC (linha de comando)
# Exemplo: MKV para MP4
vlc input.mkv \\
  --sout="#transcode{vcodec=h264,acodec=mp3}:standard{access=file,mux=mp4,dst=output.mp4}" \\
  --intf dummy
# --intf dummy roda sem interface, ideal para script.

# Aviso: para conversões mais sérias, prefira o ffmpeg (próximo capítulo).`,
      },
      {
        lang: "bash",
        code: `# mpv — tocador minimalista, ótimo em máquinas fracas
sudo apt install mpv -y
mpv filme.mp4

# Atalhos do mpv:
#   espaço     pausar
#   q          sair
#   ← →        retroceder/avançar 5s
#   ↑ ↓        volume

# Celluloid: interface gráfica sobre o mpv
sudo apt install celluloid -y
celluloid &`,
      },
      {
        lang: "bash",
        code: `# Gravar a tela inteira como vídeo
# 1. Abra o VLC > Mídia > Abrir dispositivo de captura
# 2. Modo de captura: Tela
# 3. Taxa de quadros: 25 fps
# 4. Em "Reproduzir", clique na seta e escolha "Converter"
# 5. Salve como MP4

# Pelo terminal (mais simples, mas só Xorg, não Wayland):
cvlc screen:// :screen-fps=25 \\
  --sout="#transcode{vcodec=h264}:standard{access=file,mux=mp4,dst=tela.mp4}"`,
      },
      {
        lang: "bash",
        code: `# Tocar DVD e Blu-ray sem DRM
# Insira o disco e:
vlc dvd://
vlc bluray:///dev/sr0

# Para Blu-ray comerciais (com DRM AACS), instale também:
sudo apt install libaacs0 -y
# E baixe a chave em ~/.config/aacs/
# (busque por libaacs keys database — depende do disco)`,
      },
    ],
    points: [
      "VLC toca praticamente todos os formatos sem precisar instalar codec extra.",
      "O comando cvlc roda sem interface — útil em scripts e servidor.",
      "Atalhos como E (frame por frame) e Shift+S (capturar tela) economizam tempo.",
      "mpv é mais leve que o VLC; celluloid traz uma interface bonita por cima.",
      "VLC grava a tela e converte vídeos, mas para conversão sério prefira ffmpeg.",
      "DVD funciona direto; Blu-ray comercial precisa das chaves AACS configuradas.",
      "Iniciante comum: instalar 'codec packs' que não existem em Linux — VLC já traz tudo.",
      "Iniciante comum: tela preta com som = arraste a barra de tempo, é o cache enchendo.",
      "Para legendas .srt, deixe o arquivo com o mesmo nome do vídeo na mesma pasta.",
    ],
    alerts: [
      {
        type: "tip",
        content: "VLC tem extensões: vá em Ferramentas > Plugins. Tem extensão para baixar legenda do OpenSubtitles automaticamente.",
      },
      {
        type: "info",
        content: "Em PCs muito antigos, ative VLC > Ferramentas > Preferências > Vídeo > Saída: X11. Isso evita gargalo de aceleração que não existe.",
      },
      {
        type: "warning",
        content: "Não baixe VLC de sites de terceiros. Sempre instale via apt ou pelo videolan.org. Existem clones com adware na internet.",
      },
      {
        type: "success",
        content: "VLC pode transmitir vídeo pela rede: Mídia > Stream. Útil para mostrar um vídeo do PC na TV via outro VLC.",
      },
    ],
  },
  {
    slug: "editor-imagem",
    section: "apps",
    title: "Editores de imagem",
    difficulty: "intermediario",
    subtitle: "GIMP, Krita, Inkscape e visualizadores leves.",
    intro: `O Linux tem opções excelentes para imagem, e o melhor: tudo gratuito. Para edição estilo Photoshop, existe o GIMP. Para desenho artístico estilo Procreate ou Clip Studio, existe o Krita. Para vetor estilo Illustrator, existe o Inkscape. Cada um cobre um nicho — não precisa escolher um só, eles convivem bem.

No dia a dia, porém, você raramente precisa de um editor pesado. Recortar uma foto, redimensionar para mandar por WhatsApp, fazer um print da tela — para isso, ferramentas leves bastam. O Lubuntu já vem com o LXImage para visualizar e o Scrot/Spectacle para capturar tela, e isso resolve 80% das tarefas.

Neste capítulo veremos os pesos-pesados e os leves, e quando usar cada um. Também aprenderemos a fazer operações em lote pelo terminal com o ImageMagick, que é praticamente um Photoshop sem janela: redimensiona 300 fotos com um comando.

A regra prática: se é uma foto, abra com o LXImage. Se quer cortar e ajustar uma só, use o GIMP. Se vai pintar do zero, Krita. Se é vetor (logo, ícone), Inkscape. Se é uma operação repetitiva em muitas imagens, ImageMagick.`,
    codes: [
      {
        lang: "bash",
        code: `# Visualizador padrão do LXQt — já vem instalado
lximage-qt ~/Imagens/foto.jpg
# Ele tem ferramentas básicas: girar, redimensionar, recortar.
# Para rodar um corte rápido sem abrir nada pesado, basta isso.`,
      },
      {
        lang: "bash",
        code: `# GIMP — alternativa ao Photoshop
sudo apt install gimp -y

# Abrir um arquivo:
gimp foto.jpg &

# Pacotes complementares úteis:
sudo apt install gimp-data-extras gimp-plugin-registry -y
# Adicionam pincéis, gradientes e plugins de terceiros.`,
      },
      {
        lang: "bash",
        code: `# Krita — para desenho digital e ilustração
sudo apt install krita -y
krita &

# Suporta tablets (Wacom, XP-Pen) sem configuração extra.
# Tem timeline para animação 2D simples também.`,
      },
      {
        lang: "bash",
        code: `# Inkscape — vetor (SVG, logos, ícones)
sudo apt install inkscape -y
inkscape logo.svg &

# Converter SVG para PNG pelo terminal:
inkscape --export-type=png --export-filename=logo.png logo.svg
# saída: Background RRGGBBAA: 00000000
# Bitmap saved as: logo.png`,
      },
      {
        lang: "bash",
        code: `# ImageMagick — Photoshop em forma de comandos
sudo apt install imagemagick -y

# Redimensionar uma imagem mantendo proporção:
convert foto.jpg -resize 800x600 foto_pequena.jpg

# Converter formato (JPG para PNG):
convert foto.jpg foto.png

# Comprimir JPG (qualidade 70%):
convert foto.jpg -quality 70 foto_comprimida.jpg`,
      },
      {
        lang: "bash",
        code: `# Operação em lote: redimensionar todas as fotos da pasta
mkdir saida
for arquivo in *.jpg; do
    # convert é o comando do ImageMagick
    convert "$arquivo" -resize 1024x "saida/$arquivo"
done
echo "Fim: $(ls saida | wc -l) imagens processadas"
# saída exemplo: Fim: 47 imagens processadas`,
      },
      {
        lang: "bash",
        code: `# Capturar a tela com Scrot (linha de comando)
sudo apt install scrot -y

# Tela inteira:
scrot tela.png

# Com 3s de delay:
scrot -d 3 tela.png

# Selecionar área com o mouse:
scrot -s recorte.png
# Salva no diretório atual.`,
      },
    ],
    points: [
      "GIMP cobre quase tudo que Photoshop faz, com curva de aprendizado parecida.",
      "Krita é melhor que GIMP para ilustração; foco em pincéis e tablet.",
      "Inkscape é a ferramenta para vetor (SVG); GIMP é para raster (pixel).",
      "ImageMagick processa centenas de imagens via terminal sem abrir interface.",
      "LXImage e Scrot resolvem o cotidiano: visualizar e capturar tela.",
      "Para tablet de desenho, Krita reconhece pressão automaticamente sem driver.",
      "Iniciante comum: tentar editar texto vetorial em SVG no GIMP — texto vira pixel e perde qualidade. Use Inkscape.",
      "Iniciante comum: salvar tudo em JPG (com perda) quando original era PNG sem perda — fica feio.",
      "Spectacle (do KDE) é alternativa ao Scrot com interface gráfica e mais opções.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Use o atalho 'Imprimir tela' (PrintScreen). No LXQt ele já vem mapeado para abrir uma ferramenta de captura.",
      },
      {
        type: "info",
        content: "GIMP 3.0 (lançado em 2025) tem interface modernizada. Se vier com versão antiga, considere Flatpak para pegar a mais nova.",
      },
      {
        type: "warning",
        content: "ImageMagick por padrão limita uso de memória. Para imagens muito grandes (>100 MP), edite /etc/ImageMagick-6/policy.xml.",
      },
      {
        type: "danger",
        content: "Antes de aceitar plugin do gimp-plugin-registry, leia descrição. Alguns são abandonados há mais de 10 anos e podem travar o programa.",
      },
    ],
  },
  {
    slug: "mensageiros",
    section: "apps",
    title: "Mensageiros",
    difficulty: "iniciante",
    subtitle: "Telegram, Signal, WhatsApp Web, Discord no Lubuntu.",
    intro: `Mensageiros são parte do dia a dia de qualquer pessoa hoje. A boa notícia: praticamente todos têm versão para Linux ou rodam bem no navegador. A não tão boa: alguns são Electron, ou seja, um Chrome inteiro embutido só para mostrar mensagens. Em uma máquina antiga, abrir Discord, Slack e WhatsApp Web ao mesmo tempo pode comer 2 GB de RAM tranquilamente.

O Telegram tem cliente nativo escrito em Qt — leve, rápido e funciona muito bem no LXQt. O Signal tem cliente desktop oficial (Electron, infelizmente). O WhatsApp não tem app oficial para Linux; você usa pelo navegador (web.whatsapp.com) ou por wrappers como o Whatsie. Discord tem app oficial Electron.

Neste capítulo, vamos instalar os principais e dar dicas para reduzir o impacto deles no sistema. Ferramentas como Ferdium agrupam vários mensageiros em uma única janela — útil se você não aguenta abrir 5 programas separados.

Importante: aplicativos de mensagem têm acesso a notificações e podem rodar em segundo plano. Configure cada um com cuidado para não ficar com 4 ícones piscando na bandeja toda hora.`,
    codes: [
      {
        lang: "bash",
        code: `# Telegram Desktop (cliente oficial em Qt)
sudo apt install telegram-desktop -y
telegram-desktop &
# Faça login com seu número; o código chega pelo app celular ou SMS.`,
      },
      {
        lang: "bash",
        code: `# Signal Desktop (Electron, mas é o mais privado)
# Adiciona o repositório oficial:
wget -O- https://updates.signal.org/desktop/apt/keys.asc | \\
    gpg --dearmor | \\
    sudo tee /usr/share/keyrings/signal-desktop-keyring.gpg > /dev/null

echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/signal-desktop-keyring.gpg] https://updates.signal.org/desktop/apt xenial main' | \\
    sudo tee /etc/apt/sources.list.d/signal-xenial.list

sudo apt update
sudo apt install signal-desktop -y`,
      },
      {
        lang: "bash",
        code: `# WhatsApp Web — usar pelo Firefox/Chromium é o mais leve
firefox https://web.whatsapp.com &

# Para um app dedicado (sem precisar abrir aba):
sudo apt install whatsie -y
# whatsie é um wrapper Electron, então pesa.

# Alternativa via Snap, mais atualizada:
sudo snap install whatsdesk`,
      },
      {
        lang: "bash",
        code: `# Discord (Electron oficial)
# Baixe o .deb em https://discord.com/api/download?platform=linux&format=deb
wget -O discord.deb "https://discord.com/api/download?platform=linux&format=deb"
sudo apt install ./discord.deb -y

# Atualizações: Discord notifica e abre o navegador.
# Repita o wget+apt install para atualizar.`,
      },
      {
        lang: "bash",
        code: `# Ferdium — agrupa vários mensageiros em uma janela só
# (não está nos repositórios; baixe o .deb)
wget -O ferdium.deb https://github.com/ferdium/ferdium-app/releases/latest/download/Ferdium-linux-amd64.deb
sudo apt install ./ferdium.deb -y
ferdium &
# Adicione "serviços" (WhatsApp, Telegram Web, Slack) — cada um vira uma aba.`,
      },
      {
        lang: "bash",
        code: `# Reduzir consumo de Electron-apps
# Adicione no atalho do programa (Editar atalho do menu) a flag:
#   --disable-gpu --disable-software-rasterizer
# Exemplo no .desktop:
#   Exec=discord --disable-gpu

# E para Discord não abrir no boot, em Configurações:
# Configurações de Usuário > Configurações do Windows >
# desmarque "Abrir Discord ao iniciar o computador".`,
      },
    ],
    points: [
      "Telegram Desktop é o mais leve (Qt nativo) e tem todas as funções do app móvel.",
      "Signal é o mais privado, mas é Electron e pesa mais.",
      "WhatsApp não tem app oficial Linux; use web.whatsapp.com ou whatsie/whatsdesk.",
      "Discord oficial é Electron; flags --disable-gpu reduzem uso de RAM.",
      "Ferdium agrupa mensageiros em uma janela só, mas ainda é Electron embaixo.",
      "Apps de mensagem rodando em segundo plano consomem RAM mesmo minimizados.",
      "Iniciante comum: ter Telegram instalado E Telegram Web aberto no Firefox — duplica o consumo.",
      "Iniciante comum: deixar todos os apps iniciarem com o sistema e estranhar boot lento.",
      "Em PCs com pouca RAM, prefira usar tudo no navegador (uma aba pesa menos que um Electron inteiro).",
    ],
    alerts: [
      {
        type: "warning",
        content: "Apps Electron embutem um Chromium completo (~100MB cada). Usar 4 ao mesmo tempo é abrir 4 navegadores escondidos.",
      },
      {
        type: "tip",
        content: "Configure o Telegram para não baixar mídia automaticamente: Configurações > Avançado > Auto-download. Economiza disco e dados.",
      },
      {
        type: "info",
        content: "Element (cliente Matrix) é uma alternativa descentralizada. Open source completo, sem empresa controlando.",
      },
      {
        type: "danger",
        content: "Não instale apks de WhatsApp via Anbox/Waydroid em servidor de produção: viola termos da Meta e pode banir seu número.",
      },
    ],
  },
  {
    slug: "alternativas-leves",
    section: "apps",
    title: "Alternativas leves a apps comuns",
    difficulty: "intermediario",
    subtitle: "Substitutos enxutos para Notion, Slack, Spotify, Photoshop.",
    intro: `Os apps que dominam o mercado costumam ser pesados. Notion, Slack, Spotify, VS Code, Adobe XD — quase todos rodam dentro de um Chromium. Em uma máquina robusta isso passa despercebido. Em um PC antigo com Lubuntu, abrir três deles ao mesmo tempo já compromete a experiência.

A boa notícia é que para quase todo app popular existe uma alternativa leve no mundo Linux. Nem sempre tão polida, nem sempre com todos os recursos, mas o suficiente para o trabalho. Se você não usa as 50 funções premium do Notion, talvez um arquivo Markdown com Joplin resolva. Se você não vive de DJ, talvez o cmus baste em vez do Spotify.

A ideia deste capítulo não é que você troque tudo. É que você saiba o que existe quando o programa "padrão" pesar demais. Cada substituto tem trade-offs: a interface pode ser feia, a comunidade pode ser menor, faltarão recursos. Mas você ganha desempenho, privacidade e independência de empresas que podem mudar o produto sem aviso.

Vamos ver substitutos categoria por categoria, com instalação e quando faz sentido trocar. No fim, talvez você descubra que metade do que tem no PC pode ser substituído.`,
    codes: [
      {
        lang: "bash",
        code: `# Notion → Joplin (notas em Markdown, com sync via WebDAV/Nextcloud)
sudo apt install joplin -y
joplin &
# Suporta cadernos, tags, anexos, criptografia ponta a ponta.
# Sincroniza com Dropbox, OneDrive, WebDAV ou servidor próprio.`,
      },
      {
        lang: "bash",
        code: `# Slack → Element (Matrix) ou IRC clássico
# Element para chat moderno em equipe:
sudo apt install element-desktop -y

# Hexchat para IRC (mais leve):
sudo apt install hexchat -y
hexchat &
# Ainda existem comunidades ativas em IRC (Libera.Chat, OFTC).`,
      },
      {
        lang: "bash",
        code: `# Spotify pesado → cmus + spotify-tui (interface terminal)
sudo apt install cmus -y

# Para Spotify pelo terminal (precisa conta Premium):
# Instale o spotifyd (daemon) e o spotify-tui (interface)
# https://github.com/Rigellute/spotify-tui
# Pesa 30 MB de RAM em vez de 500 MB do app oficial.`,
      },
      {
        lang: "bash",
        code: `# Photoshop → GIMP (já vimos) + Pinta (mais simples ainda)
sudo apt install pinta -y
pinta foto.jpg &
# Pinta é parecido com Paint.NET do Windows.
# Bom para edições rápidas sem o peso do GIMP.`,
      },
      {
        lang: "bash",
        code: `# VS Code → Geany ou Featherpad (editores leves)
sudo apt install geany -y
geany arquivo.py &
# Geany pesa ~30 MB; VS Code pesa 300 MB+ por ser Electron.

# Featherpad é ainda mais minimalista, ideal pra editar configs:
sudo apt install featherpad -y
featherpad ~/.bashrc &`,
      },
      {
        lang: "bash",
        code: `# Outros pares úteis (instalar > nome leve > nome pesado)
sudo apt install zathura -y          # PDF (vs Adobe Reader pesado)
sudo apt install qpdfview -y         # alternativa Qt para PDF
sudo apt install qpwgraph -y         # patchbay áudio (vs Carla)
sudo apt install transmission-qt -y  # torrent (vs qBittorrent)
sudo apt install lxtask -y           # gerenciador processos (vs htop GUI)`,
      },
      {
        lang: "bash",
        code: `# Comparando peso (RAM) — abra cada um e rode em outro terminal:
ps -eo comm,rss --sort=-rss | head -n 15
# Exemplo de saída em uma máquina:
#   firefox        650000   (Firefox 650 MB)
#   element        420000   (Slack-like Element 420 MB)
#   joplin         180000   (Notion-like Joplin 180 MB)
#   featherpad      30000   (editor leve 30 MB)
#   geany           42000   (editor leve 42 MB)`,
      },
    ],
    points: [
      "Para quase todo app popular existe uma alternativa leve em Linux.",
      "Joplin substitui Notion para a maioria dos usos casuais e oferece criptografia.",
      "Element/Matrix é a melhor alternativa moderna ao Slack, descentralizada.",
      "Geany e Featherpad são editores leves; VS Code só vale a pena com extensões pesadas.",
      "Pinta cobre 90% das edições caseiras em uma fração do peso do GIMP.",
      "spotify-tui usa 30 MB em vez de 500 MB do Spotify oficial (precisa Premium).",
      "Iniciante comum: trocar tudo de uma vez e se frustrar — migre um app por semana.",
      "Iniciante comum: esperar funcionalidade idêntica — alternativas costumam ser 80% do original.",
      "Sempre meça o ganho com ps ou htop antes/depois, para ter dado real.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de migrar, exporte os dados do app pesado (Notion exporta Markdown, por exemplo). Migração com dados na mão é tranquila.",
      },
      {
        type: "info",
        content: "Sites como alternativeto.net listam alternativas comparando recursos. Bom ponto de partida para encontrar substitutos para qualquer app.",
      },
      {
        type: "warning",
        content: "Programas alternativos podem ter comunidade pequena. Se algo crítico depende de suporte rápido, pondere antes de migrar.",
      },
      {
        type: "success",
        content: "Quando achar um app leve que adora, indique para amigos. Comunidades pequenas crescem com boca a boca e doações.",
      },
    ],
  },
  {
    slug: "jogos-leves",
    section: "apps",
    title: "Jogos leves para Lubuntu",
    difficulty: "iniciante",
    subtitle: "Diversão sem precisar de placa de vídeo dedicada.",
    intro: `Quem nunca usou Linux costuma achar que jogar é impossível. Faz tempo que isso mudou: hoje a Steam roda na maioria dos jogos via Proton (uma camada de compatibilidade), e existem milhares de jogos nativos. Mas em uma máquina antiga rodando Lubuntu, o foco é diferente: jogos leves que não exigem GPU dedicada.

Pense em jogos clássicos: SuperTux, Frozen Bubble, OpenTTD, 0 A.D., Wesnoth. Todos rodam em hardware modesto, são gratuitos e divertidos. Vão te entreter por horas sem fazer o ventilador uivar. Para muitos, são até melhores que jogos AAA — design enxuto, foco em jogabilidade, sem microtransações.

Para coisas mais ambiciosas, dá para experimentar Steam com cuidado: instale, escolha jogos antigos ou indies leves, ative Proton e veja como roda. Não espere maravilhas em integrada de 10 anos atrás, mas surpresas acontecem. Stardew Valley, Hollow Knight, Celeste e Don't Starve rodam suavemente em hardware modesto.

Vamos passar pelos clássicos do repositório, pelos emuladores (Mednafen, RetroArch — para jogar Mega Drive, Super Nintendo, PS1) e pela Steam. No fim, você terá opções suficientes para nunca dizer "Linux não tem jogo".`,
    codes: [
      {
        lang: "bash",
        code: `# Jogos clássicos do repositório — todos rodam em qualquer máquina
sudo apt install supertux supertuxkart frozen-bubble \\
    pingus warmux openttd 0ad wesnoth -y

# Jogar:
supertux2          # plataforma estilo Mario
supertuxkart       # corrida estilo Mario Kart
frozen-bubble      # quebra-cabeça com bolhas
openttd            # gerenciador de transporte
0ad                # estratégia em tempo real
wesnoth            # estratégia em turnos`,
      },
      {
        lang: "bash",
        code: `# RetroArch — emulador universal (NES, SNES, Mega Drive, GBA, PS1)
sudo apt install retroarch -y
retroarch &

# Dentro do RetroArch:
# 1. Online Updater > Core Downloader > escolha o sistema
# 2. Carregar Conteúdo > selecione a ROM (.nes, .smc, .iso)
# Joga com teclado por padrão; controle USB funciona direto.`,
      },
      {
        lang: "bash",
        code: `# Mednafen — alternativa em terminal para emulação
sudo apt install mednafen -y
mednafen jogo.smc
# Lê SNES, Mega Drive, PSX, GBA. Configuração via teclas:
# Alt+Shift+1 (joystick virtual configura)
# F11 (volta ao tamanho normal)`,
      },
      {
        lang: "bash",
        code: `# Steam — instalar e habilitar Proton para rodar jogos Windows
sudo apt install steam -y
steam &

# Login na Steam, vá em:
# Steam > Configurações > Compatibilidade
# Marque "Habilitar Steam Play para todos os outros títulos"
# Escolha "Proton Experimental" como ferramenta padrão.
# Agora a maioria dos jogos Windows roda direto.`,
      },
      {
        lang: "bash",
        code: `# Verificar se um jogo Windows roda no Proton
# Acesse: https://www.protondb.com/
# Procure pelo nome do jogo.
# Notas:
#   Platinum = roda igual no Windows
#   Gold     = roda perfeito com pequena config
#   Silver   = roda mas com bugs menores
#   Bronze   = funciona mal
#   Borked   = não roda

# Antes de comprar um jogo, sempre confira o ProtonDB.`,
      },
      {
        lang: "bash",
        code: `# Lutris — gerenciador de jogos (Steam, Epic, GOG, emuladores)
sudo apt install lutris -y
lutris &
# Tem instaladores prontos para milhares de jogos.
# Procure o jogo, clique em "Install" e ele baixa tudo (Wine, Proton, etc.)`,
      },
      {
        lang: "bash",
        code: `# Monitorar FPS enquanto joga (precisa de mangohud)
sudo apt install mangohud -y

# Iniciar um jogo com overlay de FPS:
mangohud %command%   # cole isso em "Opções de inicialização" na Steam

# Ou no terminal:
mangohud supertuxkart
# Mostra FPS, uso de CPU/GPU/RAM no canto da tela.`,
      },
    ],
    points: [
      "Linux tem dezenas de jogos clássicos no repositório que rodam em qualquer máquina.",
      "RetroArch e Mednafen emulam consoles antigos (NES, SNES, PS1) sem complicação.",
      "Steam com Proton roda a maior parte dos jogos Windows; cheque ProtonDB antes.",
      "Lutris simplifica instalar jogos de Epic, GOG, Battle.net via Wine.",
      "MangoHud mostra FPS e uso de recursos sobre o jogo, ótimo para diagnosticar.",
      "Jogos AAA recentes pedem GPU dedicada — Lubuntu se sai melhor com indies e clássicos.",
      "Iniciante comum: tentar instalar Steam em máquina sem 3D ativo e culpar Linux pelo travamento.",
      "Iniciante comum: jogar com integrada e esperar 60 fps em jogo moderno — não vai rolar.",
      "0 A.D. e Wesnoth são gratuitos e tão profissionais quanto jogos pagos.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Para controle de Xbox/PS via USB, conecte e ele funciona automático. Bluetooth do PS4/PS5 às vezes precisa do pacote ds4drv.",
      },
      {
        type: "info",
        content: "Steam Deck roda Linux (SteamOS, baseado em Arch). Muito do que aprende em Lubuntu para jogos vale lá também.",
      },
      {
        type: "warning",
        content: "Jogos com anti-cheat invasivo (kernel-level) como Valorant, Fortnite, PUBG não funcionam no Linux. Não há volta para isso.",
      },
      {
        type: "danger",
        content: "Cuidado com sites que oferecem ROMs. Baixar ROM de jogo que você não possui é pirataria. Sites como GOG vendem clássicos legalizados.",
      },
    ],
  },
];
