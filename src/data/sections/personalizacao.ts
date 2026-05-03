import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "temas-lxqt",
    section: "personalizacao",
    title: "Temas do LXQt",
    difficulty: "iniciante",
    subtitle: "Trocando cores, bordas e estilo geral das janelas.",
    intro: `Tema é a roupa do seu sistema. O Lubuntu vem com uma roupa padrão (cinza azulado, bordas finas, fontes claras), mas trocar é fácil — e ajuda a deixar o computador com a sua cara. Pense como mudar o papel de parede do celular: o conteúdo continua o mesmo, só o visual muda.

No LXQt, "tema" é dividido em três coisinhas que se misturam: o tema do LXQt em si (cores do painel, do menu, das caixas de diálogo), o tema dos widgets Qt (botões, campos de texto, abas) e o tema do gerenciador de janelas Openbox (bordas das janelas, barra de título). Cada um se ajusta em um lugar diferente. Soa complicado, mas você descobre rápido onde fica cada coisa.

A ferramenta principal chama-se LXQt Configuration Center, que é só um menu com vários ícones. Para temas, você vai usar três entradas: "Aparência" (LXQt + Qt) e "Openbox Settings" (bordas). Tudo é GUI: clica, escolhe, aplica.

No fim deste capítulo, você terá um Lubuntu com a cara que quiser — claro, escuro, colorido, sóbrio. E saberá explicar a diferença entre os três níveis de tema, o que é meio-caminho para entender qualquer outro desktop Linux.`,
    codes: [
      {
        lang: "bash",
        code: `# Abra o Centro de Configuração do LXQt pelo menu, ou digite no terminal:
lxqt-config
# Abre uma janela cheia de ícones de configuração.
# Procure "Aparência" (Appearance).`,
      },
      {
        lang: "bash",
        code: `# Atalho direto para a tela de aparência:
lxqt-config-appearance
# Aba "Tema do LXQt": muda cores do painel e menus.
# Aba "Estilo dos widgets": muda botões e campos (engines: Breeze, Fusion, etc.).
# Aba "Tema de ícones": muda os iconezinhos.
# Aba "Fonte": muda a fonte padrão.`,
      },
      {
        lang: "bash",
        code: `# Para mudar bordas e barra de título das janelas, abra o Openbox:
obconf-qt
# Aba "Tema": escolha entre Clearlooks, Onyx, Mikachu...
# Os temas Openbox vêm em /usr/share/themes/
ls /usr/share/themes/
# saída: Clearlooks  Mikachu  Onyx  ...`,
      },
      {
        lang: "bash",
        code: `# Instalar mais temas Qt populares:
sudo apt update
sudo apt install qt5-style-kvantum qt5-style-kvantum-themes -y
# Depois, abra a aparência e escolha "kvantum" como engine.
# Para configurar variantes do Kvantum:
kvantummanager`,
      },
      {
        lang: "bash",
        code: `# Onde os temas ficam guardados:
# Globais (todos os usuários):
ls /usr/share/lxqt/themes/
# Só para você:
ls ~/.local/share/lxqt/themes/   # pode não existir ainda
# Coloque temas baixados em ~/.local/share/lxqt/themes/<nome>/`,
      },
      {
        lang: "bash",
        code: `# Tema escuro rápido: vá em lxqt-config-appearance
# e escolha "Frost" ou "Dark" no tema do LXQt,
# depois em "Estilo dos widgets" escolha "Breeze" e marque "Dark".
# Aplique e veja a mágica.

# Se algo ficar estranho (texto sumindo, contraste ruim),
# volte ao tema padrão "Lubuntu Arc" e tente de novo.`,
      },
    ],
    points: [
      "Tema no LXQt tem três camadas: tema LXQt, estilo de widgets Qt e tema Openbox.",
      "lxqt-config-appearance abre direto a tela de aparência.",
      "obconf-qt cuida das bordas e barra de título das janelas.",
      "Temas globais ficam em /usr/share/themes e /usr/share/lxqt/themes.",
      "Temas só seus ficam em ~/.local/share/lxqt/themes/ (crie a pasta se não existir).",
      "Kvantum é uma engine Qt poderosa para temas mais elaborados.",
      "Iniciante comum: trocar só o tema LXQt e estranhar que botões continuam iguais — falta mudar o estilo dos widgets também.",
      "Iniciante comum: instalar tema GTK pensando que muda tudo — no LXQt o que manda é Qt.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Se quiser testar um tema sem se comprometer, faça as mudanças, faça login em outro usuário e veja como fica antes de aplicar de vez no seu perfil.",
      },
      {
        type: "warning",
        content: "Temas baixados de sites aleatórios podem trazer arquivos quebrados. Prefira opensesktop.org e o repositório oficial do Lubuntu antes de sair clicando em qualquer link.",
      },
      {
        type: "info",
        content: "Aplicativos GTK (como Firefox e GIMP) usam outro sistema de tema. Para casar visualmente, instale lxqt-qtplugin e um tema GTK parecido com seu Qt.",
      },
    ],
  },
  {
    slug: "icones-lubuntu",
    section: "personalizacao",
    title: "Ícones e cursores",
    difficulty: "iniciante",
    subtitle: "Trocando os iconezinhos do menu, da área de trabalho e do mouse.",
    intro: `Ícones são as figurinhas pequenas que aparecem em todo lugar: no menu, no gerenciador de arquivos, na barra de tarefas. Um pacote de ícones é uma coleção dessas figurinhas com um estilo próprio (planos, coloridos, monocromáticos). Trocar todos de uma vez muda completamente a cara do sistema, sem mexer em mais nada.

O cursor do mouse também é um "ícone" especial. O Lubuntu usa por padrão o cursor "Adwaita" (preto e branco simples). Existem temas de cursor com setas mais grossas, animações e até cores. Útil para quem tem dificuldade enxergando ou só quer algo mais bonito.

A grande sacada: ícones e cursores no Linux seguem um padrão chamado "freedesktop". Isso significa que um pacote de ícones funciona em qualquer ambiente — Lubuntu, Xubuntu, Kubuntu, GNOME — sem adaptação. Você baixa uma vez e usa em todo lugar.

Vamos ver como instalar pacotes de ícones do repositório oficial, como adicionar pacotes baixados manualmente e como aplicar tudo isso pela interface gráfica.`,
    codes: [
      {
        lang: "bash",
        code: `# Pacotes de ícones populares no repositório oficial:
sudo apt update
sudo apt install papirus-icon-theme -y          # Papirus: colorido, moderno
sudo apt install numix-icon-theme -y            # Numix: plano e elegante
sudo apt install breeze-icon-theme -y           # Breeze: padrão do KDE
# Depois de instalar, escolha em lxqt-config-appearance > Tema de ícones`,
      },
      {
        lang: "bash",
        code: `# Onde os ícones ficam:
ls /usr/share/icons/
# saída: Adwaita  breeze  hicolor  Papirus  ...

# Para instalar tema só para você (sem sudo):
mkdir -p ~/.local/share/icons
# baixe um .tar.gz, descompacte dentro dessa pasta:
tar -xzf MeuTemaIcones.tar.gz -C ~/.local/share/icons/`,
      },
      {
        lang: "bash",
        code: `# Cursores: instalar pacote popular
sudo apt install dmz-cursor-theme -y
sudo apt install breeze-cursor-theme -y

# Aplicar pelo terminal (mudança imediata):
# Abra lxqt-config-appearance > Aba "Tema de cursor"
# Ou edite manualmente:
nano ~/.icons/default/index.theme
# conteúdo:
# [Icon Theme]
# Inherits=breeze_cursors`,
      },
      {
        lang: "bash",
        code: `# Listar todos os temas de cursor disponíveis:
ls /usr/share/icons/ | grep -i cursor
# saída exemplo:
# Adwaita
# breeze_cursors
# DMZ-Black
# DMZ-White`,
      },
      {
        lang: "bash",
        code: `# Atualizar o cache de ícones (se um tema novo não aparecer):
sudo gtk-update-icon-cache /usr/share/icons/Papirus
# Em geral, só fazer logout e login resolve.

# Testar visualmente: abra um menu, abra o PCManFM-Qt
# e veja se os ícones mudaram.`,
      },
    ],
    points: [
      "Ícones e cursores seguem o padrão freedesktop e funcionam em qualquer desktop Linux.",
      "Pacotes ficam em /usr/share/icons (globais) ou ~/.local/share/icons (só seu).",
      "Aplique em lxqt-config-appearance, abas 'Tema de ícones' e 'Tema de cursor'.",
      "Papirus, Numix e Breeze são opções populares e bem mantidas no apt.",
      "O cursor padrão pode ser trocado para um maior se você tem dificuldade de enxergar.",
      "Faça logout/login depois de instalar tema novo se ele não aparecer na lista.",
      "Iniciante comum: copiar ícones para a pasta errada e achar que não funciona — precisa ser /usr/share/icons ou ~/.local/share/icons.",
      "Iniciante comum: confundir 'tema do sistema' com 'tema de ícones' — são duas configurações diferentes.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Papirus tem três variantes: Papirus, Papirus-Dark e Papirus-Light. Escolha a que combina com o seu tema geral para tudo ficar harmonioso.",
      },
      {
        type: "info",
        content: "Aplicações Snap e Flatpak às vezes ignoram o tema de ícones do sistema porque rodam isoladas. É chato, mas é normal — não é falha sua.",
      },
      {
        type: "warning",
        content: "Cursores muito grandes (acima de 48px) podem ficar cortados em algumas aplicações antigas. Teste antes de configurar tamanhos exagerados.",
      },
    ],
  },
  {
    slug: "fontes-sistema",
    section: "personalizacao",
    title: "Fontes do sistema",
    difficulty: "iniciante",
    subtitle: "Instalando, escolhendo e ajustando renderização de fontes.",
    intro: `Fonte é o desenho das letras. Pode parecer detalhe, mas trocar a fonte do sistema muda como você se sente usando o computador. Letras mais arredondadas dão ar amigável; letras mais técnicas (monoespaçadas) ajudam a ler código. O Lubuntu vem com a fonte "Noto Sans" como padrão — boa, mas você pode trocar à vontade.

Existem dois tipos importantes: fontes proporcionais (cada letra tem sua largura — usadas em textos comuns) e fontes monoespaçadas (todas as letras ocupam o mesmo espaço — usadas em terminal e código). Você define cada uma separadamente: uma para o sistema em geral, outra para o terminal.

Renderização é como o computador desenha a fonte na tela. Um detalhe técnico chamado "hinting" e outro chamado "antialiasing" controlam se as letras ficam suaves ou cristalinas. Em monitores de baixa resolução (laptops antigos), ajustar isso faz uma diferença visível. Em telas modernas (Full HD em diante), o padrão já fica bom.

Vamos ver como instalar fontes novas (incluindo fontes da Microsoft e fontes para programar), como trocar a fonte global e como ajustar a renderização.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar pacotes de fontes do repositório
sudo apt update
sudo apt install fonts-noto -y                 # Noto: cobre quase todo idioma
sudo apt install fonts-firacode -y             # Fira Code: ótima para programar (com ligaduras)
sudo apt install fonts-jetbrains-mono -y       # JetBrains Mono: outra ótima para código
sudo apt install fonts-cantarell -y            # Cantarell: redonda e moderna`,
      },
      {
        lang: "bash",
        code: `# Para usar fontes da Microsoft (Arial, Times, Verdana...)
# precisa aceitar o EULA durante a instalação.
sudo apt install ttf-mscorefonts-installer -y
# Aceite o termo com Tab até OK e Enter.`,
      },
      {
        lang: "bash",
        code: `# Instalar fonte baixada manualmente (.ttf ou .otf)
# Globais (todos os usuários):
sudo cp MinhaFonte.ttf /usr/share/fonts/truetype/
sudo fc-cache -fv         # atualiza o cache de fontes

# Só para você:
mkdir -p ~/.local/share/fonts
cp MinhaFonte.ttf ~/.local/share/fonts/
fc-cache -fv`,
      },
      {
        lang: "bash",
        code: `# Listar fontes instaladas
fc-list | head            # mostra as primeiras
fc-list | wc -l           # conta total
# exemplo: 482

# Filtrar por nome:
fc-list | grep -i "fira"`,
      },
      {
        lang: "bash",
        code: `# Mudar fonte do sistema:
# Abra lxqt-config-appearance > aba "Fontes"
# Escolha família, tamanho, suavização (antialiasing) e hinting.

# Sugestão para legibilidade em tela:
# - Família: Noto Sans  ou  Cantarell
# - Tamanho: 10-11pt
# - Antialiasing: ativado
# - Hinting: Slight (em telas Full HD) ou Full (em telas antigas)`,
      },
      {
        lang: "bash",
        code: `# Para o terminal QTerminal:
# Editar > Preferências > Aparência > Fonte
# Recomendado: Fira Code 11pt ou JetBrains Mono 11pt
# Ative ligaduras se a fonte tiver (=> vira uma única seta bonita).`,
      },
    ],
    points: [
      "Fontes proporcionais para texto, monoespaçadas para terminal/código.",
      "Pacotes começam com 'fonts-' no apt: fonts-firacode, fonts-noto, etc.",
      "Globais vão em /usr/share/fonts/, suas em ~/.local/share/fonts/.",
      "Sempre rode fc-cache -fv depois de copiar fontes manualmente.",
      "ttf-mscorefonts-installer traz Arial, Times etc. (precisa aceitar EULA).",
      "Em monitores HD/4K o padrão já fica bom; em telas antigas, ajustar hinting ajuda.",
      "Iniciante comum: copiar fonte para a pasta certa, esquecer fc-cache e achar que 'não instalou'.",
      "Iniciante comum: trocar a fonte do sistema e estranhar que o terminal continua igual — terminal tem configuração própria.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Para programar, instale Fira Code ou JetBrains Mono. As ligaduras transformam '!=' em '≠' visualmente, sem mudar o código real. Vicia rápido.",
      },
      {
        type: "info",
        content: "fc-list mostra TODAS as fontes registradas. Use fc-match 'Fira Code' para ver qual fonte o sistema escolheria de fato.",
      },
      {
        type: "warning",
        content: "Não abuse: ter centenas de fontes instaladas atrasa a abertura de programas como LibreOffice e Inkscape, que carregam a lista inteira ao abrir.",
      },
    ],
  },
  {
    slug: "papel-parede",
    section: "personalizacao",
    title: "Papel de parede",
    difficulty: "iniciante",
    subtitle: "Mudando o fundo da área de trabalho e usando rotação automática.",
    intro: `O papel de parede (wallpaper) é a foto que aparece atrás dos ícones da área de trabalho. É a personalização mais visível — em segundos você troca o "humor" do desktop. O Lubuntu vem com algumas opções padrão (paisagens suaves, gradientes), mas você pode usar qualquer imagem JPG ou PNG.

No LXQt, quem cuida da área de trabalho é o PCManFM-Qt (o gerenciador de arquivos). Isso significa que mudar o papel de parede é configuração do PCManFM-Qt, não do "sistema" abstrato. Faz sentido depois que você sabe, mas confunde no começo.

Existem três jeitos de aplicar: clicar com o botão direito na área de trabalho e escolher "Configurações da área de trabalho", abrir o gerenciador de arquivos e ir nas preferências, ou usar o terminal com o comando pcmanfm-qt --set-wallpaper. Para quem quer trocar automaticamente a cada X minutos (slideshow), instala-se um aplicativo extra chamado variety.

Vamos ver os três caminhos e configurar uma rotação bonita usando suas próprias fotos.`,
    codes: [
      {
        lang: "bash",
        code: `# Caminho 1 (mais fácil):
# Clique com botão direito na área de trabalho > "Configurações da área de trabalho"
# Aba "Plano de fundo" > escolha imagem > clique Aplicar.

# Modo de exibição:
# - Esticar: distorce, ruim
# - Ajustar: mantém proporção, sobra borda
# - Cobrir: preenche, corta um pouco
# - Centralizar: tamanho original no meio`,
      },
      {
        lang: "bash",
        code: `# Caminho 2 (terminal, sem GUI):
pcmanfm-qt --set-wallpaper="/home/$USER/Imagens/minha_foto.jpg"

# Modo de exibição:
pcmanfm-qt --wallpaper-mode=stretch     # esticar
pcmanfm-qt --wallpaper-mode=fit         # ajustar
pcmanfm-qt --wallpaper-mode=crop        # cobrir
pcmanfm-qt --wallpaper-mode=center      # centralizar`,
      },
      {
        lang: "bash",
        code: `# Onde ficam os papéis de parede do Lubuntu:
ls /usr/share/lubuntu/wallpapers/
# saída: lubuntu-default-wallpaper.jpg  ...

# Crie sua coleção pessoal:
mkdir -p ~/Imagens/wallpapers
# Copie suas fotos para lá e aponte o seletor para essa pasta.`,
      },
      {
        lang: "bash",
        code: `# Slideshow automático com Variety:
sudo apt install variety -y

# Abra Variety pelo menu (ou variety no terminal).
# Configure a pasta de imagens, intervalo (ex: 10 min) e
# fontes online (Unsplash, Wallhaven). Pronto, rotação automática.`,
      },
      {
        lang: "bash",
        code: `# Trocar papel via script (útil para automação):
cat > ~/trocar_wallpaper.sh << 'EOF'
#!/bin/bash
# Sorteia uma imagem da pasta e aplica como wallpaper
ARQ=$(ls ~/Imagens/wallpapers/*.jpg | shuf -n 1)
pcmanfm-qt --set-wallpaper="$ARQ"
EOF

chmod +x ~/trocar_wallpaper.sh
# Rode com:
~/trocar_wallpaper.sh`,
      },
    ],
    points: [
      "No LXQt, papel de parede é responsabilidade do PCManFM-Qt.",
      "Clicar com botão direito na área de trabalho é o caminho mais rápido.",
      "Modo de exibição mais usado é 'crop' (preencher cortando se preciso).",
      "Variety faz slideshow automático com fontes online incluídas.",
      "Imagens em ~/Imagens/wallpapers/ é uma boa convenção pessoal.",
      "Comando pcmanfm-qt --set-wallpaper permite scripts de automação.",
      "Iniciante comum: salvar imagem em /tmp e ela 'sumir' depois — /tmp é apagada ao desligar.",
      "Iniciante comum: aplicar wallpaper grande em tela pequena e estranhar que fica pixelado — escolha imagem com resolução compatível.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Para wallpapers em alta resolução, sites como unsplash.com e wallhaven.cc são ótimos. Baixe na resolução do seu monitor (geralmente 1920x1080 ou 1366x768).",
      },
      {
        type: "info",
        content: "Se você usar dois monitores, pode definir wallpapers diferentes em cada um pela aba 'Plano de fundo' das configurações do desktop.",
      },
      {
        type: "warning",
        content: "Imagens muito grandes (>10MB ou >4K) podem deixar o desktop lento ao iniciar. Redimensione para o tamanho do monitor antes de usar.",
      },
    ],
  },
  {
    slug: "atalhos-teclado",
    section: "personalizacao",
    title: "Atalhos de teclado",
    difficulty: "iniciante",
    subtitle: "Criando combinações que abrem programas e fazem ações com uma tecla.",
    intro: `Atalho de teclado é uma combinação de teclas (geralmente uma "tecla âncora" como Ctrl, Alt ou Super junto com uma letra) que dispara uma ação. Em vez de procurar o programa no menu, você aperta Ctrl+Alt+T e o terminal abre na hora. Quem domina atalhos trabalha o dobro mais rápido.

A "tecla Super" é aquela com o logo do Windows (em teclados PC) ou Command (em alguns teclados Mac). Em Linux ela vira o atalho favorito para abrir lançadores e janelas, justamente porque não conflita com nada de aplicativo.

No Lubuntu, atalhos globais (que funcionam em qualquer lugar) são gerenciados pelo lxqt-config-globalkeyshortcuts. Ali você cria combinação + comando. Para atalhos de janelas (mover, maximizar, fechar), o responsável é o Openbox, com seu próprio arquivo de configuração XML.

Vamos cadastrar atalhos úteis: abrir terminal, abrir navegador, screenshot, e ver como editar atalhos do Openbox para gerenciar janelas como um profissional.`,
    codes: [
      {
        lang: "bash",
        code: `# Abrir o gerenciador de atalhos globais:
lxqt-config-globalkeyshortcuts
# Ou: Menu > Preferências > Atalhos de teclado

# Clique em "Adicionar" > "Comando"
# Defina a tecla e o comando, ex: Ctrl+Alt+T -> qterminal`,
      },
      {
        lang: "bash",
        code: `# Atalhos clássicos para configurar:
# Ctrl+Alt+T  -> qterminal              (abrir terminal)
# Super+E     -> pcmanfm-qt             (abrir gerenciador de arquivos)
# Super+B     -> firefox                (abrir navegador)
# Print       -> lximage-qt --screenshot (capturar tela)
# Super+L     -> lxqt-leave --lockscreen (bloquear tela)`,
      },
      {
        lang: "bash",
        code: `# Atalhos do Openbox (gerenciam janelas)
# Arquivo: ~/.config/openbox/lxqt-rc.xml
# Edite com cuidado — é XML.

# Para editar com um editor de texto:
nano ~/.config/openbox/lxqt-rc.xml
# Procure a seção <keyboard>...</keyboard>`,
      },
      {
        lang: "xml",
        code: `<!-- Exemplo de bloco em ~/.config/openbox/lxqt-rc.xml -->
<keybind key="W-Left">
  <!-- Super+Esquerda: cola janela na metade esquerda -->
  <action name="UnmaximizeFull"/>
  <action name="MoveResizeTo">
    <x>0</x><y>0</y>
    <width>50%</width><height>100%</height>
  </action>
</keybind>

<keybind key="W-Right">
  <!-- Super+Direita: cola janela na metade direita -->
  <action name="UnmaximizeFull"/>
  <action name="MoveResizeTo">
    <x>50%</x><y>0</y>
    <width>50%</width><height>100%</height>
  </action>
</keybind>`,
      },
      {
        lang: "bash",
        code: `# Depois de editar o XML, recarregue o Openbox sem reboot:
openbox --reconfigure
# saída: (nada, se deu certo)
# Se houver erro de XML, aparece no terminal — corrija a sintaxe.`,
      },
      {
        lang: "bash",
        code: `# Listar atalhos atuais (lendo o XML):
grep -A1 "keybind key" ~/.config/openbox/lxqt-rc.xml | head -40

# Se algo der muito errado, restaure o padrão:
cp /etc/xdg/openbox/LXQt/rc.xml ~/.config/openbox/lxqt-rc.xml
openbox --reconfigure`,
      },
    ],
    points: [
      "Atalhos globais: configure em lxqt-config-globalkeyshortcuts (interface gráfica).",
      "Atalhos de janelas: edite ~/.config/openbox/lxqt-rc.xml (XML).",
      "Tecla Super (logo Windows) é aparece como W- no Openbox e Super- na interface LXQt.",
      "Sempre rode 'openbox --reconfigure' depois de editar o XML.",
      "Print é o atalho clássico para screenshot — aponte para lximage-qt.",
      "Atalhos comuns (Ctrl+C, Ctrl+V) são da aplicação, não do sistema — não mude.",
      "Iniciante comum: editar XML do Openbox e quebrar a sintaxe — sempre faça backup antes.",
      "Iniciante comum: criar dois atalhos com mesma combinação e ficar com um 'fantasma' que não funciona.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de editar o lxqt-rc.xml, faça backup: cp ~/.config/openbox/lxqt-rc.xml ~/.config/openbox/lxqt-rc.xml.bak. Se algo quebrar, é só restaurar.",
      },
      {
        type: "warning",
        content: "Não use Ctrl+Alt+F1 a F6 como atalho — essas combinações trocam para terminais virtuais (TTY) do sistema e podem te tirar do desktop.",
      },
      {
        type: "info",
        content: "Se você usa vários idiomas no teclado, lembre que atalhos com letras seguem o layout atual. Em teclado ABNT2, Super+Ç pode não funcionar como esperado em outro layout.",
      },
    ],
  },
  {
    slug: "autostart-apps",
    section: "personalizacao",
    title: "Aplicativos no início (autostart)",
    difficulty: "iniciante",
    subtitle: "Programas que abrem sozinhos quando você liga o computador.",
    intro: `Autostart é a lista de programas que abrem automaticamente quando você faz login no Lubuntu. É como deixar a cafeteira programada: você liga o computador, vai escovar os dentes, e quando volta o WhatsApp Desktop, o e-mail e o Spotify já estão prontos.

Cada usuário tem sua própria lista, guardada em arquivos .desktop (atalhos especiais que descrevem o programa). O Lubuntu segue um padrão freedesktop: arquivos em ~/.config/autostart/ são executados no login. Isso significa que qualquer ambiente Linux moderno entende esse mesmo formato.

Tem dois jeitos de cadastrar: pela interface gráfica (lxqt-config-session, aba "Autostart") ou colocando um .desktop manualmente na pasta. A interface é mais fácil, mas saber editar o arquivo direto é útil quando você quer passar parâmetros específicos ou agendar um script seu.

Cuidado, porém: cada programa no autostart consome RAM e atrasa o login. Em máquina antiga (que é onde Lubuntu costuma rodar), exagerar pode tirar a graça da leveza. Vamos ver como adicionar, remover e quais cuidados tomar.`,
    codes: [
      {
        lang: "bash",
        code: `# Abrir o gerenciador de sessão (aba autostart):
lxqt-config-session
# Aba "Autostart" mostra lista atual.
# Botão "Adicionar" pede comando + nome.`,
      },
      {
        lang: "bash",
        code: `# Onde ficam os arquivos autostart do usuário:
ls ~/.config/autostart/
# Cada arquivo é um .desktop apontando para um programa.

# Criar um manualmente (exemplo: abrir Firefox no login):
nano ~/.config/autostart/firefox.desktop`,
      },
      {
        lang: "ini",
        code: `# Conteúdo de ~/.config/autostart/firefox.desktop
[Desktop Entry]
Type=Application
Name=Firefox
Exec=firefox
Icon=firefox
X-GNOME-Autostart-enabled=true
# Comentários começam com # e são ignorados.`,
      },
      {
        lang: "bash",
        code: `# Para desativar temporariamente sem apagar:
# Edite o arquivo e troque para:
# X-GNOME-Autostart-enabled=false
# Ou na interface, desmarque a caixinha do programa.

# Para apagar de vez:
rm ~/.config/autostart/firefox.desktop`,
      },
      {
        lang: "bash",
        code: `# Atrasar o início para não pesar tudo de uma vez:
# Use 'sleep' antes do comando:
nano ~/.config/autostart/spotify.desktop`,
      },
      {
        lang: "ini",
        code: `# Spotify abrindo 30 segundos depois do login
[Desktop Entry]
Type=Application
Name=Spotify
Exec=sh -c "sleep 30 && spotify"
Icon=spotify
X-GNOME-Autostart-enabled=true`,
      },
      {
        lang: "bash",
        code: `# Programas que TODOS os usuários abrem no login:
ls /etc/xdg/autostart/
# Mexer aqui é "nível sistema" — precisa sudo.
# Útil em laboratórios, quiosques.`,
      },
    ],
    points: [
      "Arquivos .desktop em ~/.config/autostart/ são executados ao fazer login.",
      "lxqt-config-session > aba Autostart é a forma gráfica de gerenciar.",
      "X-GNOME-Autostart-enabled=false desativa sem apagar.",
      "sleep N antes do Exec atrasa o início para não pesar tudo junto.",
      "Programas globais ficam em /etc/xdg/autostart/ (precisa sudo).",
      "Cada autostart consome RAM e atrasa o login — modere em máquinas fracas.",
      "Iniciante comum: por o navegador no autostart e reclamar que o sistema está 'lento' — é o navegador comendo memória.",
      "Iniciante comum: editar arquivo .desktop com sintaxe errada e o programa silenciosamente não abrir.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Em vez de scripts maiores no autostart, crie um único script ~/bin/login-tasks.sh e chame ele. Fica organizado e fácil de manter.",
      },
      {
        type: "warning",
        content: "Cuidado ao colocar programas que pedem internet (Discord, Telegram) — se o Wi-Fi ainda não conectou, eles podem dar erro. Use sleep para esperar.",
      },
      {
        type: "info",
        content: "Programas como NetworkManager Applet, gestor de bateria e área de notificação já vêm no autostart do Lubuntu por padrão. Não desative se não souber o que faz.",
      },
    ],
  },
  {
    slug: "multi-area-trabalho",
    section: "personalizacao",
    title: "Múltiplas áreas de trabalho",
    difficulty: "iniciante",
    subtitle: "Espalhe janelas em desktops virtuais para organizar melhor.",
    intro: `Imagine que sua mesa de verdade tivesse vários "andares". No primeiro, papéis do trabalho. No segundo, projeto pessoal. No terceiro, navegação e Netflix. Para trocar de assunto, é só pular um andar. Áreas de trabalho virtuais (workspaces) são exatamente isso, só que dentro do computador.

O Lubuntu vem configurado com 2 áreas por padrão, mas você pode aumentar para 4, 6, 9 — o que fizer sentido. Cada uma é independente: tem suas próprias janelas abertas, mas compartilha papel de parede, painel e barra de tarefas. Você troca entre elas com Ctrl+Alt+Esquerda/Direita ou clicando no "pager" (mini-mapa) no painel.

A vantagem é organização mental. Em vez de Alt+Tab procurando entre 20 janelas, você vai direto à área certa. Programadores costumam usar uma área para o editor, outra para o navegador, outra para o terminal. Estudantes podem ter "estudo" e "lazer" separados.

Vamos ver como ajustar a quantidade, como mover janelas entre áreas e como usar atalhos para voar entre elas. Depois disso, voltar a um único desktop parece pequeno demais.`,
    codes: [
      {
        lang: "bash",
        code: `# Configurar quantidade de áreas:
# Clique com botão direito no Pager (mini-mapa no painel)
# > "Configurar Pager" > defina "Número de desktops"
# Ou pelo Openbox:
obconf-qt
# Aba "Áreas de trabalho" > defina o número.`,
      },
      {
        lang: "bash",
        code: `# Atalhos padrão para navegar:
# Ctrl + Alt + Esquerda  -> área anterior
# Ctrl + Alt + Direita   -> próxima área
# Ctrl + Alt + Home/End  -> primeira/última área

# Mover JANELA junto:
# Ctrl + Alt + Shift + Esquerda/Direita`,
      },
      {
        lang: "bash",
        code: `# Adicionar o widget "Pager de Desktops" se sumir:
# Botão direito no painel > "Configurar painel"
# > Painel > "Adicionar plugins" > "Pager de Desktops"`,
      },
      {
        lang: "bash",
        code: `# Mover janela atual para outra área via menu:
# Botão direito na barra de título > "Enviar para área" > escolha
# Ou aperte Alt+Espaço e use o menu da janela.`,
      },
      {
        lang: "xml",
        code: `<!-- Atalho personalizado em ~/.config/openbox/lxqt-rc.xml -->
<keybind key="W-1">
  <!-- Super+1 vai para área 1 -->
  <action name="GoToDesktop"><to>1</to></action>
</keybind>
<keybind key="W-2">
  <action name="GoToDesktop"><to>2</to></action>
</keybind>
<keybind key="W-3">
  <action name="GoToDesktop"><to>3</to></action>
</keybind>
<keybind key="W-4">
  <action name="GoToDesktop"><to>4</to></action>
</keybind>`,
      },
      {
        lang: "bash",
        code: `# Recarregue o Openbox para aplicar:
openbox --reconfigure

# Agora Super+1, Super+2 etc. teleportam você direto.`,
      },
    ],
    points: [
      "Áreas de trabalho são 'andares' independentes para organizar janelas.",
      "Padrão do Lubuntu são 2 áreas; configure mais em obconf-qt.",
      "Ctrl+Alt+Esquerda/Direita troca entre áreas.",
      "Adicione 'Shift' aos atalhos para levar a janela atual junto.",
      "Pager no painel mostra mini-mapa visual das áreas.",
      "Atalhos Super+1/2/3 são clássicos para teleporte direto.",
      "Iniciante comum: criar 9 áreas e nunca usar — comece com 2 ou 3 e cresça se sentir falta.",
      "Iniciante comum: 'perder' uma janela e achar que ela fechou — está em outra área.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Combine áreas com regras do Openbox: o Firefox pode sempre abrir na área 2, o Telegram sempre na área 3. Isso vira hábito automático rápido.",
      },
      {
        type: "info",
        content: "Áreas não consomem RAM extra — são só uma reorganização visual. Pode usar à vontade que não pesa o sistema.",
      },
      {
        type: "warning",
        content: "Não confunda área de trabalho virtual (workspaces) com sessão de usuário. Cada usuário tem suas próprias áreas, mas elas vivem dentro da mesma sessão.",
      },
    ],
  },
  {
    slug: "conky-monitor",
    section: "personalizacao",
    title: "Conky: monitor leve no desktop",
    difficulty: "intermediario",
    subtitle: "Estatísticas do sistema desenhadas direto na área de trabalho.",
    intro: `Conky é um programinha mágico que desenha texto e gráficos sobre o seu papel de parede, sem janela e sem moldura. Você vê CPU, RAM, temperatura, tráfego de rede, hora — tudo flutuando no desktop. Em laptop antigo onde cada MB importa, é uma forma elegante de ver o que o sistema está fazendo sem abrir o Monitor de Sistema.

A configuração toda fica em um arquivo de texto chamado .conkyrc no seu diretório home. É um arquivo Lua (uma linguagem de script bem simples), mas você não precisa programar nada — só ajustar valores e copiar/colar blocos prontos. A internet está cheia de configurações Conky bonitas para usar de inspiração.

Conky é leve (geralmente menos de 10 MB de RAM) mas pode pesar se você abusar de gráficos animados ou intervalos de atualização muito curtos. A regra de ouro: comece simples (CPU, RAM, hora), veja se está rápido, e só depois adicione mais.

Vamos instalar, criar uma configuração mínima, deixar ela iniciar com o sistema e ver onde encontrar configurações prontas e bonitas para inspirar.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar Conky e suas dependências
sudo apt update
sudo apt install conky-all -y

# 'conky-all' já vem com tudo (Lua, Imlib2, Cairo).
# Para uma versão mais leve, use só 'conky-std'.`,
      },
      {
        lang: "bash",
        code: `# Rode pela primeira vez (com configuração padrão)
conky &
# Aparece um bloco de texto cinza no canto da tela.
# Para fechar: pkill conky`,
      },
      {
        lang: "bash",
        code: `# Crie sua configuração personalizada
nano ~/.conkyrc`,
      },
      {
        lang: "ini",
        code: `-- ~/.conkyrc — versão minimalista
conky.config = {
    alignment = 'top_right',     -- canto superior direito
    background = true,           -- roda como daemon
    update_interval = 2,         -- atualiza a cada 2s
    own_window = true,
    own_window_type = 'desktop', -- fica colado no desktop
    own_window_transparent = true,
    use_xft = true,
    font = 'Noto Sans:size=10',
    default_color = 'white',
    minimum_width = 220,
    border_inner_margin = 10,
}

conky.text = [[
\${time %A, %d de %B} \${alignr}\${time %H:%M}
\${hr}
CPU: \${cpu}% \${alignr}\${cpubar 8,80}
RAM: \${memperc}% \${alignr}\${membar 8,80}
Uso disco /: \${fs_used_perc /}% \${alignr}\${fs_bar 8,80 /}
\${hr}
Up:   \${upspeed} \${alignr}\${downspeed} :Down
]]`,
      },
      {
        lang: "bash",
        code: `# Rodar com a nova config:
pkill conky        # mata o anterior
conky -c ~/.conkyrc &
# Veja seu painelzinho aparecer no canto.`,
      },
      {
        lang: "ini",
        code: `# Para iniciar com o sistema, crie ~/.config/autostart/conky.desktop
[Desktop Entry]
Type=Application
Name=Conky
Exec=sh -c "sleep 5 && conky -c /home/USUARIO/.conkyrc"
Icon=conky
X-GNOME-Autostart-enabled=true
# Substitua USUARIO pelo seu nome de usuário.
# O sleep evita conflito com outros programas iniciando juntos.`,
      },
      {
        lang: "bash",
        code: `# Onde achar configs Conky prontas e bonitas:
# - https://github.com/brndnmtthws/conky/wiki
# - r/Conky no Reddit
# - opendesktop.org (categoria Conky)

# Salve a config em ~/.conkyrc, ajuste fontes/cores, aproveite.`,
      },
    ],
    points: [
      "Conky desenha estatísticas direto sobre o papel de parede, sem janela.",
      "Configuração fica em ~/.conkyrc usando sintaxe Lua simples.",
      "update_interval em segundos: 2-5 é equilibrado, 1 pesa, 10 fica desatualizado.",
      "alignment controla onde aparece: top_right, top_left, bottom_right, etc.",
      "Use 'pkill conky' para fechar e relançar com nova config.",
      "Para iniciar no boot, crie autostart com sleep para evitar conflitos.",
      "Iniciante comum: configurar update_interval=1 e queixar-se que o Conky 'pesa' — aumente para 2 ou 3.",
      "Iniciante comum: editar .conkyrc com sintaxe errada e o Conky abrir e fechar imediatamente — rode no terminal sem & para ver o erro.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Para depurar, rode 'conky -c ~/.conkyrc' SEM o & no final. Erros de sintaxe aparecem no terminal e te mostram a linha exata.",
      },
      {
        type: "info",
        content: "Conky entende centenas de variáveis: ${cpu}, ${memperc}, ${fs_used}, ${time}, ${battery}, ${wireless_essid}. Veja a wiki oficial para a lista completa.",
      },
      {
        type: "warning",
        content: "Se você usar Conky com gráficos pesados (cairo, lua scripts complexos) em laptop antigo, vai ver a CPU subir. Comece simples e cresça aos poucos.",
      },
      {
        type: "success",
        content: "Conky combinado com um wallpaper bonito vira aquele 'desktop dos sonhos' que aparece em fórum. Vale o esforço de configurar bem uma vez só.",
      },
    ],
  },
];
