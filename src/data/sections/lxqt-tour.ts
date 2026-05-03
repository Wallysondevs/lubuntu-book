import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "visao-geral-lxqt",
    section: "lxqt-tour",
    title: "Visão geral do LXQt",
    difficulty: "iniciante",
    subtitle: "O que é a área de trabalho do Lubuntu e por que ela é tão leve.",
    intro: `O LXQt é o "rosto" do Lubuntu: aquela tela com painel, menu, ícones e janelas que você vê depois de ligar o computador. Pense nele como o salão de entrada de uma casa. A casa em si (o Linux) está toda construída por baixo, mas é no salão que você decide para onde ir, qual programa abrir, onde guardar suas coisas. O LXQt foi projetado para ser um salão pequeno, sem móveis a mais — por isso roda bem em máquinas antigas.

A sigla LXQt nasceu da fusão de dois projetos antigos: o LXDE (que usava a biblioteca GTK, a mesma do GNOME) e o Razor-Qt (baseado em Qt, a biblioteca do KDE). Em 2013 esses dois grupos juntaram forças. O resultado é um ambiente moderno, escrito em Qt, mas que mantém o jeitão familiar de um Windows XP ou de um Linux Mint clássico: barra embaixo, menu no canto, ícones na área de trabalho. Nada de invenções estranhas para você reaprender.

Diferente do GNOME ou do KDE, o LXQt não tenta ser uma "experiência completa". Ele é um conjunto modular: cada parte (painel, gerenciador de janelas, gerenciador de arquivos, configurador) é um programa separado. Se você não gosta de uma peça, troca por outra. Isso confunde quem vem do Windows, mas é a alma do Linux: liberdade de montar.

Neste capítulo você vai conhecer o panorama: quem são os componentes principais, quais ferramentas vêm de fábrica, e como conferir tudo isso pelo terminal antes de mergulhar nos próximos capítulos. Pense neste capítulo como um mapa do shopping antes de você sair andando pelas lojas.`,
    codes: [
      {
        lang: "bash",
        code: `# Veja qual versão do LXQt está rodando no seu Lubuntu
lxqt-about
# Abre uma janela com versão, créditos e licença.
# Para ver só no terminal, use:
lxqt-session --version
# saída exemplo:
# lxqt-session 1.3.0`,
      },
      {
        lang: "bash",
        code: `# Liste todos os componentes do LXQt instalados no sistema
dpkg -l | grep -E "^ii  lxqt-" | awk '{print $2}'
# saída exemplo (lista parcial):
# lxqt-config
# lxqt-panel
# lxqt-runner
# lxqt-session
# pcmanfm-qt
# qterminal`,
      },
      {
        lang: "bash",
        code: `# Veja qual ambiente de desktop está ativo na sessão atual
echo $XDG_CURRENT_DESKTOP
# saída esperada: LXQt

# E qual gerenciador de janelas está rodando por baixo:
wmctrl -m | grep Name
# saída esperada: Name: Openbox`,
      },
      {
        lang: "bash",
        code: `# Quanto de memória RAM o LXQt está usando agora?
free -h
# saída exemplo (em uma máquina com 4 GB):
#                total        usado       livre
# Mem:           3.7Gi        420Mi       3.0Gi
# A maior parte do uso vem do navegador, não do LXQt.
# Em idle, o desktop ocupa entre 250 e 400 MB.`,
      },
      {
        lang: "bash",
        code: `# Liste os processos do LXQt em execução
ps -ef | grep -E "lxqt|openbox|pcmanfm" | grep -v grep
# Você vai ver coisas como:
# lxqt-session, lxqt-panel, pcmanfm-qt --desktop, openbox
# Cada um é um programa independente — essa é a "modularidade" do LXQt.`,
      },
    ],
    points: [
      "LXQt é o ambiente de desktop padrão do Lubuntu desde a versão 18.10.",
      "Ele é uma fusão do antigo LXDE com o projeto Razor-Qt, escrita em Qt5/Qt6.",
      "É modular: painel, gerenciador de janelas, arquivos e configurador são programas separados.",
      "O gerenciador de janelas padrão é o Openbox, leve e configurável.",
      "Em idle, costuma usar entre 250 e 400 MB de RAM — bem menos que GNOME ou KDE.",
      "O visual lembra Windows XP/7 de propósito: facilita a transição para iniciantes.",
      "Iniciante comum: confundir LXQt com Lubuntu — Lubuntu é a distribuição inteira; LXQt é só a interface.",
      "Iniciante comum: achar que LXQt é \"limitado\" porque é leve — ele tem quase tudo o que os pesados têm, só com menos enfeite.",
    ],
    alerts: [
      {
        type: "info",
        content: "Você pode instalar LXQt sobre qualquer Ubuntu sem trocar de distribuição: sudo apt install lubuntu-desktop. Mas, para começar, prefira o Lubuntu já pronto.",
      },
      {
        type: "tip",
        content: "Quando ouvir alguém falando de \"sessão\", pense no LXQt todo: painel, área de trabalho e programas abertos. Encerrar a sessão (logout) fecha tudo isso de uma vez.",
      },
      {
        type: "warning",
        content: "Não tente instalar GNOME e LXQt no mesmo sistema sem necessidade. Eles compartilham configurações que podem conflitar e confundir o login.",
      },
    ],
  },
  {
    slug: "painel-lxqt",
    section: "lxqt-tour",
    title: "O painel inferior do LXQt",
    difficulty: "iniciante",
    subtitle: "A barra na base da tela: o que tem nela e como mexer.",
    intro: `O painel é aquela barra fina que aparece embaixo da tela quando você liga o Lubuntu. Pense nele como o painel do carro: nele ficam os instrumentos que você usa o tempo todo (relógio, indicadores) e os controles de acesso rápido (botão do menu, lista de janelas abertas, área de notificação). Sem ele, você teria que ficar adivinhando o que está rodando.

O painel do LXQt se chama \`lxqt-panel\` e é totalmente configurável. Você pode mudar a posição (embaixo, em cima, na lateral), o tamanho, as cores, e principalmente os "plugins" — pequenos blocos com funções específicas. Cada ícone que você vê no painel é, na verdade, um plugin separado: o relógio é um plugin, o menu de aplicações é outro, a bandeja do sistema é outro. Isso significa que você pode arrastar, remover ou adicionar peças à vontade.

A configuração do painel se faz com clique direito sobre ele (escolhendo "Configurar painel..." ou "Gerenciar widgets..."). Não tem mistério: é tudo gráfico, com listas de plugins disponíveis e botões de mover para cima/baixo. Por baixo, as configurações ficam guardadas em um arquivo de texto em \`~/.config/lxqt/panel.conf\` — útil quando você quer fazer backup ou copiar para outro computador.

Neste capítulo você vai aprender a identificar cada parte do painel, mexer no tamanho e na posição, adicionar e remover plugins, e dar uma espiada no arquivo de configuração. No final você terá um painel personalizado do seu jeito — e saberá voltar ao padrão se algo der errado.`,
    codes: [
      {
        lang: "bash",
        code: `# Abrir as configurações do painel pelo terminal
lxqt-config-panel
# Abre a mesma janela que aparece em "Configurar painel..."
# do menu de clique direito.`,
      },
      {
        lang: "bash",
        code: `# Onde fica o arquivo de configuração do painel
ls -la ~/.config/lxqt/panel.conf
# saída: -rw-r--r-- 1 voce voce 4382 ... panel.conf

# Faça um backup antes de mexer manualmente
cp ~/.config/lxqt/panel.conf ~/.config/lxqt/panel.conf.bak`,
      },
      {
        lang: "ini",
        code: `# Trecho típico de panel.conf (formato INI)
[panel1]
alignment=-1
background-color=#2d2d2d
font-color=#ffffff
iconSize=22
lineCount=1
panelSize=32
plugins=mainmenu, quicklaunch, taskbar, tray, statusnotifier, clock
position=Bottom
visible=true`,
      },
      {
        lang: "bash",
        code: `# Reiniciar o painel sem fazer logout (útil ao mexer no .conf)
killall lxqt-panel && lxqt-panel &
# O painel some por meio segundo e volta com a nova config.
# Se algo der errado, restaure o backup:
cp ~/.config/lxqt/panel.conf.bak ~/.config/lxqt/panel.conf
killall lxqt-panel && lxqt-panel &`,
      },
      {
        lang: "bash",
        code: `# Listar todos os plugins disponíveis para o painel
ls /usr/lib/x86_64-linux-gnu/lxqt-panel/
# saída exemplo:
# libclock.so       libmainmenu.so   libtaskbar.so
# libtray.so        libquicklaunch.so libvolume.so
# Cada .so é um plugin: você ativa ou desativa em "Gerenciar widgets".`,
      },
      {
        lang: "bash",
        code: `# Resetar o painel para o padrão de fábrica
mv ~/.config/lxqt/panel.conf ~/.config/lxqt/panel.conf.broken
killall lxqt-panel && lxqt-panel &
# Sem panel.conf, o LXQt cria um novo do zero, igualzinho à instalação.`,
      },
    ],
    points: [
      "O painel é o programa lxqt-panel; existe um único processo dele rodando.",
      "Cada elemento (relógio, menu, bandeja) é um plugin independente que pode ser adicionado ou removido.",
      "Clique direito no painel abre o menu de configuração e gerenciamento de plugins.",
      "A configuração é salva em ~/.config/lxqt/panel.conf no formato INI — fácil de versionar.",
      "Você pode ter mais de um painel: útil para colocar uma barra extra na lateral, por exemplo.",
      "Mover o painel para cima ou para a lateral é só mudar a opção \"position\" no diálogo gráfico.",
      "Iniciante comum: deletar o painel sem querer e achar que travou — é só recriar com lxqt-panel.",
      "Iniciante comum: editar panel.conf à mão sem fazer backup; quando quebra, não consegue voltar.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Aumente o iconSize para 28 ou 32 se você está em um monitor 4K e os ícones do painel ficaram minúsculos. O default 22 é pensado para telas Full HD.",
      },
      {
        type: "warning",
        content: "Sempre faça backup do panel.conf antes de editar à mão. Um erro de sintaxe pode impedir o painel de iniciar e você fica sem barra ao logar.",
      },
      {
        type: "info",
        content: "O painel respeita o tema do sistema. Se você mudou o tema em \"Aparência\" e o painel ficou preto, basta reiniciar a sessão para ele atualizar as cores.",
      },
    ],
  },
  {
    slug: "menu-aplicacoes",
    section: "lxqt-tour",
    title: "Menu de aplicações",
    difficulty: "iniciante",
    subtitle: "O botão estilo \"Iniciar\" do Lubuntu e como achar tudo nele.",
    intro: `No canto esquerdo do painel mora um botãozinho com o logo do Lubuntu. Ele é o equivalente ao botão "Iniciar" do Windows: um menu organizado em categorias (Acessórios, Internet, Multimídia, Sistema, etc.) com todos os programas instalados. Em vez de procurar atalho na área de trabalho, é dali que você vai abrir tudo no dia a dia.

O menu do LXQt é gerado automaticamente a partir dos arquivos \`.desktop\` que cada programa instala em \`/usr/share/applications/\`. Cada arquivo desses é um pequeno texto que diz o nome do programa, o ícone, o comando para executar e em qual categoria deve aparecer. Quando você instala algo novo via \`apt\`, o menu se atualiza sozinho. Se algo não aparece, quase sempre é porque o pacote não veio com o \`.desktop\` (raro, mas acontece).

Além das categorias, o menu tem uma barra de busca no topo. Comece a digitar o nome (ou parte dele) e ele filtra na hora — é o jeito mais rápido de abrir um programa quando você sabe o nome mas não lembra em qual categoria está. Para quem prefere atalhos, existe ainda o \`lxqt-runner\`, ativado por Alt+F2 ou Super (tecla do Windows): uma caixinha pequena que executa qualquer comando.

Neste capítulo você vai conhecer a estrutura do menu, aprender a customizá-lo, criar atalhos próprios e usar o runner para abrir programas em um piscar de olhos. Quem domina essas três formas (categoria, busca e runner) trabalha muito mais rápido.`,
    codes: [
      {
        lang: "bash",
        code: `# Onde ficam os atalhos do menu (visíveis para todos os usuários)
ls /usr/share/applications/ | head -10
# saída exemplo:
# firefox.desktop
# featherpad.desktop
# lxqt-config.desktop
# pcmanfm-qt.desktop
# qterminal.desktop`,
      },
      {
        lang: "ini",
        code: `# Exemplo de arquivo .desktop (Firefox)
# Ficaria em /usr/share/applications/firefox.desktop
[Desktop Entry]
Version=1.0
Name=Firefox
Comment=Navegador web rápido e seguro
Exec=firefox %u
Icon=firefox
Terminal=false
Type=Application
Categories=Network;WebBrowser;
StartupNotify=true`,
      },
      {
        lang: "bash",
        code: `# Criar um atalho pessoal (só para o seu usuário)
mkdir -p ~/.local/share/applications
nano ~/.local/share/applications/meu-script.desktop
# Cole o conteúdo do próximo bloco e salve com Ctrl+O, Enter, Ctrl+X.`,
      },
      {
        lang: "ini",
        code: `# Conteúdo de meu-script.desktop
[Desktop Entry]
Type=Application
Name=Meu Script
Comment=Roda meu script preferido
Exec=/home/voce/scripts/backup.sh
Icon=utilities-terminal
Categories=Utility;
Terminal=true`,
      },
      {
        lang: "bash",
        code: `# Forçar a atualização do cache do menu (raramente necessário)
update-desktop-database ~/.local/share/applications
# O LXQt percebe novos .desktop sozinho, mas o comando ajuda
# se um atalho criado agora não apareceu de imediato.`,
      },
      {
        lang: "bash",
        code: `# Abrir o lxqt-runner pelo terminal (normalmente é Alt+F2)
lxqt-runner
# Aparece uma caixinha. Digite firefox e Enter — abre o Firefox.
# Digite =2*21 e Enter — ele resolve a conta como calculadora.`,
      },
    ],
    points: [
      "O menu é gerado a partir dos .desktop em /usr/share/applications/ (sistema) e ~/.local/share/applications/ (usuário).",
      "Cada arquivo .desktop define nome, ícone, comando e categoria do atalho.",
      "Para atalhos pessoais, prefira ~/.local/share/applications/ — não exige sudo e não some em atualizações.",
      "A barra de busca no topo do menu filtra por nome enquanto você digita.",
      "lxqt-runner (Alt+F2) abre uma caixa minimalista para executar qualquer comando.",
      "O runner também serve como calculadora rápida: digite =2+2 e dá 4.",
      "Iniciante comum: editar .desktop em /usr/share sem sudo e ficar sem entender por que não salva.",
      "Iniciante comum: criar .desktop com Exec apontando para um caminho relativo — sempre use o caminho absoluto.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Para programas que rodam em terminal (como htop), coloque Terminal=true no .desktop. Assim o LXQt abre um qterminal e roda o comando dentro.",
      },
      {
        type: "info",
        content: "Categorias seguem o padrão FreeDesktop. As mais usadas são Utility, Internet, AudioVideo, Graphics, Office, System, Development e Settings.",
      },
      {
        type: "warning",
        content: "Não delete arquivos em /usr/share/applications/ achando que está \"limpando o menu\". Eles voltam na próxima atualização do pacote e podem quebrar dependências.",
      },
    ],
  },
  {
    slug: "pcmanfm-qt",
    section: "lxqt-tour",
    title: "PCManFM-Qt: o gerenciador de arquivos",
    difficulty: "iniciante",
    subtitle: "O explorador de arquivos do Lubuntu — leve e completo.",
    intro: `Toda interface gráfica precisa de um explorador de arquivos: um programa que mostra pastas, arquivos, ícones, e deixa você arrastar coisa de um lado pro outro. No Windows é o Explorer; no macOS é o Finder; no Lubuntu é o PCManFM-Qt. O nome é estranho (PCMan é o apelido do desenvolvedor original, e -Qt indica a versão moderna em Qt), mas o programa é simples e familiar: dois painéis, abas, miniaturas de imagens.

O PCManFM-Qt é mais que um explorador. Ele é também o programa que desenha sua área de trabalho — os ícones que aparecem na tela inicial são, na verdade, o conteúdo da pasta \`~/Desktop\` renderizada por ele. Por isso, se você matar o processo \`pcmanfm-qt\`, o wallpaper continua, mas os ícones da área de trabalho somem. Reabrir o programa traz tudo de volta.

Por baixo, o PCManFM-Qt usa as bibliotecas padrão do Linux para acessar arquivos: ele abre pendrives via \`udisks2\`, lê metadados de imagens com \`exiv2\`, monta pastas de rede via \`gvfs\`. Você não precisa entender essas peças — basta saber que tudo "funciona" porque elas estão lá.

Este capítulo te apresenta as funções essenciais: navegar, copiar, colar, criar atalhos, abrir terminal na pasta atual, conectar a um servidor e configurar coisas como mostrar arquivos ocultos. No final, você vai estar fluente no único programa que abre dezenas de vezes por dia em qualquer sistema.`,
    codes: [
      {
        lang: "bash",
        code: `# Abrir o PCManFM-Qt em uma pasta específica
pcmanfm-qt ~/Documentos
# Abre uma nova janela já mostrando o conteúdo de Documentos.

# Abrir como root (CUIDADO — só quando realmente precisar)
sudo -E pcmanfm-qt /etc
# -E preserva variáveis de ambiente, importante para o tema funcionar.`,
      },
      {
        lang: "bash",
        code: `# Atalhos de teclado dentro do PCManFM-Qt
# Ctrl+H        mostra/esconde arquivos ocultos (começam com .)
# Ctrl+L        edita a barra de endereço (digite o caminho)
# F2            renomeia o arquivo selecionado
# F4            abre um terminal na pasta atual (qterminal)
# F5            atualiza a visualização
# Ctrl+T        nova aba na mesma janela`,
      },
      {
        lang: "bash",
        code: `# Onde ficam as configurações do PCManFM-Qt
ls ~/.config/pcmanfm-qt/lxqt/
# saída: settings.conf

# Veja um trecho:
grep -E "ShowHidden|IconSize" ~/.config/pcmanfm-qt/lxqt/settings.conf
# saída exemplo:
# ShowHidden=false
# bigIconSize=48`,
      },
      {
        lang: "bash",
        code: `# Conectar-se a um servidor SMB/Samba (rede Windows)
# No menu: Ir > Conectar ao servidor...
# Ou direto pelo terminal usando gio (parte do gvfs):
gio mount smb://192.168.0.10/compartilhado
# Depois aparece em "Outras localizações" no PCManFM-Qt.`,
      },
      {
        lang: "bash",
        code: `# Recriar os ícones da área de trabalho
killall pcmanfm-qt
pcmanfm-qt --desktop &
# A flag --desktop diz para ele desenhar os ícones e o wallpaper.
# Em sessões normais, isso é feito automaticamente pelo lxqt-session.`,
      },
      {
        lang: "bash",
        code: `# Trocar o wallpaper pelo terminal (rápido para scripts)
pcmanfm-qt --set-wallpaper=/usr/share/backgrounds/lubuntu.jpg \\
           --wallpaper-mode=stretch
# modos válidos: color, stretch, fit, center, tile, zoom, screen`,
      },
    ],
    points: [
      "PCManFM-Qt é o gerenciador de arquivos padrão e também desenha a área de trabalho.",
      "Ctrl+H mostra arquivos ocultos (que começam com ponto, como .config).",
      "F4 abre um terminal já posicionado na pasta atual — atalho que economiza tempo.",
      "Configurações ficam em ~/.config/pcmanfm-qt/lxqt/settings.conf.",
      "Suporta abas (Ctrl+T), painel duplo (F3) e árvore lateral (View > Side Pane).",
      "Para acessar pendrives e HDs externos, espera-se que o udisks2 esteja rodando — vem por padrão.",
      "Iniciante comum: usar sudo pcmanfm-qt sem -E e ficar sem ícones porque o tema não é encontrado.",
      "Iniciante comum: deletar pasta sem perceber que está com Mostrar Ocultos ativado — vai junto a .config dela.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Ao abrir o PCManFM-Qt como root, qualquer arquivo apagado vai direto para o nada — não passa pela Lixeira. Use só quando estritamente necessário.",
      },
      {
        type: "tip",
        content: "Configure F4 para abrir o seu terminal preferido em Editar > Preferências > Avançado > Programa de terminal. Por padrão é qterminal.",
      },
      {
        type: "info",
        content: "Se um pendrive não aparecer, abra um terminal e rode lsblk. Se o disco está lá mas não montado, faça \"udisksctl mount -b /dev/sdb1\".",
      },
    ],
  },
  {
    slug: "openbox-wm",
    section: "lxqt-tour",
    title: "Openbox: o gerenciador de janelas",
    difficulty: "intermediario",
    subtitle: "Quem desenha as bordas, move e minimiza suas janelas.",
    intro: `Toda janela que você vê no Lubuntu — com sua barra de título, botão fechar, capacidade de arrastar — é desenhada por um programa específico chamado "gerenciador de janelas" (Window Manager, ou WM). Pense nele como o cenotécnico do teatro: você não vê, mas é quem move os móveis no palco. No Lubuntu, esse cenotécnico se chama Openbox. Ele é minúsculo (uns 2 MB de RAM), rápido como um raio e altamente configurável.

O Openbox existe desde 2002 e tem fama de ser usado em distros "minimalistas" rodando sozinho, sem painel nem nada. No Lubuntu, ele trabalha em parceria com o LXQt: o LXQt fornece o painel, o menu, os ícones; o Openbox cuida só de janelas e do clique direito na área de trabalho. Essa divisão de trabalho é uma das razões do Lubuntu ser leve.

A configuração do Openbox vive em XML, em \`~/.config/openbox/lxqt-rc.xml\`. Sim, XML — é antigo mas funciona bem. Você pode editar à mão para criar atalhos de teclado, definir o que acontece ao clicar com o botão direito no desktop, ajustar bordas e temas. Ou pode usar o programa gráfico \`obconf-qt\`, que mostra tudo em janelas amigáveis.

Este capítulo te apresenta o Openbox: o que ele faz (e o que não faz), onde ficam as configurações, atalhos úteis, e como criar seus próprios "keybindings" para automatizar tarefas. No final você vai entender por que avançados adoram esse WM minúsculo.`,
    codes: [
      {
        lang: "bash",
        code: `# Confirme que o Openbox está rodando
pgrep -a openbox
# saída exemplo:
# 1234 openbox --config-file /home/voce/.config/openbox/lxqt-rc.xml

# Veja a versão
openbox --version
# saída: Openbox 3.6.1`,
      },
      {
        lang: "bash",
        code: `# Abra o configurador gráfico do Openbox
obconf-qt
# Janela com abas para tema, área de trabalho, margens, focus, etc.
# Boa porta de entrada para quem não quer mexer em XML.`,
      },
      {
        lang: "xml",
        code: `<!-- Trecho de ~/.config/openbox/lxqt-rc.xml — atalho de teclado -->
<!-- Adicione dentro de <keyboard>...</keyboard> -->
<keybind key="W-e">
  <!-- Super+E abre o gerenciador de arquivos -->
  <action name="Execute">
    <command>pcmanfm-qt</command>
  </action>
</keybind>`,
      },
      {
        lang: "bash",
        code: `# Recarregar a configuração do Openbox sem reiniciar a sessão
openbox --reconfigure
# Faz o XML ser relido. Se houver erro de sintaxe,
# o Openbox avisa no terminal mas continua com a config antiga.`,
      },
      {
        lang: "bash",
        code: `# Atalhos úteis que já vêm de fábrica
# Alt+Espaço      menu da janela (mover, fechar, etc.)
# Alt+F4          fecha a janela
# Alt+Tab         alterna entre janelas
# Super+D         mostra a área de trabalho (minimiza tudo)
# Alt+Botão1      arrasta a janela mesmo clicando no meio dela
# Alt+Botão3      redimensiona a janela puxando de qualquer canto`,
      },
      {
        lang: "bash",
        code: `# Resetar a configuração do Openbox para o padrão do Lubuntu
mv ~/.config/openbox/lxqt-rc.xml ~/.config/openbox/lxqt-rc.xml.bak
cp /etc/xdg/openbox/lxqt-rc.xml ~/.config/openbox/
openbox --reconfigure`,
      },
    ],
    points: [
      "Openbox cuida só de janelas: bordas, mover, redimensionar, focus, minimizar.",
      "É um dos WMs mais leves: ocupa cerca de 2-5 MB de RAM em idle.",
      "Configuração fica em ~/.config/openbox/lxqt-rc.xml no formato XML.",
      "obconf-qt é o configurador gráfico — não precisa editar XML para o básico.",
      "Recarregue mudanças com openbox --reconfigure (sem precisar deslogar).",
      "Atalhos como Alt+Botão1 (arrastar) e Alt+Botão3 (redimensionar) funcionam em qualquer ponto da janela.",
      "Iniciante comum: editar lxqt-rc.xml e quebrar a sintaxe — Openbox ignora a config nova e usa a antiga.",
      "Iniciante comum: confundir Openbox com LXQt — Openbox é só o WM dentro da sessão LXQt.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Sempre faça openbox --reconfigure depois de editar o XML. Mudanças não pegam até você recarregar (ou deslogar).",
      },
      {
        type: "warning",
        content: "Se o Openbox crashar (raro), o painel continua e os apps também, mas você perde bordas e fica sem mover janelas. Rode \"openbox --replace &\" no terminal para voltar.",
      },
      {
        type: "info",
        content: "É possível trocar o Openbox por outro WM como o KWin ou o Xfwm, mas pouca gente faz. O Openbox é leve e estável o suficiente para 99% dos casos.",
      },
    ],
  },
  {
    slug: "qterminal",
    section: "lxqt-tour",
    title: "QTerminal: o terminal padrão do Lubuntu",
    difficulty: "iniciante",
    subtitle: "A janela preta onde você digita comandos, sem mistério.",
    intro: `O terminal é uma das ferramentas mais poderosas do Linux. É uma janela onde você digita comandos em texto e o computador responde em texto. Parece arcaico, mas é o jeito mais direto de fazer praticamente qualquer coisa: instalar programa, copiar mil arquivos de uma vez, automatizar tarefa, ver o que está acontecendo por baixo. No Lubuntu, esse terminal se chama QTerminal.

Pense no terminal como uma conversa por chat com o computador. Você manda uma mensagem (\`ls\`, por exemplo), ele responde com a lista de arquivos. Cada comando é uma frase curta, e quase sempre tem um resultado imediato. Diferente de uma janela gráfica, onde você clica em vários lugares para chegar no que quer, no terminal você diz exatamente o que quer numa linha só.

O QTerminal é um emulador de terminal — ou seja, ele não é o terminal de verdade, é um programa que finge ser um terminal antigo de monitor verde dentro de uma janela. Ele suporta abas, divisão de tela, atalhos personalizáveis, transparência, e o mais importante: roda o seu shell preferido (geralmente o \`bash\`) por baixo. Tudo o que você digitar é enviado para o bash, que executa e devolve o resultado.

Neste capítulo você vai abrir o QTerminal, conhecer seus principais atalhos, configurar visual e atalhos, criar abas e dividir a tela. Esses fundamentos te servirão por toda a vida com Linux — o terminal mudou pouco em 40 anos.`,
    codes: [
      {
        lang: "bash",
        code: `# Maneiras de abrir o QTerminal
# 1) Menu > Sistema > QTerminal
# 2) Atalho de teclado: Ctrl+Alt+T
# 3) Pelo lxqt-runner: Alt+F2 e digite "qterminal"
# 4) Pelo PCManFM-Qt: F4 dentro de qualquer pasta

# Veja a versão instalada
qterminal --version
# saída exemplo: qterminal 1.3.0`,
      },
      {
        lang: "bash",
        code: `# Atalhos essenciais do QTerminal
# Ctrl+Shift+T      nova aba
# Ctrl+Shift+W      fecha a aba
# Ctrl+Shift+C      copia o texto selecionado
# Ctrl+Shift+V      cola o conteúdo do clipboard
# Ctrl+Shift+F      busca no histórico da tela
# Ctrl++/Ctrl+-     aumenta/diminui o tamanho da fonte
# F11               tela cheia`,
      },
      {
        lang: "bash",
        code: `# Dividir a janela em painéis (split)
# Menu Arquivo > Nova subjanela > Vertical (ou Horizontal)
# ou atalhos:
# Ctrl+Shift+H      divisão horizontal
# Ctrl+Shift+E      divisão vertical
# Tab para alternar entre painéis.`,
      },
      {
        lang: "bash",
        code: `# Onde fica a configuração
ls ~/.config/qterminal.org/
# saída: qterminal.ini  qterminal_drop.ini

# Trecho típico de qterminal.ini
grep -E "fontFamily|fontSize|colorScheme" ~/.config/qterminal.org/qterminal.ini
# saída exemplo:
# fontFamily=Monospace
# fontSize=11
# colorScheme=Linux`,
      },
      {
        lang: "bash",
        code: `# QTerminal "drop-down": aparece quando aperta uma tecla, some quando aperta de novo
# Inicie em modo drop-down:
qterminal --drop &
# Por padrão, F12 mostra/esconde a janela.
# Útil para abrir o terminal rapidinho sobre o que estiver fazendo.`,
      },
      {
        lang: "bash",
        code: `# Trocar o terminal padrão do sistema (se preferir outro como xterm)
sudo update-alternatives --config x-terminal-emulator
# Mostra uma lista numerada — escolha o número e Enter.
# Programas que abrem terminal (ex: F4 no PCManFM-Qt) usarão o novo.`,
      },
    ],
    points: [
      "QTerminal é o emulador de terminal padrão do Lubuntu, escrito em Qt.",
      "Suporta abas, painéis divididos (split), drop-down, busca e fonte ajustável.",
      "Ctrl+Shift+C/V para copiar e colar — Ctrl+C/V não funciona porque Ctrl+C cancela comandos.",
      "Configuração fica em ~/.config/qterminal.org/qterminal.ini (formato INI).",
      "Modo --drop transforma o QTerminal em um terminal estilo Quake (F12 mostra/esconde).",
      "Por baixo ele roda o shell padrão do usuário, definido em /etc/passwd (geralmente bash).",
      "Iniciante comum: usar Ctrl+C achando que copia — Ctrl+C aborta o comando atual no terminal.",
      "Iniciante comum: fechar a janela com X enquanto um processo roda — o processo morre junto.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Use o modo drop-down (qterminal --drop) e configure-o para iniciar com a sessão. Você ganha um terminal a um toque de F12 sempre que precisar.",
      },
      {
        type: "info",
        content: "Se o terminal travou (Ctrl+S é o vilão), aperte Ctrl+Q para destravar. Ctrl+S pausa a saída e Ctrl+Q libera de volta.",
      },
      {
        type: "warning",
        content: "Não cole comandos copiados de sites desconhecidos sem ler antes. Sites maliciosos escondem comandos com truques de CSS — sempre confira no editor primeiro.",
      },
    ],
  },
  {
    slug: "lxqt-config",
    section: "lxqt-tour",
    title: "Centro de Configurações (lxqt-config)",
    difficulty: "iniciante",
    subtitle: "O painel de controle do Lubuntu, todo em um lugar.",
    intro: `Em vez de espalhar mil ícones de configuração pelo menu, o LXQt agrupa tudo em um único lugar chamado Centro de Configurações (\`lxqt-config\`). Pense nele como o "Painel de Controle" do Windows ou as "Preferências do Sistema" do macOS: uma janela com vários ícones, cada um cuidando de uma parte do sistema (aparência, atalhos, monitores, mouse, sessão, etc.).

A vantagem dessa abordagem é a previsibilidade. Você sempre sabe onde procurar: abriu o Centro de Configurações, leu o nome do ícone, clicou. Não precisa decorar o nome do programa específico. Cada módulo dentro do centro é, na verdade, um programa separado (\`lxqt-config-appearance\`, \`lxqt-config-monitor\`, \`lxqt-config-session\`...), mas você não precisa saber disso para usar.

A maioria das configurações altera arquivos em \`~/.config/lxqt/\`. Por exemplo, mudar o tema escreve em \`~/.config/lxqt/lxqt.conf\`; alterar atalhos globais escreve em \`~/.config/lxqt/globalkeyshortcuts.conf\`. Saber disso ajuda quando você quer fazer backup das suas preferências ou copiá-las para outra máquina: basta copiar a pasta inteira.

Neste capítulo você vai abrir o Centro, conhecer os módulos mais usados (Aparência, Monitor, Atalhos Globais, Sessão), entender o que cada um faz, e descobrir como restaurar uma configuração que você quebrou. É o capítulo de "todo dia" da personalização.`,
    codes: [
      {
        lang: "bash",
        code: `# Abrir o Centro de Configurações pelo terminal
lxqt-config
# Janela única com todos os módulos. Equivale a:
# Menu > Preferências > Centro de Configurações do LXQt`,
      },
      {
        lang: "bash",
        code: `# Abrir um módulo específico direto (mais rápido)
lxqt-config-appearance      # tema, ícones, fontes
lxqt-config-monitor         # resolução, múltiplos monitores
lxqt-config-globalkeyshortcuts  # atalhos de teclado globais
lxqt-config-session         # programas que iniciam com a sessão
lxqt-config-input           # mouse, teclado, touchpad`,
      },
      {
        lang: "bash",
        code: `# Onde ficam todas as configurações do LXQt
ls ~/.config/lxqt/
# saída típica:
# globalkeyshortcuts.conf   notifications.conf
# lxqt.conf                 panel.conf
# session.conf              lxqt-leave.conf`,
      },
      {
        lang: "bash",
        code: `# Fazer backup das suas preferências do LXQt
tar czf lxqt-backup-$(date +%F).tar.gz \\
    ~/.config/lxqt \\
    ~/.config/openbox \\
    ~/.config/pcmanfm-qt \\
    ~/.config/qterminal.org
# Cria um arquivo .tar.gz com tudo. Restaura com:
# tar xzf lxqt-backup-2024-05-10.tar.gz -C /`,
      },
      {
        lang: "ini",
        code: `# Trecho de ~/.config/lxqt/lxqt.conf
[General]
icon_theme=Papirus
theme=Lubuntu Arc
single_click=false

[Qt]
font="Ubuntu,11,-1,5,50,0,0,0,0,0"
style=Fusion`,
      },
      {
        lang: "bash",
        code: `# Resetar TUDO do LXQt (cuidado — deslogue antes)
mv ~/.config/lxqt ~/.config/lxqt.broken
# Faça logout e login. Na próxima sessão, o LXQt cria
# uma pasta lxqt nova, com tudo no padrão.`,
      },
    ],
    points: [
      "lxqt-config é a janela principal; agrupa todos os módulos de configuração.",
      "Cada módulo é um programa separado (lxqt-config-appearance, lxqt-config-monitor, etc.).",
      "Configurações ficam em ~/.config/lxqt/ no formato INI — fácil de editar e versionar.",
      "Aparência (tema, ícones, fonte) está em lxqt-config-appearance.",
      "Atalhos globais (Super+E, Print Screen, etc.) ficam em lxqt-config-globalkeyshortcuts.",
      "Programas que iniciam com a sessão ficam em lxqt-config-session > Autostart.",
      "Iniciante comum: confundir \"atalhos do Openbox\" com \"atalhos globais do LXQt\" — são dois lugares diferentes.",
      "Iniciante comum: editar lxqt.conf à mão e errar a sintaxe — o módulo gráfico sobrescreve sem avisar.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de mexer em qualquer configuração, tire um backup com tar do diretório ~/.config/lxqt. Restaurar leva 2 segundos e te tira de qualquer atrapalhada.",
      },
      {
        type: "info",
        content: "O módulo \"Sessão\" é o lugar para escolher se o som inicia mudo, se o painel volta ao default a cada login, e quais apps abrem automaticamente.",
      },
      {
        type: "warning",
        content: "Em monitores 4K, lembre de aumentar a fonte do sistema (lxqt-config-appearance) e o tamanho dos ícones do painel separadamente — eles não se ajustam sozinhos.",
      },
    ],
  },
  {
    slug: "area-notificacao",
    section: "lxqt-tour",
    title: "Área de notificação e bandeja do sistema",
    difficulty: "iniciante",
    subtitle: "Os iconezinhos do canto direito: rede, som, bateria, atualizações.",
    intro: `Olhando para o canto direito do painel, você vê uma fileira de iconezinhos: o sinal de Wi-Fi, o ícone de som, o nível da bateria (se for laptop), talvez um envelope se vier mensagem nova. Essa região se chama "bandeja do sistema" (system tray) ou "área de notificação". Ela é o lugar onde programas em segundo plano avisam de coisas sem abrir uma janela inteira.

A bandeja do LXQt segue dois padrões distintos. O antigo, chamado XEmbed (ou só "tray"), é onde apps tradicionais colocam um ícone que aceita clique direito. O moderno, chamado StatusNotifier, é usado por apps mais novos (Telegram, Dropbox, KeePassXC) e suporta menus mais ricos. Ambos coexistem sem briga: o painel mostra os dois lados juntos.

Além dos ícones, o LXQt tem um sistema de "notificações pop-up" — aquelas mensagens que aparecem por alguns segundos no canto da tela ("Bateria fraca", "Você recebeu uma mensagem"). Quem cuida disso é o \`lxqt-notificationd\`, um pequeno daemon que recebe as notificações de todos os programas e mostra na tela. É bem leve e configurável.

Neste capítulo você vai entender quem é quem nessa parte do painel, configurar o que aparece, mexer nas notificações pop-up, e diagnosticar problemas comuns como "o ícone do Wi-Fi sumiu" ou "as notificações não aparecem mais". Pequenos detalhes que fazem a diferença no dia a dia.`,
    codes: [
      {
        lang: "bash",
        code: `# Veja quais ícones estão sendo registrados na bandeja XEmbed
xprop -root | grep -E "_NET_SYSTEM_TRAY|MANAGER"
# Mostra o ID da janela responsável pela bandeja.
# Se não aparecer nada, o plugin "tray" não está ativo no painel.`,
      },
      {
        lang: "bash",
        code: `# Confirme que o servidor de notificações está rodando
pgrep -a lxqt-notificationd
# saída exemplo:
# 1456 lxqt-notificationd

# Configure-o:
lxqt-config-notificationd
# Janela com posição na tela, tempo na tela, opacidade, etc.`,
      },
      {
        lang: "bash",
        code: `# Mande uma notificação manual para testar
notify-send "Olá!" "Esta é uma notificação de teste."
# Aparece um pop-up no canto da tela por alguns segundos.

# Com ícone e prioridade:
notify-send -i dialog-warning -u critical \\
    "Bateria" "Restam 5%. Conecte o carregador."`,
      },
      {
        lang: "bash",
        code: `# Programas comuns que vivem na bandeja
# nm-applet               ícone do NetworkManager (Wi-Fi/Ethernet)
# pavucontrol-qt          mixer de áudio
# blueman-tray            bluetooth
# update-notifier         atualizações disponíveis
# pasystray               status do PulseAudio

# Veja se nm-applet está rodando:
pgrep -a nm-applet`,
      },
      {
        lang: "bash",
        code: `# Reiniciar a bandeja se um ícone sumiu
killall lxqt-panel && lxqt-panel &
# Os apps que registram ícone (nm-applet, etc.) vão re-registrar
# automaticamente na bandeja recém-criada.`,
      },
      {
        lang: "bash",
        code: `# Adicionar/remover plugins da bandeja no painel
# Clique direito no painel > Configurar painel > Widgets
# Plugins relevantes:
# - System Tray            (bandeja XEmbed antiga)
# - Status Notifier        (bandeja moderna StatusNotifier)
# - Notification           (mostra notificações armazenadas)
# Mantenha os dois primeiros ativos para máxima compatibilidade.`,
      },
    ],
    points: [
      "A bandeja do sistema fica no canto direito do painel e mostra ícones de programas em segundo plano.",
      "Existem dois protocolos coexistindo: System Tray (XEmbed, antigo) e Status Notifier (moderno).",
      "lxqt-notificationd é o daemon que mostra as notificações pop-up na tela.",
      "notify-send envia uma notificação pelo terminal — útil para scripts (\"backup terminado\").",
      "Configure tempo, posição e estilo das notificações em lxqt-config-notificationd.",
      "Se um ícone some, reiniciar lxqt-panel costuma resolver: killall lxqt-panel && lxqt-panel &.",
      "Iniciante comum: achar que perdeu o Wi-Fi quando só sumiu o ícone — a conexão pode estar funcionando.",
      "Iniciante comum: confundir \"bandeja\" (ícones permanentes) com \"notificações\" (pop-ups temporários).",
    ],
    alerts: [
      {
        type: "tip",
        content: "Se o ícone de bateria sumiu em um laptop, instale e ative o plugin \"Battery\" no painel. Ele lê /sys/class/power_supply diretamente, sem depender do app de notificações.",
      },
      {
        type: "info",
        content: "Notificações antigas podem ser revisadas pelo plugin \"Notification\" no painel. Útil para ver o que apareceu enquanto você estava no banheiro.",
      },
      {
        type: "warning",
        content: "Não desative o plugin Status Notifier se você usa apps modernos como Telegram ou Discord — sem ele, esses apps somem da bandeja e parecem ter fechado.",
      },
    ],
  },
];
