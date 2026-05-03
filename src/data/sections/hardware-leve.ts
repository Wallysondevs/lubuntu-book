import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "zram-swap",
    section: "hardware-leve",
    title: "ZRAM e swap: respirando com pouca RAM",
    difficulty: "intermediario",
    subtitle: "Como o Lubuntu finge ter mais memória do que tem.",
    intro: `Imagine a memória RAM como o tampo da sua mesa de estudo: cabe um número limitado de cadernos abertos ao mesmo tempo. Quando enche, você precisa fechar um caderno para abrir outro. O Linux faz parecido: quando a RAM lota, ele guarda partes menos usadas em outro lugar para liberar espaço. Esse "outro lugar" é o swap.

O swap tradicional fica no disco (HD ou SSD). Funciona, mas é lento, porque mexer no disco é centenas de vezes mais devagar que mexer na RAM. Em máquinas antigas com pouca memória isso aparece como travamentos longos quando você abre muitas abas no Firefox.

A ZRAM é uma ideia mais esperta: cria um pedaço de swap dentro da própria RAM, mas comprimido. É como dobrar suas roupas a vácuo na mala: cabe mais coisa no mesmo espaço, mas você gasta um pouquinho de CPU para comprimir e descomprimir. Em PCs antigos com 2-4 GB de RAM, ZRAM costuma ser o ajuste que mais melhora a sensação de fluidez.

Neste capítulo você vai inspecionar quanto swap o Lubuntu já tem, ativar a ZRAM (que pode ou não vir pronta na sua versão) e ajustar o "swappiness", o parâmetro que diz quão cedo o Linux começa a usar o swap. Mexer aqui é seguro: nada apaga arquivos seus, é só configuração de memória.`,
    codes: [
      {
        lang: "bash",
        code: `# Veja quanta RAM e swap o sistema tem agora
free -h
# saída exemplo:
#                total        used        free
# Mem:           3,7Gi       1,2Gi       1,1Gi
# Swap:          2,0Gi          0B       2,0Gi
# -h mostra em formato humano (Gi, Mi) em vez de KB`,
      },
      {
        lang: "bash",
        code: `# Veja quais swaps estão ativos e de que tipo
swapon --show
# NAME       TYPE       SIZE  USED PRIO
# /swapfile  file         2G    0B   -2
# /dev/zram0 partition  1,9G    0B  100
# Tipo "partition" com nome /dev/zram0 = ZRAM ativa
# Prioridade maior (100) é usada antes do disco (-2)`,
      },
      {
        lang: "bash",
        code: `# Instale o gerenciador de ZRAM (se não vier pronto)
sudo apt update
sudo apt install zram-config -y

# Reinicie para ativar
sudo reboot
# Depois confira novamente com: swapon --show`,
      },
      {
        lang: "bash",
        code: `# Ajustando o "swappiness" — quão cedo o sistema usa swap
# Valor padrão no Ubuntu: 60 (quase sempre alto demais para desktop)
cat /proc/sys/vm/swappiness
# 60

# Teste um valor mais baixo para sessão atual:
sudo sysctl vm.swappiness=10
# Agora o sistema só recorre ao swap quando a RAM realmente apertar`,
      },
      {
        lang: "bash",
        code: `# Tornar o swappiness=10 permanente entre reboots
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf
# /etc/sysctl.d/99-swappiness.conf
# vm.swappiness=10

# Aplicar sem reiniciar:
sudo sysctl --system`,
      },
      {
        lang: "bash",
        code: `# Criar um arquivo de swap manual (caso não exista nenhum)
sudo fallocate -l 2G /swapfile      # cria arquivo de 2 GB
sudo chmod 600 /swapfile            # só root pode ler/escrever
sudo mkswap /swapfile               # marca como swap
sudo swapon /swapfile               # ativa agora

# Para sobreviver ao reboot, anote em /etc/fstab:
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`,
      },
    ],
    points: [
      "Swap = espaço extra de memória; ZRAM = swap comprimido dentro da RAM.",
      "free -h mostra RAM e swap; swapon --show lista todos os dispositivos ativos.",
      "ZRAM acelera muito PCs com 2-4 GB de RAM, gastando um pouco de CPU.",
      "swappiness controla a vontade do kernel de mover páginas para o swap (0-100).",
      "Em desktop, swappiness entre 10 e 30 costuma deixar tudo mais responsivo.",
      "Arquivo de swap (/swapfile) substitui partição de swap em instalações novas.",
      "Iniciante comum: ativar ZRAM e desligar o swap do disco — sem fallback, travamentos pioram em pico de uso.",
      "Iniciante comum: confundir swap cheio com falta de RAM — o normal é o sistema usar swap aos poucos.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Em PCs com SSD, swap no disco gasta muito menos a saúde do que se imagina. Não desabilite o swapfile só por medo — combine com swappiness baixo.",
      },
      {
        type: "info",
        content: "ZRAM ocupa parte da sua RAM (em geral metade) para criar o espaço comprimido. Em sistemas com mais de 8 GB, o ganho é pequeno; em 2 GB é gigantesco.",
      },
      {
        type: "warning",
        content: "Não crie swap gigante (16 GB+) na esperança de compensar pouca RAM. Se o sistema viver no swap, a fluidez vai morrer; mais RAM física é a única solução real.",
      },
    ],
  },
  {
    slug: "gerenciar-energia",
    section: "hardware-leve",
    title: "Gerenciamento de energia em notebooks",
    difficulty: "iniciante",
    subtitle: "Estendendo a bateria do seu laptop com poucos comandos.",
    intro: `Notebook é como bicicleta: dá para pedalar pesado e chegar suado, ou pedalar leve e chegar inteiro. O Linux, por padrão, costuma vir pedalando médio, sem aproveitar todos os truques que o hardware moderno oferece para economizar energia. Resultado: a bateria que durava 6 horas no Windows entrega só 4 no Lubuntu recém-instalado.

A boa notícia é que dá para mudar isso facilmente. Existem duas ferramentas estrelas: o TLP (que aplica dezenas de ajustes finos automaticamente) e o powertop (que mede o consumo e sugere otimizações). Em conjunto, costumam recuperar de 30 minutos a 2 horas de bateria.

O LXQt em si já é leve, então o problema raramente é a interface. O que come bateria é o brilho da tela em 100%, o Wi-Fi sem economia de energia, o disco girando à toa, a placa de vídeo dedicada acesa quando ninguém pediu. O TLP cuida de quase tudo isso sem você precisar entender cada detalhe.

Neste capítulo você instala o TLP, vê os ajustes que ele aplica e aprende a forçar o brilho via terminal — útil quando as teclas Fn não funcionam direito. Não mexa nas configurações de hibernação se não tiver swap suficiente, isso é assunto do próximo capítulo.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar o TLP — aplica perfis de economia automaticamente
sudo apt update
sudo apt install tlp tlp-rdw -y

# Iniciar o serviço
sudo systemctl enable --now tlp.service

# Ver o status atual
sudo tlp-stat -s
# +++ TLP Status
# State          = enabled
# Last run       = ...`,
      },
      {
        lang: "bash",
        code: `# Ver quanto resta de bateria e o consumo médio
sudo tlp-stat -b
# +++ Battery Status
# /sys/class/power_supply/BAT0/manufacturer = LGC
# Charge                                    = 78.4 %
# Energy_full                               = 41.5 Wh
# Power draw                                =  6.8 W
# 6.8 W em 41 Wh = ~6 horas restantes`,
      },
      {
        lang: "bash",
        code: `# Instalar o powertop e gerar relatório de consumo
sudo apt install powertop -y
sudo powertop
# Aperte Tab para navegar entre as abas:
# - Overview: o que mais gasta agora
# - Idle stats: quanto a CPU dorme (mais = melhor)
# - Tunables: lista de ajustes; "Bad" pode virar "Good" com Enter`,
      },
      {
        lang: "bash",
        code: `# Aplicar todas as otimizações sugeridas pelo powertop de uma vez
sudo powertop --auto-tune
# Atenção: pode desligar dispositivos USB que você usa.
# Se mouse/teclado USB ficar lento, refaça o ajuste manualmente.`,
      },
      {
        lang: "bash",
        code: `# Controle manual do brilho da tela
# Descobrir o caminho:
ls /sys/class/backlight/
# intel_backlight  ou  amdgpu_bl0

# Ler valor atual e máximo
cat /sys/class/backlight/intel_backlight/brightness
cat /sys/class/backlight/intel_backlight/max_brightness
# 4500
# 7500

# Mudar para 50% (precisa de sudo)
echo 3750 | sudo tee /sys/class/backlight/intel_backlight/brightness`,
      },
      {
        lang: "bash",
        code: `# Saber quanto tempo a bateria está aguentando ao longo dos dias
upower -i $(upower -e | grep BAT)
# energy:               32,1 Wh
# energy-full:          41,5 Wh
# energy-full-design:   45,0 Wh
# energy-rate:          7,2 W
# percentage:           77%
# time to empty:        4,4 hours`,
      },
    ],
    points: [
      "TLP é o ajuste de bateria padrão da comunidade: instalar e esquecer.",
      "powertop mede o consumo real e mostra dispositivos gulosos em ordem.",
      "Brilho de tela é o maior vilão; reduzir 30% costuma somar 1h de bateria.",
      "Wi-Fi com economia ativada (TLP cuida) ajuda muito em uso casual.",
      "upower mostra histórico e expectativa de duração restante da bateria.",
      "GPU dedicada (NVIDIA, AMD) gasta mais; suspenda quando não estiver renderizando.",
      "Iniciante comum: rodar powertop --auto-tune e estranhar mouse USB lento — refaça os tunables conscientemente.",
      "Iniciante comum: deixar o brilho em 100% e culpar o Lubuntu pela bateria curta.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Conecte o notebook na tomada e rode 'sudo tlp-stat -c' para ver os perfis AC e BAT. Você pode editar /etc/tlp.conf se quiser regulagem fina.",
      },
      {
        type: "warning",
        content: "Não instale TLP e laptop-mode-tools ao mesmo tempo. Os dois brigam pelos mesmos arquivos do kernel e a bateria piora em vez de melhorar.",
      },
      {
        type: "info",
        content: "Bateria que enche e descarrega 100% todo dia degrada mais rápido. TLP permite definir limites de carga (ex.: parar em 80%) em laptops Lenovo, ASUS e alguns outros.",
      },
      {
        type: "success",
        content: "Depois de instalar TLP, rode 'sudo tlp-stat -p' para ver o estado dos processadores. CPU governor 'powersave' em bateria + 'performance' na tomada é o ideal.",
      },
    ],
  },
  {
    slug: "drivers-graficos",
    section: "hardware-leve",
    title: "Drivers gráficos: Intel, AMD e NVIDIA",
    difficulty: "intermediario",
    subtitle: "Como descobrir e instalar o driver certo da sua placa de vídeo.",
    intro: `O driver gráfico é o tradutor entre o sistema e a placa de vídeo. Sem ele, você ainda enxerga a tela, mas em modo "letrinha grande": resolução errada, vídeos travando, jogos impossíveis. Com o driver certo, a mesma máquina ganha animações suaves, vídeo em hardware e até alguma chance de jogar.

No Linux a situação dos drivers depende muito do fabricante. Intel e AMD escrevem drivers abertos, que já vêm prontos no Lubuntu — quase nunca dão trabalho. NVIDIA é uma história diferente: o driver bom dela é fechado e precisa ser instalado à parte. Existe um aberto chamado nouveau, mas é mais lento e travado.

Outra dúvida frequente é "qual placa eu tenho?". O Linux tem comandos simples que respondem isso na hora. Antes de tentar instalar driver, sempre confirme o modelo — instalar o driver errado é caminho garantido para tela preta no próximo boot.

Neste capítulo você vai descobrir sua placa, ver qual driver está ativo, e aprender o procedimento seguro do Lubuntu para trocar de driver. O atalho gráfico em "Software & Updates → Additional Drivers" resolve 90% dos casos sem terminal.`,
    codes: [
      {
        lang: "bash",
        code: `# Descobrir o modelo da placa de vídeo
lspci -k | grep -EA3 'VGA|3D|Display'
# 00:02.0 VGA compatible controller: Intel Corporation HD Graphics 620
#   Subsystem: Lenovo HD Graphics 620
#   Kernel driver in use: i915
#   Kernel modules: i915
# A linha "Kernel driver in use" diz qual driver está ativo agora`,
      },
      {
        lang: "bash",
        code: `# Versão do servidor gráfico em uso (X11 ou Wayland)
echo $XDG_SESSION_TYPE
# x11   ← Lubuntu padrão usa X11

# Para detalhes do OpenGL/3D
sudo apt install mesa-utils -y
glxinfo | grep "OpenGL renderer"
# OpenGL renderer string: Mesa Intel(R) HD Graphics 620 (KBL GT2)`,
      },
      {
        lang: "bash",
        code: `# Listar drivers proprietários disponíveis para sua máquina
ubuntu-drivers devices
# == /sys/devices/pci0000:00/0000:00:01.0/0000:01:00.0 ==
# vendor   : NVIDIA Corporation
# model    : GP108M [GeForce MX150]
# driver   : nvidia-driver-535 - distro non-free recommended
# driver   : nvidia-driver-470 - distro non-free
# driver   : xserver-xorg-video-nouveau - distro free builtin`,
      },
      {
        lang: "bash",
        code: `# Instalar o driver recomendado automaticamente
sudo ubuntu-drivers autoinstall
# Lê a saída de "ubuntu-drivers devices" e instala o "recommended"

# Reiniciar para ativar
sudo reboot`,
      },
      {
        lang: "bash",
        code: `# Instalar uma versão específica de driver NVIDIA
sudo apt install nvidia-driver-535 -y
# saída: configurando módulos do kernel...

# Conferir se carregou após reboot
nvidia-smi
# +-----------------------------------------------------------+
# | NVIDIA-SMI 535.86  Driver Version: 535.86  CUDA: 12.2     |
# |  GPU  Name        Memory-Usage   GPU-Util                  |
# |  0    GeForce MX150  142MiB/2048MiB  0%                    |
# +-----------------------------------------------------------+`,
      },
      {
        lang: "bash",
        code: `# Voltar ao driver aberto se algo der errado
sudo apt remove --purge 'nvidia-*' -y
sudo apt install xserver-xorg-video-nouveau -y
sudo reboot
# Sempre tenha um plano de volta antes de mexer em driver gráfico!`,
      },
    ],
  points: [
      "lspci -k | grep -EA3 'VGA' mostra placa de vídeo e driver ativo.",
      "Intel e AMD usam drivers abertos (i915, amdgpu) que já vêm prontos.",
      "NVIDIA precisa do driver fechado para desempenho decente; nouveau é fallback.",
      "ubuntu-drivers devices lista o que está disponível para sua máquina.",
      "ubuntu-drivers autoinstall escolhe o driver recomendado automaticamente.",
      "Sempre reinicie depois de trocar driver; só assim o módulo novo carrega.",
      "Iniciante comum: instalar NVIDIA fechado em notebook híbrido sem configurar Optimus — resulta em tela preta.",
      "Iniciante comum: mexer em xorg.conf à mão em 2024 — quase nunca é necessário e quebra o servidor gráfico.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Antes de trocar driver gráfico, anote como entrar no modo de recuperação (capítulo de solução de problemas). Tela preta pós-reboot é o erro mais clássico.",
      },
      {
        type: "tip",
        content: "Em notebooks com placa híbrida (Intel + NVIDIA), instale também o pacote 'nvidia-prime'. Ele permite alternar entre placas com 'prime-select on-demand'.",
      },
      {
        type: "info",
        content: "O Lubuntu não inclui Steam ou Proton por padrão, mas aceita instalar ambos. Para jogar, NVIDIA fechada ou AMD aberta + Mesa atualizado costumam ser a combinação mais lisa.",
      },
      {
        type: "danger",
        content: "Nunca baixe o instalador .run do site da NVIDIA para usar no Lubuntu. Ele bagunça a árvore de pacotes do APT e quebra atualizações futuras. Use sempre os pacotes do repositório.",
      },
    ],
  },
  {
    slug: "wifi-bluetooth-driver",
    section: "hardware-leve",
    title: "Wi-Fi e Bluetooth: drivers e firmwares",
    difficulty: "intermediario",
    subtitle: "Quando a rede sem fio simplesmente não aparece.",
    intro: `Quase todo notebook moderno tem chip Wi-Fi e Bluetooth integrado, geralmente fabricado pela Intel, Realtek, Broadcom ou Atheros. No Linux, a maioria desses chips funciona "de fábrica" — mas há casos chatos onde nada aparece, ou conecta e cai a cada cinco minutos. A culpa quase sempre é de um firmware faltando.

Firmware é um pequeno software que mora dentro do chip e fala com o driver do kernel. Diferente do driver, o firmware não pode ser escrito por qualquer pessoa — vem de quem fez a peça. Por questões de licença, alguns firmwares não vêm na imagem padrão do Ubuntu/Lubuntu e você precisa instalar o pacote linux-firmware-nonfree manualmente.

Bluetooth segue lógica parecida. O serviço bluetoothd cuida da comunicação, e ferramentas como blueman-applet ou o LXQt Bluetooth dão a interface. Quando o ícone aparece cinza, normalmente é só o serviço parado; quando aparece o ícone mas nada parea, é firmware ou conflito com Wi-Fi (alguns chips compartilham a antena).

Neste capítulo você aprende a identificar seu chip Wi-Fi/Bluetooth, instalar firmwares que faltam, ativar/desativar via comando e diagnosticar conexões instáveis. A maioria dos problemas se resolve em três comandos.`,
    codes: [
      {
        lang: "bash",
        code: `# Identificar o chip Wi-Fi e o driver em uso
lspci -k | grep -EA3 'Network|Wireless'
# 02:00.0 Network controller: Intel Corporation Wi-Fi 6 AX201
#   Subsystem: Intel Corporation
#   Kernel driver in use: iwlwifi
#   Kernel modules: iwlwifi`,
      },
      {
        lang: "bash",
        code: `# Para Wi-Fi USB, é lsusb (não lspci)
lsusb
# Bus 001 Device 003: ID 0bda:c811 Realtek RTL8811CU Wireless LAN
# Anote o ID (vendedor:produto) — útil para procurar driver`,
      },
      {
        lang: "bash",
        code: `# Instalar pacote de firmwares "não-livres" (resolve a maioria dos casos)
sudo apt update
sudo apt install linux-firmware -y

# Em casos raros, o pacote extra ajuda
sudo apt install firmware-iwlwifi firmware-realtek firmware-atheros -y
# (alguns desses só existem no Debian; apt vai avisar se não achar)

sudo reboot`,
      },
      {
        lang: "bash",
        code: `# Ver redes Wi-Fi disponíveis pelo terminal
nmcli device wifi list
# IN-USE  BSSID              SSID         CHAN  RATE        SIGNAL  BARS
# *       AA:BB:CC:DD:EE:FF  CasaWifi      6    270 Mbit/s   80     ▂▄▆_

# Conectar a uma rede
nmcli device wifi connect "CasaWifi" password "minhasenha"`,
      },
      {
        lang: "bash",
        code: `# Bluetooth: verificar se o serviço está rodando
systemctl status bluetooth
# Active: active (running)

# Se inativo, ligar agora e habilitar no boot
sudo systemctl enable --now bluetooth

# Bluetoothctl é o terminal interativo de Bluetooth
bluetoothctl
# [bluetooth]# power on
# [bluetooth]# scan on
# [NEW] Device 04:1B:6D:XX  Mouse Logitech
# [bluetooth]# pair 04:1B:6D:XX
# [bluetooth]# connect 04:1B:6D:XX
# [bluetooth]# exit`,
      },
      {
        lang: "bash",
        code: `# Diagnosticar Wi-Fi caindo: olhar o log do kernel
dmesg --human | grep -iE 'wlan|wifi|iwl|firmware'
# [   23.412] iwlwifi 0000:02:00.0: loaded firmware version 77.xx.xx
# [  102.918] iwlwifi 0000:02:00.0: Microcode SW error detected
# Erros de firmware = atualizar pacote linux-firmware`,
      },
      {
        lang: "bash",
        code: `# Desligar/ligar rapidamente o rádio Wi-Fi (modo avião)
nmcli radio wifi off
nmcli radio wifi on
# útil quando a conexão "embaralha"
# bluetooth tem comando análogo:
nmcli radio bluetooth off`,
      },
    ],
    points: [
      "linux-firmware contém os blobs binários que muitos chips precisam.",
      "lspci -k identifica chip Wi-Fi interno; lsusb identifica adaptadores USB.",
      "nmcli é o cliente de NetworkManager pelo terminal; útil quando a interface gráfica falha.",
      "bluetoothctl é o terminal interativo padrão para parear dispositivos Bluetooth.",
      "Erros de 'Microcode SW error' no dmesg indicam firmware velho ou bugado.",
      "Wi-Fi e Bluetooth podem compartilhar antena; alto tráfego em um afeta o outro.",
      "Iniciante comum: trocar de canal do roteador esperando resolver Wi-Fi sem instalar firmware atualizado primeiro.",
      "Iniciante comum: parear Bluetooth pelo blueman e depois acreditar que conectou — pareamento e conexão são passos distintos.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Se nada funciona com seu adaptador Wi-Fi USB, procure o ID (lsusb) no AskUbuntu. Quase sempre alguém já escreveu um passo a passo específico para o seu chip.",
      },
      {
        type: "warning",
        content: "Drivers Broadcom (BCM43xx) costumam dar trabalho. O pacote 'broadcom-sta-dkms' resolve, mas você precisa do kernel-headers instalado para o DKMS compilar o módulo.",
      },
      {
        type: "info",
        content: "rfkill list mostra se o Wi-Fi/Bluetooth está bloqueado por hardware (botão físico) ou software. Se for soft block, 'rfkill unblock all' resolve.",
      },
    ],
  },
  {
    slug: "otimizar-boot",
    section: "hardware-leve",
    title: "Acelerando o boot",
    difficulty: "intermediario",
    subtitle: "Cortando segundos da inicialização do Lubuntu.",
    intro: `O boot é como acordar de manhã: cada hábito que você arrasta consigo gasta um pouco de tempo até estar pronto para começar o dia. No Linux, o systemd inicia dezenas de serviços em paralelo, e algumas vezes carrega coisas que você nunca usou — Bluetooth em PC sem Bluetooth, ModemManager em máquina sem modem, Avahi em rede onde ninguém procura impressora.

A boa notícia é que o Lubuntu já é enxuto: boot típico em SSD fica entre 8 e 20 segundos. Em HD antigo, pode passar de 1 minuto. A maior parte do ganho vem de duas frentes: trocar o disco para SSD (transformação radical) e desativar serviços inúteis (transformação suave, segura, reversível).

A ferramenta-chave aqui se chama systemd-analyze. Ela cronometra quanto cada serviço demorou e produz uma "lista negra" dos vagarosos. Outra peça importante é o GRUB, o menu que aparece no boot. Reduzir o tempo de espera dele de 10 para 2 segundos já economiza tempo todo dia.

Neste capítulo você mede o boot, identifica vilões, desabilita serviços com cuidado e ajusta o GRUB. Nada irreversível: tudo o que você desligar pode ser religado em um comando.`,
    codes: [
      {
        lang: "bash",
        code: `# Quanto tempo o último boot demorou
systemd-analyze
# Startup finished in 2.541s (kernel) + 1.109s (initrd) + 12.832s (userspace) = 16.482s
# graphical.target reached after 12.831s in userspace`,
      },
      {
        lang: "bash",
        code: `# Listar os serviços mais lentos no boot
systemd-analyze blame | head -10
# 4.823s NetworkManager-wait-online.service
# 2.110s snapd.service
# 1.844s plymouth-quit-wait.service
# 1.012s systemd-journal-flush.service
# ...
# O topo da lista são candidatos a otimização`,
      },
      {
        lang: "bash",
        code: `# Desabilitar o serviço chato "wait-online" do NetworkManager
# (faz o boot esperar a rede ficar pronta — quase nunca necessário)
sudo systemctl disable NetworkManager-wait-online.service

# Conferir status
systemctl is-enabled NetworkManager-wait-online.service
# disabled`,
      },
      {
        lang: "bash",
        code: `# Desabilitar Bluetooth em desktops sem Bluetooth
sudo systemctl disable --now bluetooth.service

# Religar a qualquer momento
sudo systemctl enable --now bluetooth.service`,
      },
      {
        lang: "bash",
        code: `# Reduzir o tempo de espera do menu GRUB
sudo nano /etc/default/grub
# Encontre e ajuste:
# GRUB_TIMEOUT=2          (era 10)
# GRUB_TIMEOUT_STYLE=menu
# Salve (Ctrl+O, Enter, Ctrl+X)

# Aplicar a mudança
sudo update-grub
# Generating grub configuration file ...
# done`,
      },
      {
        lang: "bash",
        code: `# Mostrar gráfico SVG dos serviços para análise visual
systemd-analyze plot > boot.svg
# Abra com:
xdg-open boot.svg
# Cada barra colorida = um serviço; barras longas = candidatos a otimização`,
      },
      {
        lang: "bash",
        code: `# Listar serviços rodando AGORA (não só no boot)
systemctl list-units --type=service --state=running
# Útil para descobrir o que está consumindo CPU/RAM constantemente.`,
      },
    ],
    points: [
      "systemd-analyze mede o tempo total de boot dividido em kernel/initrd/userspace.",
      "blame mostra os serviços individuais ordenados do mais demorado para o menos.",
      "NetworkManager-wait-online é o vilão mais comum em desktops com Wi-Fi.",
      "Desabilitar é reversível: 'systemctl enable' devolve o serviço.",
      "GRUB_TIMEOUT em /etc/default/grub controla o menu de boot; rode update-grub depois.",
      "SSD reduz boot drasticamente — mais que qualquer otimização de software.",
      "Iniciante comum: desativar serviços críticos (apparmor, snapd) sem entender as consequências.",
      "Iniciante comum: editar /etc/default/grub e esquecer 'sudo update-grub' — a mudança não tem efeito.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Não desabilite serviços só porque o nome parece estranho. Antes, rode 'systemctl status nome.service' e leia a descrição.",
      },
      {
        type: "tip",
        content: "Em PCs com BIOS antiga, ative 'Fast Boot' nas opções da BIOS. Combinado com GRUB_TIMEOUT=0 e SSD, o Lubuntu liga em menos de 10 segundos.",
      },
      {
        type: "info",
        content: "Se 'systemd-analyze' diz 'Bootup is not yet finished', espere mais um pouco depois de logar — alguns serviços do usuário só sobem após o login.",
      },
      {
        type: "success",
        content: "Para visualizar o boot em tempo real, aperte Esc na hora do logo do Lubuntu. Você vê cada serviço subindo e identifica visualmente onde trava.",
      },
    ],
  },
  {
    slug: "monitorar-recursos",
    section: "hardware-leve",
    title: "Monitorando CPU, RAM, disco e temperatura",
    difficulty: "iniciante",
    subtitle: "Vendo o que seu PC está fazendo agora mesmo.",
    intro: `Saber o que está consumindo recursos é metade do trabalho de manter o computador rápido. É como ter um painel no carro: sem ele, você só percebe o problema quando o motor já está fundindo. No Linux, o "painel" são alguns comandos clássicos — top, htop, free, df — e ferramentas gráficas como o monitor LXQt-task-manager ou o gnome-system-monitor.

O htop é provavelmente a ferramenta mais querida. Mostra cada processo, ordenado por CPU ou RAM, com cores e atalhos para matar processo. Em PCs modestos, abrir o htop e ver "firefox: 1.2 GB de RAM" responde de cara por que o sistema está lento.

A temperatura é outra história. CPU acima de 90°C indica problema térmico (pasta velha, ventoinha entupida). O sensors mostra a temperatura de cada núcleo em tempo real, e o lm-sensors precisa de uma calibragem inicial via "sensors-detect" para reconhecer todos os termômetros do hardware.

Disco também merece atenção. df mostra quanto está cheio cada partição; du resume o tamanho de uma pasta. iostat (do pacote sysstat) mede tráfego de leitura/escrita — fundamental quando o sistema está lento mas a CPU está ociosa, sinal típico de disco saturado.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar as ferramentas se não estiverem
sudo apt install htop lm-sensors sysstat -y

# Calibrar sensores de temperatura
sudo sensors-detect --auto
# Detecta chips no I2C, SMBus e mostra quais módulos do kernel ativar`,
      },
      {
        lang: "bash",
        code: `# Ver CPU, RAM e processos em tempo real
htop
# Cores no topo: barras de uso por núcleo
# F6: muda critério de ordenação (CPU%, MEM%, TIME)
# F9: matar processo selecionado (envia sinal escolhido)
# F10 ou q: sair`,
      },
      {
        lang: "bash",
        code: `# Memória detalhada
free -h
#                total        used        free      shared  buff/cache   available
# Mem:           7,5Gi       2,1Gi       3,1Gi       412Mi       2,3Gi       4,8Gi
# Swap:          2,0Gi          0B       2,0Gi
# 'available' = quanto realmente sobra para abrir mais programas`,
      },
      {
        lang: "bash",
        code: `# Temperatura dos núcleos
sensors
# coretemp-isa-0000
# Adapter: ISA adapter
# Package id 0:  +52.0°C  (high = +100.0°C, crit = +100.0°C)
# Core 0:        +49.0°C
# Core 1:        +52.0°C
# Acima de 85°C em uso normal = problema térmico`,
      },
      {
        lang: "bash",
        code: `# Espaço em disco por partição
df -h
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/nvme0n1p2  234G  118G  104G  54% /
# /dev/nvme0n1p1  511M  6,1M  505M   2% /boot/efi

# Tamanho de uma pasta específica
du -sh ~/Downloads
# 4,2G  /home/voce/Downloads`,
      },
      {
        lang: "bash",
        code: `# Pasta cheia? Encontre os 10 maiores diretórios dentro de /home
sudo du -h /home --max-depth=2 2>/dev/null | sort -rh | head -10
# 25G   /home/voce
# 18G   /home/voce/Videos
# 4,2G  /home/voce/Downloads
# ...`,
      },
      {
        lang: "bash",
        code: `# Disco lento? Veja IO em tempo real
iostat -dx 2
# Atualiza a cada 2 segundos:
# Device  r/s    w/s    rkB/s   wkB/s   %util
# sda     12.0   3.0    540     128     85%
# %util alto e perto de 100% = disco saturado`,
      },
    ],
    points: [
      "htop é o monitor de processos amigável; F9 mata, F6 ordena.",
      "free -h mostra RAM real; o que importa é a coluna 'available'.",
      "sensors mostra temperatura por núcleo após calibrar com sensors-detect.",
      "df -h dá visão de partições; du -sh dá tamanho de pasta.",
      "iostat -dx 2 detecta disco saturado quando a CPU está ociosa.",
      "Use ncdu (sudo apt install ncdu) para navegar pelo uso de disco interativamente.",
      "Iniciante comum: olhar 'used' e achar que faltam 5 GB de RAM — esqueça 'used', olhe 'available'.",
      "Iniciante comum: matar processo com kill -9 sem tentar antes um sinal mais educado.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Em PCs com pouca RAM, abra o htop e ordene por MEM%. Quem aparece no topo (firefox, libreoffice, vscode) é o candidato a substituição por alternativa leve.",
      },
      {
        type: "info",
        content: "O LXQt vem com um indicador gráfico chamado lxqt-config-monitor. Para mais detalhes em janela, instale 'gnome-system-monitor' — funciona perfeitamente fora do GNOME.",
      },
      {
        type: "warning",
        content: "Temperaturas de 70-80°C sob carga pesada são normais. Acima de 90°C constante indica que é hora de limpar ventoinhas e refazer a pasta térmica.",
      },
    ],
  },
  {
    slug: "multi-monitor",
    section: "hardware-leve",
    title: "Configurando múltiplos monitores",
    difficulty: "intermediario",
    subtitle: "Estendendo, espelhando e organizando telas no LXQt.",
    intro: `Trabalhar com dois monitores é uma das melhorias de produtividade mais simples e dramáticas que existem. Em vez de alternar com Alt+Tab, você passa o olhar. Em vez de redimensionar janelas, você joga uma de cada lado. O Lubuntu suporta isso com um aplicativo gráfico próprio (lxqt-config-monitor) e com a ferramenta clássica xrandr no terminal.

Um detalhe interessante do LXQt é que ele usa o servidor X11 (não Wayland). Isso facilita bastante o uso do xrandr, que é estável e amplamente documentado. A maior parte dos problemas em multi-monitor não é Lubuntu, e sim a placa gráfica precisar do driver correto (assunto do capítulo de drivers gráficos).

Os modos comuns são três: estender (cada tela tem seu desktop), espelhar (mostram o mesmo conteúdo, útil em apresentações) e usar só uma das duas (notebook fechado ligado em monitor externo). O xrandr resolve qualquer combinação, e o lxqt-config-monitor cuida da maioria via cliques.

Neste capítulo você descobre as saídas de vídeo disponíveis, configura resolução e posição, e aprende a salvar a configuração para sobreviver ao reboot. Também veremos como lidar com a praga clássica do "monitor não detectado" — geralmente questão de cabo, driver ou ordem de ligar os equipamentos.`,
    codes: [
      {
        lang: "bash",
        code: `# Listar saídas de vídeo conectadas
xrandr --query
# Screen 0: minimum 320 x 200, current 1920 x 1080
# eDP-1 connected primary 1920x1080+0+0 (...)
#    1920x1080     60.00*+
#    1680x1050     59.95
# HDMI-1 connected 1920x1080+1920+0 (...)
#    1920x1080     60.00*+
# DP-1 disconnected (normal left inverted right x axis y axis)`,
      },
      {
        lang: "bash",
        code: `# Estender o desktop: HDMI à direita do notebook
xrandr --output eDP-1 --auto --primary \\
       --output HDMI-1 --auto --right-of eDP-1`,
      },
      {
        lang: "bash",
        code: `# Espelhar a imagem (mesmo conteúdo nos dois)
xrandr --output HDMI-1 --auto --same-as eDP-1`,
      },
      {
        lang: "bash",
        code: `# Desligar a tela do notebook e usar só o monitor externo
xrandr --output eDP-1 --off --output HDMI-1 --auto --primary

# Voltar atrás
xrandr --output eDP-1 --auto --primary`,
      },
      {
        lang: "bash",
        code: `# Definir resolução manualmente em uma saída
xrandr --output HDMI-1 --mode 1280x720 --rate 60

# Listar modos suportados pelo monitor
xrandr | grep -A1 'HDMI-1 connected'`,
      },
      {
        lang: "bash",
        code: `# Salvar configuração para rodar a cada login
mkdir -p ~/.config/autostart
cat > ~/.config/autostart/monitores.desktop <<'EOF'
[Desktop Entry]
Type=Application
Name=Configurar monitores
Exec=sh -c "xrandr --output eDP-1 --auto --primary --output HDMI-1 --auto --right-of eDP-1"
X-LXQt-Need-Tray=false
EOF
# Pronto: na próxima sessão LXQt, o xrandr roda sozinho`,
      },
      {
        lang: "bash",
        code: `# Interface gráfica para o mesmo trabalho
lxqt-config-monitor &
# Janela com cards arrastáveis representando cada monitor.
# Marque "Apply" para testar e "Save" para persistir.`,
      },
    ],
    points: [
      "xrandr --query lista saídas e quem está conectado/desconectado.",
      "--right-of, --left-of, --above, --below organizam a posição relativa.",
      "--same-as espelha; --off desliga a saída.",
      "--mode + --rate fixa resolução e taxa de atualização.",
      "lxqt-config-monitor é o atalho gráfico para o xrandr.",
      "Configurações em xrandr são voláteis; salve em autostart .desktop para sobreviver.",
      "Iniciante comum: trocar de cabo HDMI por adaptador barato e perder áudio ou ter cintilação.",
      "Iniciante comum: definir resolução não suportada pelo monitor — tela apaga até o sistema reverter sozinho.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de salvar a configuração definitiva, teste com xrandr no terminal. Se algo der errado, basta esperar 15s ou rodar 'xrandr --auto' para voltar ao padrão.",
      },
      {
        type: "info",
        content: "Em laptops com placa híbrida NVIDIA Optimus, a saída HDMI normalmente é controlada pela GPU dedicada. Pode ser preciso 'prime-select nvidia' antes que o monitor externo apareça.",
      },
      {
        type: "warning",
        content: "Wayland (que o Lubuntu não usa) ignora xrandr. Se um dia migrar para Wayland, troque por wlr-randr ou kanshi. Por enquanto, X11 + xrandr é o seu mundo.",
      },
    ],
  },
  {
    slug: "reduzir-uso-ram",
    section: "hardware-leve",
    title: "Reduzindo o uso de RAM no Lubuntu",
    difficulty: "intermediario",
    subtitle: "Truques para deixar uma máquina antiga ainda mais aliviada.",
    intro: `O Lubuntu já é considerado um dos sistemas Linux mais leves do mundo desktop. Em uma instalação limpa, ele costuma usar entre 400 MB e 700 MB de RAM em idle — bem menos que GNOME, KDE ou Windows. Ainda assim, em PCs com 1 GB ou 2 GB, cada megabyte conta. Este capítulo é sobre os ajustes finos que esticam ainda mais o sistema.

A primeira coisa a entender: a maior parte da RAM consumida vem dos aplicativos, não do LXQt. Firefox com 20 abas pode passar de 2 GB; LibreOffice abre ocupando 250 MB. Trocar esses programas por alternativas leves (qutebrowser, AbiWord, GNOME Office) é o ganho mais sólido. O capítulo de "alternativas leves" complementa este aqui.

Em segundo lugar, vêm os serviços de fundo. Snap, tracker, Avahi, ModemManager, CUPS — cada um come 30 a 100 MB. Em desktops sem impressora, sem celular, sem snap, dá para desligar vários e recuperar 200-400 MB facilmente.

Por último, há o ajuste de cache do kernel: o Linux gosta de manter dados recentes na RAM como cache "preditivo". Em geral é ótimo. Em máquinas muito apertadas, ajustar dirty_ratio e vfs_cache_pressure ajuda o sistema a soltar memória mais rápido. Mexa nesses parâmetros com cuidado.`,
    codes: [
      {
        lang: "bash",
        code: `# Quanto o sistema gasta em RAM agora (sem contar cache)
free -h
#                total        used        free  ...  available
# Mem:           1,9Gi       620Mi       890Mi  ...   1,1Gi
# 'available' é o que sobra de verdade — esse é o número que importa`,
      },
      {
        lang: "bash",
        code: `# Top 10 processos que mais consomem RAM
ps aux --sort=-%mem | awk 'NR<=11{print $4"% "$11}'
# 18.2% /usr/lib/firefox/firefox
# 6.4%  /usr/bin/pcmanfm-qt
# 2.1%  /usr/bin/lxqt-panel
# ...`,
      },
      {
        lang: "bash",
        code: `# Desligar o snapd (se você não usa pacotes Snap)
sudo systemctl disable --now snapd.service snapd.socket
sudo apt purge snapd -y
# Em geral economiza 100-200 MB de RAM permanentemente
# Use Flatpak ou .deb como alternativa`,
      },
      {
        lang: "bash",
        code: `# Desligar serviços comumente desnecessários em desktop comum
sudo systemctl disable --now \\
  ModemManager.service \\
  cups.service cups-browsed.service \\
  avahi-daemon.service avahi-daemon.socket
# Religue depois com 'systemctl enable --now nome.service' se precisar`,
      },
      {
        lang: "bash",
        code: `# Trocar Firefox por navegador leve (Falkon ou Midori)
sudo apt install falkon -y
# Falkon usa o motor Chromium, mas com interface Qt (combina com LXQt)
# Em RAM, ocupa cerca de 1/3 do Firefox para tarefa parecida`,
      },
      {
        lang: "bash",
        code: `# Ajustar dirty_ratio: quanto cache "sujo" o kernel acumula antes de gravar
echo 'vm.dirty_ratio=10' | sudo tee /etc/sysctl.d/99-ram-tweaks.conf
echo 'vm.dirty_background_ratio=5' | sudo tee -a /etc/sysctl.d/99-ram-tweaks.conf
echo 'vm.vfs_cache_pressure=200' | sudo tee -a /etc/sysctl.d/99-ram-tweaks.conf
sudo sysctl --system
# vfs_cache_pressure alto = kernel libera cache de inode mais cedo
# Em PCs com pouca RAM, melhora a sensação de fluidez`,
      },
      {
        lang: "bash",
        code: `# Desativar pré-visualizações de imagens no PCManFM-Qt (gasta RAM)
# Edite ~/.config/pcmanfm-qt/lxqt/settings.conf
nano ~/.config/pcmanfm-qt/lxqt/settings.conf
# Em [Thumbnail], coloque:
# showThumbnails=false
# Salve e reabra o gerenciador`,
      },
    ],
    points: [
      "Aplicativos pesam mais que o desktop em si — substituí-los rende mais RAM.",
      "snapd consome ~150 MB constantes; remova se preferir Flatpak ou .deb.",
      "ModemManager, CUPS e Avahi podem ser desligados em desktop sem impressora/modem.",
      "vfs_cache_pressure controla o quão rápido o kernel solta cache de inode.",
      "Pré-visualizações no PCManFM-Qt podem dobrar o uso de RAM em pastas com muitas fotos.",
      "ZRAM (capítulo anterior) complementa todas essas otimizações.",
      "Iniciante comum: confundir 'used' alto com escassez de RAM — buff/cache é liberado quando precisa.",
      "Iniciante comum: desligar serviços essenciais (NetworkManager, dbus) tentando economizar RAM.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Antes de remover snapd, confira se nenhum aplicativo importante está em Snap (snap list). Caso esteja, instale a versão equivalente em .deb ou Flatpak primeiro.",
      },
      {
        type: "tip",
        content: "Para desktop muito antigo (1 GB de RAM), desabilite efeitos de transparência do Openbox (em ~/.config/openbox/lxqt-rc.xml). Em GPU velha, transparência custa caro.",
      },
      {
        type: "info",
        content: "Cache que o Linux acumula em 'buff/cache' não é desperdício: o sistema usa para acelerar acessos repetidos. Esse valor aparece como 'usado' em ferramentas antigas, mas é liberado em segundos quando outro programa precisa.",
      },
      {
        type: "success",
        content: "Combinando ZRAM + remoção de snapd + desabilitar Avahi/ModemManager, dá para baixar o consumo idle do Lubuntu de ~700 MB para ~400 MB. Isso é sopa para PCs de 2 GB.",
      },
    ],
  },
];
