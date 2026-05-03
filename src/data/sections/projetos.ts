import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "reviver-pc-antigo",
    section: "projetos",
    title: "Revivendo um PC antigo",
    difficulty: "iniciante",
    subtitle: "Transforme aquele notebook empoeirado em uma máquina útil de novo.",
    intro: `Quase todo mundo tem em casa um notebook ou desktop esquecido na gaveta. Aquele PC de 2010 com 2 GB de RAM e HD lento, que travava só de abrir o navegador no Windows. A boa notícia: o Lubuntu foi feito exatamente para esse tipo de máquina. Pense nele como uma "revisão completa de motor" — você troca o sistema pesado por um leve e a máquina volta a andar.

Esse projeto não é teoria: é o caso de uso mais comum do Lubuntu no Brasil. Escolas, ONGs, oficinas e gente em casa estão dando sobrevida a hardware que iria para o lixo eletrônico. Você economiza dinheiro, ajuda o planeta e ainda aprende Linux no processo. É ganha-ganha-ganha.

Aqui você vai juntar o que aprendeu nas seções anteriores (instalação, terminal, pacotes) e aplicar num projeto real do começo ao fim. O fluxo é: avaliar o hardware, fazer backup do que tem, instalar o Lubuntu, escolher apps leves, ajustar swap/zram e medir o resultado. Ao final, esse PC vai estar pronto para navegação, escritório, vídeos e até estudo.`,
    codes: [
      {
        lang: "bash",
        code: `# Antes de mais nada, descubra com o que você está lidando
# Rode num live USB do Lubuntu para inspecionar sem alterar nada

# Memória RAM total e disponível
free -h
# saída exemplo:
#                total        used        free
# Mem:           1.9Gi       420Mi       1.2Gi
# Swap:             0B          0B          0B

# CPU: modelo e núcleos
lscpu | grep -E "Model name|CPU\\(s\\):"
# Model name:  Intel(R) Atom(TM) CPU N270  @ 1.60GHz
# CPU(s):      2

# Disco e tamanho
lsblk -o NAME,SIZE,TYPE,MODEL`,
      },
      {
        lang: "bash",
        code: `# Veja se o HD está saudável antes de gastar tempo instalando
sudo apt install smartmontools -y

# Substitua sda pelo seu disco (veja com lsblk)
sudo smartctl -H /dev/sda
# saída esperada:
# SMART overall-health self-assessment test result: PASSED

# Se aparecer FAILED, troque o disco antes de instalar`,
      },
      {
        lang: "bash",
        code: `# Backup rápido dos arquivos importantes do Windows antigo
# Conecte um HD externo e copie tudo do Documentos/Imagens/Downloads

# Pelo terminal do live USB (mais confiável):
sudo mkdir -p /mnt/old /mnt/backup
sudo mount /dev/sda2 /mnt/old        # partição do Windows
sudo mount /dev/sdb1 /mnt/backup     # HD externo

# Copia preservando permissões e mostrando progresso
sudo rsync -avh --progress /mnt/old/Users/Fulano/Documents/ /mnt/backup/docs/`,
      },
      {
        lang: "bash",
        code: `# Depois de instalar o Lubuntu (ver seção Instalação),
# ative zram para ganhar fôlego em máquinas com pouca RAM
sudo apt install zram-config -y

# Reinicie e confirme:
sudo systemctl status zram-config
zramctl
# saída exemplo:
# NAME       ALGORITHM DISKSIZE  DATA  COMPR
# /dev/zram0 lzo-rle    974.5M    0B     0B`,
      },
      {
        lang: "bash",
        code: `# Reduza o "uso" do swap em disco (que é lento) priorizando RAM
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf
sudo sysctl --system
# saída: vm.swappiness = 10

# Em PCs antigos, isso evita que o sistema fique congelado
# trocando dados com o HD a cada janela aberta`,
      },
      {
        lang: "bash",
        code: `# Instale só o essencial: navegador leve, escritório e mídia
sudo apt update
sudo apt install -y \\
    falkon abiword gnumeric \\
    vlc gpicview featherpad

# Remova o que vem grande e você não usa (opcional)
sudo apt remove --purge libreoffice* -y
sudo apt autoremove -y`,
      },
      {
        lang: "bash",
        code: `# Meça o resultado depois de uns dias de uso
free -h           # quanta RAM sobra
uptime            # carga média do sistema
df -h /           # uso do disco

# Compare com o Windows antigo: tempo de boot, abrir navegador,
# digitar texto sem travar. A diferença costuma ser brutal.`,
      },
    ],
    points: [
      "Antes de instalar, cheque RAM, CPU, disco e saúde do HD com smartctl.",
      "Faça backup dos arquivos do sistema antigo direto pelo live USB do Lubuntu.",
      "Ative zram-config: comprime parte da RAM e dá fôlego em máquinas com 1-2 GB.",
      "Reduza vm.swappiness para 10 para evitar travamento por uso excessivo do swap em disco.",
      "Escolha apps leves: Falkon, AbiWord, Gnumeric, VLC no lugar dos pesados.",
      "Remova LibreOffice se você não precisa — economiza centenas de MB de espaço.",
      "Iniciante comum: tentar rodar Chrome ou Discord pesado em PC com 2 GB e culpar o Lubuntu.",
      "Iniciante comum: pular o teste SMART do disco e instalar num HD que vai morrer em uma semana.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Se o PC tem HDD mecânico e você puder gastar R$ 100, troque por um SSD pequeno (120 GB). É o upgrade que mais transforma a experiência — mais que dobrar a RAM.",
      },
      {
        type: "info",
        content: "Lubuntu roda confortavelmente em CPUs Atom, Celeron e Core 2 Duo a partir de 2008. Abaixo disso (Pentium 4, RAM DDR1), considere distros ainda mais leves como Puppy ou antiX.",
      },
      {
        type: "warning",
        content: "Não jogue fora a etiqueta com a chave do Windows: ela pode valer dinheiro se você revender. E nada impede de manter dual boot por garantia (próximas seções).",
      },
      {
        type: "success",
        content: "Documente tudo: foto antes/depois, tempo de boot, apps instalados. Vira portfólio se você quiser ajudar outras pessoas (ou cobrar pelo serviço).",
      },
    ],
  },
  {
    slug: "kiosk-quiosque",
    section: "projetos",
    title: "Modo quiosque (kiosk)",
    difficulty: "intermediario",
    subtitle: "Um PC que abre só uma aplicação em tela cheia, ideal para totens e recepções.",
    intro: `Você já viu aqueles totens em farmácia para tirar senha, ou o PC do consultório que só mostra o site de agendamento? Isso é um modo quiosque (kiosk): o computador liga, faz login automático e abre uma única aplicação ocupando a tela inteira. O usuário não vê área de trabalho, não acessa configurações, não sai do programa.

Lubuntu é uma escolha excelente para quiosques porque é leve (cabe em PC velho ou Raspberry Pi) e usa o LXQt, que dá controle fácil sobre login automático, autostart e atalhos bloqueados. Pense nele como um "modo apresentação permanente" do computador.

O fluxo é: criar um usuário dedicado para o quiosque, configurar login automático, fazer ele abrir o navegador (ou outra app) em tela cheia ao iniciar a sessão e bloquear teclas de escape. Se você quer um totem para mostrar cardápio, painel de horários, dashboard de loja ou um simples slideshow, esse capítulo te dá o caminho completo.`,
    codes: [
      {
        lang: "bash",
        code: `# Crie um usuário dedicado para o quiosque
sudo adduser kiosk
# (defina uma senha simples; ela quase nunca será digitada)

# Adicione o usuário aos grupos básicos
sudo usermod -aG audio,video,plugdev kiosk`,
      },
      {
        lang: "bash",
        code: `# Configure login automático no SDDM (gerenciador de login do LXQt)
sudo mkdir -p /etc/sddm.conf.d
sudo tee /etc/sddm.conf.d/autologin.conf <<EOF
[Autologin]
User=kiosk
Session=Lubuntu.desktop
EOF

# Reinicie e o PC entra direto sem pedir senha
# saída ao reiniciar: vai pra área de trabalho do kiosk sozinho`,
      },
      {
        lang: "bash",
        code: `# Crie o script que abre o navegador em modo quiosque
sudo -u kiosk mkdir -p /home/kiosk/bin
sudo -u kiosk tee /home/kiosk/bin/iniciar-kiosk.sh <<'EOF'
#!/bin/bash
# Espera o ambiente terminar de carregar
sleep 5

# Desabilita protetor de tela e suspensão
xset s off
xset -dpms
xset s noblank

# Abre o Firefox em modo quiosque, página fixa
firefox --kiosk https://exemplo.com.br
EOF

chmod +x /home/kiosk/bin/iniciar-kiosk.sh`,
      },
      {
        lang: "ini",
        code: `# Arquivo: /home/kiosk/.config/autostart/kiosk.desktop
# Faz o script rodar automaticamente ao logar
[Desktop Entry]
Type=Application
Name=Kiosk
Exec=/home/kiosk/bin/iniciar-kiosk.sh
X-LXQt-Module=false
NoDisplay=true`,
      },
      {
        lang: "bash",
        code: `# Bloqueie atalhos perigosos do Openbox (Ctrl+Alt+T, Alt+F4)
sudo -u kiosk mkdir -p /home/kiosk/.config/openbox
sudo -u kiosk cp /etc/xdg/openbox/lxqt-rc.xml \\
                /home/kiosk/.config/openbox/lxqt-rc.xml

# Edite com nano e remova ou comente os <keybind> indesejados
nano /home/kiosk/.config/openbox/lxqt-rc.xml
# Procure por Ctrl-Alt-T, Super-E, etc. e apague o bloco`,
      },
      {
        lang: "bash",
        code: `# Esconda o painel inferior do LXQt para visual de totem
# Edite o panel.conf
nano /home/kiosk/.config/lxqt/panel.conf
# Mude:
# hidable=true
# visible-margin=0

# Reinicie a sessão e o painel some até o mouse encostar embaixo`,
      },
      {
        lang: "bash",
        code: `# Para auditoria, registre quando o quiosque iniciou e parou
echo "iniciado em $(date)" >> /home/kiosk/kiosk.log
# saída no arquivo:
# iniciado em qua 12 mar 2025 09:12:33 -03

# Combinado com cron, dá para reiniciar o PC toda madrugada:
sudo crontab -e
# adicione:  0 4 * * * /sbin/shutdown -r now`,
      },
    ],
    points: [
      "Crie sempre um usuário separado (kiosk) — nunca use seu login pessoal no totem.",
      "Login automático no SDDM elimina a tela de senha entre o boot e a aplicação.",
      "xset s off e xset -dpms desativam protetor de tela e suspensão — essencial para totem.",
      "Firefox e Chromium têm o flag --kiosk pronto: tela cheia, sem barra, sem menus.",
      "Coloque um sleep no início do script para esperar a sessão carregar antes de abrir o app.",
      "Bloqueie atalhos do Openbox (lxqt-rc.xml) para o usuário não escapar do quiosque.",
      "Iniciante comum: testar como root e esquecer que o usuário kiosk não tem permissão pra um arquivo.",
      "Iniciante comum: deixar o painel visível e aparecer ícone do menu LXQt no canto inferior do totem.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Quiosque não substitui antivírus de uso. Se o navegador puder ir para qualquer URL, alguém vai testar. Restrinja com extensão whitelist ou um proxy local.",
      },
      {
        type: "tip",
        content: "Para conteúdo offline (slideshow de fotos, vídeo institucional), use feh --slideshow ou mpv --loop em tela cheia em vez do navegador. Bem mais leve.",
      },
      {
        type: "info",
        content: "O Raspberry Pi 4 com Lubuntu 64-bit roda quiosque tranquilamente. Combinação ótima para totens em loja, custando menos de R$ 500 com tela.",
      },
      {
        type: "danger",
        content: "Nunca use o usuário do quiosque com sudo configurado sem senha. Se alguém escapar do navegador, ganha acesso total à máquina.",
      },
    ],
  },
  {
    slug: "midia-center-htpc",
    section: "projetos",
    title: "Media center (HTPC) com Kodi",
    difficulty: "intermediario",
    subtitle: "Transforme um PC velho em central de filmes e séries para a TV.",
    intro: `Um HTPC (Home Theater PC) é um computador conectado à TV da sala que serve filmes, séries, fotos e música através de um controle remoto. Antes existia o Apple TV e o Chromecast, mas eles dependem de assinatura. Com Lubuntu + Kodi você monta o seu, com a sua biblioteca, sem mensalidade. É como ter um Netflix particular dos seus arquivos.

Kodi é um media center open source que roda em quase tudo: PC, Raspberry Pi, Android. Ele organiza filmes por capa, baixa metadados, lê legendas, toca vídeo, música e até serve como front-end para canais de TV. A interface foi feita para ser usada de longe, com controle remoto ou celular.

Neste capítulo você vai instalar Kodi no Lubuntu, configurar a saída HDMI da TV, mapear suas pastas de mídia, instalar add-ons de legendas e deixar o sistema bootando direto no Kodi em tela cheia. Resultado: liga o PC, aparece a interface azul do Kodi, escolhe o filme com o controle. Sua família vai amar.`,
    codes: [
      {
        lang: "bash",
        code: `# Instale o Kodi pelo repositório oficial do Ubuntu
sudo apt update
sudo apt install kodi -y

# Versão instalada:
kodi --version
# saída: 19.5 Matrix (ou superior)`,
      },
      {
        lang: "bash",
        code: `# Saída de vídeo: garanta que o HDMI está sendo detectado
xrandr | grep " connected"
# saída exemplo:
# HDMI-1 connected primary 1920x1080+0+0 ...

# Force resolução 1080p se a TV detectar mal
xrandr --output HDMI-1 --mode 1920x1080`,
      },
      {
        lang: "bash",
        code: `# Áudio: mande o som pelo HDMI da TV
# Liste as saídas de áudio disponíveis
pactl list short sinks
# saída exemplo:
# 0  alsa_output.pci-0000_00_03.0.hdmi-stereo  ...

# Defina como padrão
pactl set-default-sink alsa_output.pci-0000_00_03.0.hdmi-stereo`,
      },
      {
        lang: "bash",
        code: `# Crie pastas de mídia organizadas (na sua HOME ou num HD externo)
mkdir -p ~/Midia/{Filmes,Series,Musica,Fotos}

# Mova ou aponte os arquivos para lá
# Dentro do Kodi: Settings > Media > Library > Videos > Add videos
# Aponte para ~/Midia/Filmes e marque "This directory contains: Movies"
# O Kodi vai baixar capas e sinopse sozinho`,
      },
      {
        lang: "bash",
        code: `# Para ligar o PC e cair direto no Kodi (sem desktop):
# Crie sessão personalizada Kodi
sudo tee /usr/share/xsessions/kodi.desktop <<EOF
[Desktop Entry]
Name=Kodi
Comment=Media Center
Exec=kodi-standalone
Type=Application
EOF

# E configure autologin do SDDM para essa sessão
sudo tee /etc/sddm.conf.d/kodi-autologin.conf <<EOF
[Autologin]
User=$USER
Session=kodi.desktop
EOF`,
      },
      {
        lang: "bash",
        code: `# Controle pelo celular (recomendado): instale o app "Kore"
# Dentro do Kodi: Settings > Services > Control
# Ative "Allow remote control via HTTP"
# Porta padrão: 8080
# Usuário: kodi (deixe sem senha em rede de casa só)

# Descubra o IP do HTPC para configurar o app
ip a | grep "inet " | grep -v 127.0
# saída exemplo:
# inet 192.168.1.50/24 brd ...`,
      },
      {
        lang: "bash",
        code: `# Legendas em português automáticas
# Dentro do Kodi: Add-ons > Install from repository
#   > Subtitles > OpenSubtitles.org ou Legendas.TV
# Configure idioma preferencial: Portuguese (Brazil)
# Atalho durante filme: T abre o menu de legendas`,
      },
    ],
    points: [
      "Kodi é gratuito, open source e roda em qualquer máquina com Lubuntu instalado.",
      "Use HDMI para áudio e vídeo num cabo só — pactl ajusta a saída se o sistema errar.",
      "Organize mídia em pastas claras (Filmes, Series) — Kodi precisa disso pra baixar capas.",
      "kodi-standalone é uma sessão própria que dispensa a área de trabalho do LXQt.",
      "Controle pelo celular com o app Kore (oficial) é mais prático que controle físico.",
      "Add-ons de legendas (OpenSubtitles, Legendas.TV) buscam .srt automaticamente.",
      "Iniciante comum: jogar mídia em pasta com nomes confusos — Kodi não acha 'Vingadores BR DUB cam'.",
      "Iniciante comum: usar add-ons piratas e pegar malware ou IP bloqueado pelo provedor.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca instale repositórios de add-ons piratas (filmes grátis online). A maioria contém malware ou viola a lei. Use só conteúdo que você possui ou serviços oficiais.",
      },
      {
        type: "tip",
        content: "Se a TV tem só 720p ou é antiga, considere usar o LibreELEC (sistema enxuto só para Kodi) num Raspberry Pi 4. Boot em 15 segundos, ventilador silencioso.",
      },
      {
        type: "info",
        content: "Kodi não é só para vídeo: tem add-on para rádio online, podcasts, fotos do Google, previsão do tempo. Vira central de informação da casa.",
      },
      {
        type: "warning",
        content: "Áudio pelo HDMI às vezes some depois de suspender. Solução: desabilitar suspensão automática (xset -dpms) ou reiniciar o pulseaudio com pulseaudio -k.",
      },
    ],
  },
  {
    slug: "servidor-domestico",
    section: "projetos",
    title: "Servidor doméstico de arquivos",
    difficulty: "intermediario",
    subtitle: "Um PC velho que vira nuvem da casa, acessível por todos os dispositivos.",
    intro: `Você já viu serviços como Google Drive ou Dropbox: pastas que sincronizam entre celular, notebook e desktop. A versão "faça você mesmo" disso é ter um servidor doméstico — um computador sempre ligado dentro de casa que guarda os arquivos da família e os disponibiliza pela rede Wi-Fi. É como ter um pen drive gigante que toda casa enxerga ao mesmo tempo.

A vantagem é privacidade total (nada vai para servidor de empresa estrangeira) e custo zero depois do hardware. Você usa um PC velho que ficaria parado, instala Lubuntu, configura compartilhamento via Samba (que o Windows enxerga nativo) e SSH para acessar de longe. Em pouco tempo está pronto.

Neste capítulo vamos montar isso passo a passo: preparar o disco para guardar mídia, ativar Samba para que celular e Windows vejam as pastas, configurar SSH para acesso remoto, e dar o toque final com Syncthing para sincronização tipo Dropbox. Tudo rodando num PC consumindo menos energia que uma lâmpada acesa.`,
    codes: [
      {
        lang: "bash",
        code: `# Adicione um HD/SSD dedicado para os arquivos (recomendado)
# Veja qual é com lsblk
lsblk
# saída exemplo:
# sdb      1.8T disk
# └─sdb1   1.8T part /mnt/dados

# Formate (se for novo) — CUIDADO, apaga tudo!
sudo mkfs.ext4 -L dados /dev/sdb1

# Crie o ponto de montagem e edite /etc/fstab
sudo mkdir -p /mnt/dados
echo 'LABEL=dados /mnt/dados ext4 defaults 0 2' | sudo tee -a /etc/fstab
sudo mount -a`,
      },
      {
        lang: "bash",
        code: `# Instale e configure o Samba para compartilhar com Windows/Android
sudo apt install samba -y

# Crie pasta de família com permissão para o seu usuário
sudo mkdir -p /mnt/dados/familia
sudo chown -R $USER:$USER /mnt/dados/familia

# Adicione seu usuário ao Samba (senha pode ser diferente do login)
sudo smbpasswd -a $USER`,
      },
      {
        lang: "ini",
        code: `# Edite /etc/samba/smb.conf e adicione no final:
[familia]
   path = /mnt/dados/familia
   browseable = yes
   read only = no
   valid users = @sambashare
   create mask = 0664
   directory mask = 0775

# Salve e reinicie o serviço:
# sudo systemctl restart smbd`,
      },
      {
        lang: "bash",
        code: `# No Windows, abra o Explorer e digite na barra de endereço:
# \\\\nome-do-servidor   (ou \\\\IP)
# Vai aparecer a pasta familia. Insira usuário e senha do smbpasswd.

# No Android, instale o "X-plore" ou "Solid Explorer"
# e adicione conexão SMB com o IP do servidor.

# Descubra o IP da máquina:
hostname -I
# saída: 192.168.1.30`,
      },
      {
        lang: "bash",
        code: `# SSH para administrar o servidor sem precisar de teclado/monitor
sudo apt install openssh-server -y
sudo systemctl enable --now ssh

# Confirme que está escutando
sudo ss -tlnp | grep :22
# saída: LISTEN 0  128  0.0.0.0:22  ...

# Do seu notebook:
ssh seuuser@192.168.1.30
# digite a senha e está dentro`,
      },
      {
        lang: "bash",
        code: `# Syncthing: sincronização tipo Dropbox entre dispositivos
# Adicione o repositório oficial
sudo curl -o /usr/share/keyrings/syncthing-archive-keyring.gpg \\
    https://syncthing.net/release-key.gpg
echo "deb [signed-by=/usr/share/keyrings/syncthing-archive-keyring.gpg] https://apt.syncthing.net/ syncthing stable" | \\
    sudo tee /etc/apt/sources.list.d/syncthing.list

sudo apt update && sudo apt install syncthing -y

# Habilite para o seu usuário:
systemctl --user enable --now syncthing.service

# Painel: http://localhost:8384 (no servidor)`,
      },
      {
        lang: "bash",
        code: `# Para acessar de fora de casa (cuidado!), use VPN ao invés de
# abrir porta no roteador. Tailscale é a solução fácil:
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
# Abre uma URL para você logar com Google/email
# Pronto: o servidor ganha um IP privado tipo 100.64.x.x
# acessível de qualquer dispositivo com Tailscale instalado`,
      },
    ],
    points: [
      "Use HD dedicado em /mnt/dados — separa sistema de arquivos pessoais para fácil reinstalação.",
      "Samba é o jeito mais compatível de compartilhar: Windows, Mac, Android e iOS enxergam.",
      "smbpasswd cria senha do Samba separada do login Linux — anote em lugar seguro.",
      "SSH é seu controle remoto: administre o servidor de qualquer canto da casa.",
      "Syncthing replica pastas entre dispositivos sem servidor central — privacidade total.",
      "Para acesso fora de casa, prefira VPN (Tailscale, WireGuard) a abrir portas no roteador.",
      "Iniciante comum: deixar o servidor com IP dinâmico e perder o endereço quando o roteador reinicia.",
      "Iniciante comum: não fazer backup do próprio servidor e perder tudo quando o HD pifa.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Um servidor sem backup é uma bomba relógio. Configure um segundo HD com Timeshift ou rsync programado, ou um disco offline para backup mensal.",
      },
      {
        type: "tip",
        content: "Reserve IP fixo para o servidor no roteador (DHCP reservation). Assim ele sempre será 192.168.1.30 (ou o que você escolher), facilitando atalhos.",
      },
      {
        type: "danger",
        content: "Nunca abra a porta 22 (SSH) ou 445 (Samba) direto na internet. Use Tailscale ou WireGuard. Bots fazem milhares de tentativas de invasão por hora.",
      },
      {
        type: "info",
        content: "PC consumindo 25W ligado 24h gasta cerca de R$ 12 a R$ 18 por mês de energia no Brasil. Mais barato que qualquer plano de nuvem com 1 TB.",
      },
    ],
  },
  {
    slug: "usb-persistente",
    section: "projetos",
    title: "Lubuntu portátil em pen drive",
    difficulty: "intermediario",
    subtitle: "Carregue seu sistema completo, com programas e arquivos, no bolso.",
    intro: `Imagine ter o seu Linux completo num pen drive: senha, programas, papel de parede, arquivos. Você pluga em qualquer PC do mundo, dá boot e está em casa. É como aquele kit de viagem com tudo separadinho: sai do hotel com a mala pronta. Esse é o conceito de live USB persistente.

Diferente do live USB comum (que esquece tudo ao desligar), o persistente reserva um espaço no pen drive para guardar configurações, programas instalados e arquivos. Ideal para quem usa PCs públicos (lan house, biblioteca, casa de parente) sem querer deixar rastro.

Existem dois caminhos: usar o próprio Lubuntu live com persistência (mais simples) ou instalar um Lubuntu completo dentro do pen drive (mais flexível, parece um PC normal). Vamos ver os dois. Você precisa de um pen drive bom — o vagabundo de R$ 20 vai morrer rápido com tanta escrita. Recomendado SanDisk, Kingston, Samsung de pelo menos 32 GB, idealmente USB 3.0.`,
    codes: [
      {
        lang: "bash",
        code: `# Caminho 1: Live USB persistente com mkusb (mais fácil)
sudo add-apt-repository ppa:mkusb/ppa -y
sudo apt update
sudo apt install --install-recommends mkusb mkusb-nox usb-pack-efi -y

# Abra a interface gráfica
sudo mkusb
# Escolha "Install (make a boot device)" > "Persistent live"
# Selecione o ISO do Lubuntu e o pen drive`,
      },
      {
        lang: "bash",
        code: `# Caminho 2: instalação completa direto no pen drive
# Boote pelo live USB do Lubuntu (com OUTRO pen drive)
# No instalador Calamares:
# 1. Quando perguntar do disco, escolha o pen drive (cuidado!)
# 2. Particionamento manual:
#    - 4 GB swap
#    - 28 GB ext4 em / (raiz)
# 3. IMPORTANTE: instale o GRUB no pen drive, não no HD interno!

# Confirme com lsblk antes de prosseguir
lsblk
# sda = HD interno (NÃO mexer)
# sdb = pen drive (instalar aqui)`,
      },
      {
        lang: "bash",
        code: `# Reduza desgaste do pen drive: mude a partição raiz para usar
# noatime (não atualizar timestamp a cada leitura)
sudo nano /etc/fstab
# Mude:
# UUID=xxx / ext4 errors=remount-ro 0 1
# Para:
# UUID=xxx / ext4 noatime,errors=remount-ro 0 1

sudo mount -o remount /
findmnt /
# saída deve incluir noatime entre as opções`,
      },
      {
        lang: "bash",
        code: `# Mantenha logs em RAM (não escreve no pen drive toda hora)
sudo apt install log2ram -y

# Edite /etc/log2ram.conf se quiser ajustar tamanho:
# SIZE=128M  → ajuste conforme RAM disponível

sudo systemctl enable --now log2ram
df -h /var/log
# saída: tmpfs   128M   ...`,
      },
      {
        lang: "bash",
        code: `# Crie o usuário com senha forte (PC alheio = risco maior)
# Já feito na instalação, mas você pode trocar:
passwd

# Habilite criptografia da pasta /home (faça ANTES de usar muito)
# Pelo Calamares, na instalação, marque "encrypt my home folder"
# Caso já tenha instalado, é mais fácil reinstalar com a opção ativa`,
      },
      {
        lang: "bash",
        code: `# Teste em PCs diferentes: BIOS antiga e UEFI moderna
# Boot menu costuma ser:
# F12 (Dell, Lenovo)
# F10 (HP)
# F2 ou Esc (Acer)
# Option (Mac com Intel)

# Na BIOS, desative "Secure Boot" se aparecer mensagem de erro
# (em PC pessoal — não mexa em PC de trabalho/escola)`,
      },
      {
        lang: "bash",
        code: `# Backup do pen drive: faça uma imagem completa de tempos em tempos
# Plugue num PC e descubra o nome do pen
lsblk

# Crie imagem (vai ocupar o tamanho TOTAL do pen, mesmo que só 30% usado)
sudo dd if=/dev/sdb of=~/backup-pendrive.img bs=4M status=progress
# Pra restaurar:
# sudo dd if=~/backup-pendrive.img of=/dev/sdb bs=4M status=progress`,
      },
    ],
    points: [
      "Pen drive persistente guarda configurações entre boots, diferente do live USB normal.",
      "mkusb cria persistência sem precisar instalar — mais rápido para começar.",
      "Instalação completa no pen drive funciona como PC normal mas é mais sensível a desgaste.",
      "Use pen drives bons (SanDisk Ultra, Samsung Bar) e USB 3.0 para velocidade aceitável.",
      "noatime no fstab e log2ram reduzem escrita e prolongam vida do pen drive.",
      "Tecla de boot menu varia por fabricante: F12, F10, F2, Esc — anote a do seu PC.",
      "Iniciante comum: instalar e perceber que o GRUB foi para o HD do PC alheio.",
      "Iniciante comum: usar pen drive de R$ 20 e ele queimar em duas semanas de uso.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Atenção tripla na hora de escolher o disco no instalador. Se errar e marcar o HD interno, formata o sistema do dono do PC. Sempre use lsblk antes.",
      },
      {
        type: "warning",
        content: "Pen drives gastam por escrita. Mesmo um SanDisk bom vai cansar em 2-3 anos de uso diário. Faça backup do conteúdo do pen periodicamente.",
      },
      {
        type: "tip",
        content: "Para uso muito intenso, prefira um SSD externo USB-C. Custa um pouco mais, mas dura 10x mais e voa em comparação ao pen drive comum.",
      },
      {
        type: "info",
        content: "Macs com chip Apple Silicon (M1/M2/M3) NÃO bootam Lubuntu por pen drive. Funciona apenas em Macs Intel com Secure Boot desativado.",
      },
    ],
  },
  {
    slug: "sala-de-aula",
    section: "projetos",
    title: "Sala de aula com Lubuntu",
    difficulty: "intermediario",
    subtitle: "Equipando uma sala inteira com PCs reaproveitados e software educacional.",
    intro: `Escolas públicas e ONGs no Brasil têm um problema crônico: PCs antigos, doados, com Windows pirata travando. Lubuntu resolve isso elegantemente — mesmo um Pentium 4 de 2005 com 1 GB de RAM consegue rodar navegador, editor de texto e ferramentas educativas. Pense numa "sala de aula em caixa": instalou uma vez, replica em todas as máquinas, professor controla tudo de uma só estação.

Esse capítulo agrupa o conhecimento de várias seções anteriores num projeto pedagógico real. O fluxo é: preparar uma máquina modelo (golden image), clonar para todas as outras, configurar usuários separados para alunos, instalar suite educacional (GCompris, KGeography, Tux Math, Scratch) e dar ao professor uma forma de monitorar telas e enviar arquivos.

Vamos ver também práticas básicas de manutenção: snapshot do estado limpo (Timeshift) para reverter quando aluno destrói config, restrição de instalação de programas, bloqueio de sites adultos com filtro DNS. No final, você sai com um manual de implantação que serve para escola pequena, ONG, telecentro ou laboratório universitário.`,
    codes: [
      {
        lang: "bash",
        code: `# 1) Prepare a "máquina modelo" (golden image) com tudo configurado
# Instale Lubuntu padrão e adicione o pacotão educacional
sudo apt update
sudo apt install -y \\
    gcompris-qt kgeography ktouch tuxmath tuxpaint \\
    scratch stellarium kalzium kalgebra \\
    libreoffice-l10n-pt-br thunderbird firefox-locale-pt`,
      },
      {
        lang: "bash",
        code: `# 2) Crie usuário "aluno" com perfil padrão para clonar
sudo adduser aluno
# Defina senha simples (ex: aluno123) — vai ser trocada por aluno

# Configure papel de parede, ícones, navegador como gostaria que
# todo aluno encontrasse na primeira vez. Tudo dentro de /home/aluno

# Depois, salve esse perfil como modelo:
sudo cp -a /home/aluno /etc/skel.aluno`,
      },
      {
        lang: "bash",
        code: `# 3) Snapshot do sistema completo com Timeshift
sudo apt install timeshift -y
sudo timeshift --create --comments "modelo limpo sala 1" --tags D
# saída: Snapshot saved successfully

# Aluno bagunçou? Restaure em 5 minutos:
# sudo timeshift --restore --snapshot '<nome-do-snapshot>'`,
      },
      {
        lang: "bash",
        code: `# 4) Clone para outras máquinas com Clonezilla (USB bootável)
# Boote pelo live USB do Clonezilla na máquina modelo
# Escolha: device-image > local_dev > save_disk
# Salve a imagem em HD externo

# Em cada PC novo, boote o Clonezilla e:
# device-image > local_dev > restoredisk
# Em 10-15 minutos cada PC fica idêntico ao modelo`,
      },
      {
        lang: "bash",
        code: `# 5) Filtro de conteúdo: DNS pedagógico (bloqueia sites adultos)
# OpenDNS Family Shield é gratuito
sudo nmcli con mod "Conexão cabeada 1" \\
    ipv4.dns "208.67.222.123 208.67.220.123"
sudo nmcli con mod "Conexão cabeada 1" ipv4.ignore-auto-dns yes
sudo nmcli con up "Conexão cabeada 1"

# Testa: deve dar bloqueio
nslookup pornhub.com
# resposta deve ser 0.0.0.0 ou redirecionamento`,
      },
      {
        lang: "bash",
        code: `# 6) Estação do professor controla a sala com Veyon
sudo apt install veyon-master veyon-service -y

# No PC do professor: veyon-configurator > Master
# Nos PCs dos alunos: veyon-configurator > Service
# Adicione o IP de cada PC aluno na lista do master

# Recursos: ver miniaturas das telas, bloquear todas, mostrar tela
# do prof em projetor, enviar mensagem em massa, encerrar sessão`,
      },
      {
        lang: "bash",
        code: `# 7) Reset diário automático: limpa a HOME do aluno toda madrugada
sudo crontab -e
# Adicione:
# 0 3 * * * rsync -a --delete /etc/skel.aluno/ /home/aluno/

# Manhã seguinte, aluno entra com perfil zerado
# (avise os alunos para salvar arquivos no pen drive!)`,
      },
    ],
    points: [
      "Pacote gcompris-qt + kgeography + tuxmath + scratch é a base educacional gratuita do Linux.",
      "Crie um perfil 'aluno' modelo e use /etc/skel para replicar em novos usuários.",
      "Timeshift permite reverter qualquer bagunça do aluno em 5 minutos, sem reinstalar.",
      "Clonezilla replica disco inteiro entre PCs idênticos em 10-15 minutos cada.",
      "DNS do OpenDNS Family Shield bloqueia gratuitamente conteúdo adulto.",
      "Veyon dá ao professor controle visual da sala: miniaturas, bloqueio, transmissão.",
      "Iniciante comum: deixar senha de admin igual em todos os PCs e algum aluno descobrir.",
      "Iniciante comum: não avisar os alunos do reset diário e perderem o trabalho da véspera.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Faça uma 'cartilha do laboratório' impressa: papel de parede mostra senha do Wi-Fi, regras básicas (não trocar fundo, salvar em pen drive), nome do responsável.",
      },
      {
        type: "info",
        content: "Para escolas públicas no Brasil, o programa LE (Linux Educacional) já vinha pronto baseado em Ubuntu/Lubuntu. Vale conferir versões recentes e suas customizações.",
      },
      {
        type: "warning",
        content: "Antes de aplicar filtro DNS, avise os professores: alguns sites úteis (YouTube educacional, redes sociais para projetos) podem cair na rede automaticamente.",
      },
      {
        type: "success",
        content: "Documente tudo no GitHub ou em pasta compartilhada: scripts, ISO modelo, configurações Veyon. Outros voluntários podem replicar o projeto em outras escolas.",
      },
    ],
  },
];
