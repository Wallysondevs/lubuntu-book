import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "conectar-wifi",
    section: "rede",
    title: "Conectando ao Wi-Fi",
    difficulty: "iniciante",
    subtitle: "Achando redes sem fio e digitando a senha sem dor de cabeça.",
    intro: `Conectar no Wi-Fi é provavelmente a primeira coisa que você quer fazer assim que liga o Lubuntu. Pense no Wi-Fi como um rádio: o seu computador escuta as ondas que o roteador transmite, escolhe a estação que conhece (a sua rede), prova que sabe a senha e pronto, está na internet. O Lubuntu faz tudo isso para você através de um programinha chamado NetworkManager, que aparece como um iconezinho no canto direito do painel.

Esse ícone muda de cara dependendo do estado: quando aparece um traço, é porque não tem rede; quando aparece um leque de ondas, é Wi-Fi conectado; quando aparece dois computadorzinhos, é cabo. Clicando nele, você abre uma listinha das redes ao alcance, ordenadas por força de sinal. É só clicar, digitar a senha uma única vez e marcar para conectar automaticamente nas próximas.

Por baixo do capô, o NetworkManager guarda cada conexão num arquivinho dentro de \`/etc/NetworkManager/system-connections/\`. Isso é útil de saber porque, quando o ícone gráfico decide não cooperar (acontece em hardware antigo), você pode resolver tudo pelo terminal com o comando \`nmcli\`, que é o NetworkManager versão linha de comando. Os dois mexem no mesmo lugar, então ficar fluente nos dois te dá uma rede de segurança.

Neste capítulo você vai conectar pelo ícone gráfico, vai aprender o equivalente em terminal, vai entender o que fazer quando a rede some misteriosamente e vai saber checar se realmente está conectado (ter ícone verde não garante internet — só garante que falou com o roteador).`,
    codes: [
      {
        lang: "bash",
        code: `# Verificar se o NetworkManager está rodando
systemctl status NetworkManager
# saída esperada (resumida):
#  NetworkManager.service - Network Manager
#    Active: active (running) since ...

# Se não estiver, inicie:
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager   # ativa no boot`,
      },
      {
        lang: "bash",
        code: `# Listar redes Wi-Fi ao alcance pelo terminal
nmcli device wifi list
# saída exemplo:
# IN-USE  BSSID              SSID         MODE   CHAN  RATE       SIGNAL  BARS  SECURITY
# *       AA:BB:CC:11:22:33  CasaDoBruno  Infra  6     130 Mbit/s  78      ▂▄▆_  WPA2
#         DD:EE:FF:44:55:66  Vizinho      Infra  11    65 Mbit/s   42      ▂▄__  WPA2`,
      },
      {
        lang: "bash",
        code: `# Conectar a uma rede Wi-Fi pela primeira vez
nmcli device wifi connect "CasaDoBruno" password "minhaSenha123"
# saída: Device 'wlan0' successfully activated with '...'

# Da próxima vez, basta:
nmcli connection up CasaDoBruno
# A senha já fica salva no /etc/NetworkManager/system-connections/`,
      },
      {
        lang: "bash",
        code: `# Ver em qual rede você está conectado agora
nmcli connection show --active
# NAME         UUID                                  TYPE      DEVICE
# CasaDoBruno  abcd1234-...                          wifi      wlan0

# E o IP que recebeu:
ip addr show wlan0
# inet 192.168.0.42/24 brd 192.168.0.255 ...`,
      },
      {
        lang: "bash",
        code: `# Testar se realmente está na internet (não basta o ícone verde)
ping -c 3 8.8.8.8
# 64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=18.2 ms
# Se isso responde, a rede funciona.

# Testar se o DNS funciona (resolução de nome)
ping -c 3 google.com
# Se o IP responde mas o nome não, problema é DNS (capítulo 8 desta seção).`,
      },
      {
        lang: "bash",
        code: `# Esquecer uma rede Wi-Fi (apaga a senha salva)
nmcli connection delete CasaDoBruno

# Desligar o rádio Wi-Fi (modo avião só do Wi-Fi)
nmcli radio wifi off
nmcli radio wifi on        # liga de novo`,
      },
    ],
    points: [
      "O ícone do NetworkManager fica no canto direito do painel; um clique abre a lista de redes.",
      "nmcli é o equivalente em terminal e mexe nos mesmos arquivos do ícone gráfico.",
      "Senhas ficam salvas em /etc/NetworkManager/system-connections/, com permissão só para root.",
      "ping no IP testa rede; ping num nome testa DNS — são testes diferentes.",
      "Marque \"conectar automaticamente\" para a rede de casa, mas não para Wi-Fi público.",
      "BSSID é o endereço físico do roteador; SSID é o nome que você vê.",
      "Iniciante comum: ver ícone verde e achar que está na internet — sempre confirme com ping.",
      "Iniciante comum: digitar senha errada e o NetworkManager continuar tentando — apague a rede e conecte de novo.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Se o ícone do NetworkManager sumir do painel, abra o qterminal e digite nm-applet & — ele volta. Adicione no autostart se sumir sempre.",
      },
      {
        type: "warning",
        content: "Em redes Wi-Fi públicas (cafeteria, aeroporto), nunca acesse banco sem VPN. O capítulo 3 desta seção mostra como configurar uma.",
      },
      {
        type: "info",
        content: "Notebooks com botão físico de Wi-Fi podem ter o rádio desligado por hardware. Procure uma tecla com desenho de antena (geralmente Fn+F2 ou Fn+F12).",
      },
      {
        type: "danger",
        content: "Nunca compartilhe os arquivos de /etc/NetworkManager/system-connections/. Eles têm a senha do seu Wi-Fi em texto puro (criptografada só no formato, não na proteção).",
      },
    ],
  },
  {
    slug: "conectar-ethernet",
    section: "rede",
    title: "Conectando por cabo Ethernet",
    difficulty: "iniciante",
    subtitle: "Plug-and-play, mas com macetes para quando não funciona.",
    intro: `Cabo Ethernet é a opção mais simples e mais confiável de conectar à internet. Pense nele como um cano direto entre o seu computador e o roteador: nada de paredes para atravessar, nada de vizinhos congestionando o sinal. Em Lubuntu, o normal é você plugar o cabo e, em dois ou três segundos, já estar online. O ícone do painel troca para os dois computadorzinhos e pronto.

Por trás dessa mágica, o sistema faz uma coisa chamada DHCP. Ele grita na rede "ei, alguém me dá um IP?" e o roteador responde com um endereço para você usar (algo como \`192.168.0.42\`). Esse processo dura milissegundos e você nem percebe. Mas, quando algo dá errado (cabo solto, switch desligado, roteador travado), saber pedir o IP de novo manualmente é o que separa frustração de solução.

Em alguns casos, principalmente em empresas, redes universitárias ou laboratórios, você precisa de um IP fixo (estático). Aí o DHCP não vai te ajudar e você configura tudo na mão: IP, máscara, gateway, DNS. Parece muita coisa, mas são quatro linhas no NetworkManager e fica gravado para sempre.

Neste capítulo você vai conectar via cabo no automático, vai forçar a renovação do IP quando travar, vai configurar IP estático para casos especiais e vai diagnosticar o motivo de "o cabo está plugado mas não conecta".`,
    codes: [
      {
        lang: "bash",
        code: `# Ver as interfaces de rede do seu computador
ip link show
# 1: lo: <LOOPBACK,UP,LOWER_UP> ...
# 2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> ...   ← Ethernet
# 3: wlan0: <BROADCAST,MULTICAST,UP> ...             ← Wi-Fi

# enp3s0 é o nome típico de Ethernet em hardware moderno.
# eth0 era o nome antigo, ainda aparece em algumas máquinas.`,
      },
      {
        lang: "bash",
        code: `# Verificar se o cabo está realmente conectado fisicamente
ip link show enp3s0
# Procure por "state UP" e "LOWER_UP" — significa cabo plugado.
# Se aparecer "NO-CARRIER" ou "state DOWN", o cabo está solto ou ruim.`,
      },
      {
        lang: "bash",
        code: `# Pedir um IP novo (renovar o DHCP) quando travar
sudo dhclient -r enp3s0      # libera o IP atual
sudo dhclient enp3s0         # pede um novo
# saída: nada significa "deu certo"; espere 2-3 segundos e teste:
ip addr show enp3s0
# inet 192.168.0.42/24 ...`,
      },
      {
        lang: "bash",
        code: `# Configurar IP estático pelo NetworkManager (linha de comando)
nmcli connection modify "Wired connection 1" \\
    ipv4.method manual \\
    ipv4.addresses 192.168.0.50/24 \\
    ipv4.gateway 192.168.0.1 \\
    ipv4.dns "1.1.1.1 8.8.8.8"

# Aplica a mudança
nmcli connection up "Wired connection 1"`,
      },
      {
        lang: "bash",
        code: `# Voltar para DHCP automático
nmcli connection modify "Wired connection 1" ipv4.method auto
nmcli connection up "Wired connection 1"`,
      },
      {
        lang: "bash",
        code: `# Quando "está plugado mas não funciona", siga essa ordem:
# 1) cabo está mesmo conectado?
ip link show enp3s0 | grep -E "UP|CARRIER"

# 2) recebeu IP?
ip addr show enp3s0 | grep inet

# 3) gateway responde?
ip route | grep default      # mostra o gateway, ex: 192.168.0.1
ping -c 3 192.168.0.1

# 4) internet funciona?
ping -c 3 8.8.8.8`,
      },
    ],
    points: [
      "DHCP é automático: pluga o cabo, ganha IP, está online.",
      "Nomes de interface modernos: enp3s0, ens33, eno1; o velho eth0 ainda aparece em ARM.",
      "ip link show mostra se o cabo está fisicamente conectado (procure UP/LOWER_UP).",
      "Para renovar o IP travado, use sudo dhclient -r seguido de sudo dhclient interface.",
      "IP estático precisa de quatro coisas: endereço, máscara, gateway e DNS.",
      "Cabo Ethernet é mais rápido e mais estável que Wi-Fi — use sempre que puder.",
      "Iniciante comum: trocar de cabo sem testar e gastar tempo culpando o sistema.",
      "Iniciante comum: configurar IP estático fora da faixa do roteador e ficar sem rede.",
    ],
    alerts: [
      {
        type: "info",
        content: "Cabos Cat 5e fazem até 1 Gbps; Cat 6 chegam a 10 Gbps em distâncias curtas. Para uso doméstico, Cat 5e basta.",
      },
      {
        type: "warning",
        content: "Antes de definir IP estático, abra a interface do roteador e veja qual faixa ele reserva para DHCP. Use um IP fora dessa faixa para evitar conflito.",
      },
      {
        type: "tip",
        content: "Se você tem só Wi-Fi mas precisa de cabo às vezes, um adaptador USB-Ethernet de R$ 50 funciona plug-and-play no Lubuntu.",
      },
    ],
  },
  {
    slug: "vpn-openvpn",
    section: "rede",
    title: "VPN com OpenVPN",
    difficulty: "intermediario",
    subtitle: "Túnel criptografado para acessar trabalho ou navegar com privacidade.",
    intro: `Uma VPN (Virtual Private Network) é como um túnel privado dentro da internet pública. Imagine que você está num café e mandando informações pelo Wi-Fi: qualquer um na mesma rede pode tentar bisbilhotar. Com VPN, tudo que sai do seu computador entra criptografado nesse túnel e só aparece descriptografado lá no outro lado, num servidor confiável. Para todo mundo no meio do caminho, é só ruído.

Os dois usos mais comuns são: acessar a rede interna do trabalho (você fica "como se" estivesse no escritório, vendo arquivos e impressoras locais) e navegar com mais privacidade ou aparentando estar em outro país. O Lubuntu já vem preparado para os tipos mais comuns de VPN, e o que mais aparece em ambientes corporativos é o OpenVPN.

A configuração se baseia em um arquivo \`.ovpn\` que o administrador da rede te passa. Esse arquivo tem todas as informações: servidor, porta, certificados, modo de cifra. Em vez de você decorar parâmetros, basta importar esse arquivo no NetworkManager e ele cria a conexão. Daí em diante, é clicar para conectar e clicar para desconectar.

Neste capítulo você vai instalar o suporte a OpenVPN, importar um arquivo \`.ovpn\`, conectar pelo terminal e pelo ícone gráfico, e diagnosticar problemas comuns como "conecta mas não navega" ou "DNS vaza fora do túnel".`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar o suporte OpenVPN no Lubuntu
sudo apt update
sudo apt install openvpn network-manager-openvpn network-manager-openvpn-gnome -y

# Reinicie o NetworkManager para reconhecer o novo plugin
sudo systemctl restart NetworkManager`,
      },
      {
        lang: "bash",
        code: `# Importar um arquivo .ovpn pela linha de comando
nmcli connection import type openvpn file ~/Downloads/empresa.ovpn
# saída: Connection 'empresa' (UUID) successfully added.

# Listar conexões VPN configuradas
nmcli connection show | grep vpn`,
      },
      {
        lang: "bash",
        code: `# Conectar e desconectar a VPN
nmcli connection up empresa --ask
# --ask faz ele pedir usuário/senha quando preciso

# Desconectar
nmcli connection down empresa`,
      },
      {
        lang: "bash",
        code: `# Conectar via terminal SEM o NetworkManager (modo direto)
sudo openvpn --config ~/Downloads/empresa.ovpn
# Saída longa, espere até "Initialization Sequence Completed"
# Para parar, aperte Ctrl+C nessa janela`,
      },
      {
        lang: "bash",
        code: `# Verificar se a VPN está realmente roteando o tráfego
ip route
# Procure por linhas começando com 0.0.0.0/1 e 128.0.0.0/1 — sinal
# clássico de VPN "full tunnel" (todo tráfego passa pelo túnel).

# Ver seu IP público (deve ser o do servidor VPN, não da sua casa)
curl ifconfig.me
# 200.10.20.30   ← se for diferente do IP da sua operadora, deu certo`,
      },
      {
        lang: "bash",
        code: `# Problema clássico: vazamento de DNS
# Mesmo conectado, o sistema pode usar o DNS da sua operadora.
# Verifique:
resolvectl status | grep "DNS Servers"

# Forçar o DNS via NetworkManager:
nmcli connection modify empresa ipv4.dns "1.1.1.1" \\
    ipv4.ignore-auto-dns yes
nmcli connection up empresa`,
      },
    ],
    points: [
      "VPN cria um túnel criptografado entre o seu PC e um servidor remoto.",
      "Use VPN no Wi-Fi público; sem ela, suas senhas viajam abertas pela rede local.",
      "OpenVPN é o tipo mais comum em empresas; o arquivo .ovpn já tem tudo configurado.",
      "Importe o .ovpn com nmcli connection import e conecte com nmcli connection up nome.",
      "curl ifconfig.me mostra seu IP público — é o teste rápido para confirmar que a VPN funciona.",
      "Atenção ao DNS: ele pode vazar fora do túnel mesmo com a VPN ativa.",
      "Iniciante comum: achar que VPN deixa internet mais rápida — quase sempre fica mais lenta, é o preço da segurança.",
      "Iniciante comum: esquecer de desconectar a VPN do trabalho e estranhar que sites pessoais ficaram lentos.",
    ],
    alerts: [
      {
        type: "warning",
        content: "VPNs gratuitas costumam vender seus dados. Se for usar para privacidade, escolha uma paga e auditada (Mullvad, ProtonVPN, IVPN são bem avaliadas).",
      },
      {
        type: "tip",
        content: "Para auto-conectar na inicialização, marque 'connect automatically' na aba 'General' das configurações da conexão no NetworkManager.",
      },
      {
        type: "info",
        content: "Se sua empresa usa WireGuard em vez de OpenVPN, instale o pacote wireguard e importe o arquivo .conf com nmcli connection import type wireguard.",
      },
      {
        type: "danger",
        content: "Nunca rode openvpn como sudo a partir de um arquivo .ovpn de origem desconhecida. Esses arquivos podem conter scripts que rodam com privilégios totais.",
      },
    ],
  },
  {
    slug: "bluetooth-pareamento",
    section: "rede",
    title: "Bluetooth: parear fones, mouse e teclado",
    difficulty: "iniciante",
    subtitle: "Conectando dispositivos sem fio que não usam Wi-Fi.",
    intro: `Bluetooth é o irmão mais novo do Wi-Fi. Em vez de conectar à internet, ele conecta dispositivos próximos uns aos outros: fones, mouse, teclado, caixas de som, celular. A distância prática é uns 10 metros, e a velocidade é bem menor que Wi-Fi, mas isso não importa porque o objetivo é trocar pequenas coisas (áudio, cliques, teclas) com baixíssimo consumo de bateria.

Pense no Bluetooth como um "aperto de mão" formal entre dois aparelhos. O processo se chama pareamento: os dois se descobrem, trocam uma chave secreta e passam a se reconhecer dali em diante. Você só pareia uma vez; nas próximas, eles se reconectam sozinhos quando estão próximos e ligados.

No Lubuntu, o gerenciador padrão é o Blueman. Ele aparece como um ícone azul no painel quando há suporte a Bluetooth. Para parear, você ativa o Bluetooth no aparelho (geralmente segurando o botão liga/desliga), abre o Blueman, dá scan, vê o aparelho na lista e clica em emparelhar. Pronto, está conectado.

Neste capítulo você vai instalar e ligar o Bluetooth, parear um fone, mudar saída de áudio para o fone, parear teclado e mouse e diagnosticar problemas como "está pareado mas não conecta" ou "som corta toda hora".`,
    codes: [
      {
        lang: "bash",
        code: `# Verificar se o computador tem hardware Bluetooth
sudo dmesg | grep -i bluetooth
# saída: Bluetooth: Core ver 2.22 (etc.)
# Se nada aparecer, sua máquina não tem Bluetooth de fábrica.

# Adaptadores USB Bluetooth de R$ 30 funcionam plug-and-play.`,
      },
      {
        lang: "bash",
        code: `# Instalar o gerenciador gráfico (Blueman) e os utilitários
sudo apt install bluez blueman pulseaudio-module-bluetooth -y

# Iniciar e habilitar o serviço Bluetooth
sudo systemctl enable --now bluetooth
systemctl status bluetooth   # confirma que está active (running)`,
      },
      {
        lang: "bash",
        code: `# Ligar/desligar o rádio Bluetooth pelo terminal
bluetoothctl power on
bluetoothctl power off

# Listar adaptadores disponíveis
bluetoothctl list
# Controller AA:BB:CC:11:22:33 PCBruno [default]`,
      },
      {
        lang: "bash",
        code: `# Parear um dispositivo via terminal (passo a passo)
bluetoothctl
# Você entra num shell interativo. Dentro dele:
[bluetooth]# scan on            # começa a procurar
# Aguarde aparecer seu fone, ex: 11:22:33:44:55:66 Fone JBL
[bluetooth]# pair 11:22:33:44:55:66
[bluetooth]# trust 11:22:33:44:55:66    # marca como confiável
[bluetooth]# connect 11:22:33:44:55:66
[bluetooth]# scan off
[bluetooth]# quit`,
      },
      {
        lang: "bash",
        code: `# Trocar a saída de áudio para o fone Bluetooth
# Listar saídas disponíveis:
pactl list short sinks
# 0  alsa_output.pci-...analog-stereo  ...
# 1  bluez_sink.11_22_33_44_55_66.a2dp_sink  ...

# Definir o fone como saída padrão:
pactl set-default-sink bluez_sink.11_22_33_44_55_66.a2dp_sink`,
      },
      {
        lang: "bash",
        code: `# Listar dispositivos pareados
bluetoothctl devices
# Device 11:22:33:44:55:66 Fone JBL
# Device AA:BB:CC:DD:EE:FF Mouse Logitech

# Remover um pareamento (se algo travou)
bluetoothctl remove 11:22:33:44:55:66`,
      },
    ],
    points: [
      "Bluetooth liga aparelhos próximos (até ~10m) com baixo consumo de energia.",
      "Pareamento é uma vez só; depois eles se reconectam sozinhos.",
      "O serviço bluetooth precisa estar rodando: sudo systemctl enable --now bluetooth.",
      "Blueman é o gerenciador gráfico; bluetoothctl é o equivalente em terminal.",
      "Para áudio, instale também pulseaudio-module-bluetooth — sem ele, fones não tocam som.",
      "trust marca o aparelho como confiável e ele reconecta automaticamente.",
      "Iniciante comum: parear o fone mas esquecer de trocar a saída de áudio padrão.",
      "Iniciante comum: deixar fone pareado em vários computadores e ele só conecta no último.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Antes de parear, deixe o aparelho em modo descoberta (geralmente 5 segundos com botão liga/desliga apertado, indicador piscando rápido).",
      },
      {
        type: "warning",
        content: "Bluetooth e Wi-Fi de 2.4 GHz brigam pelo mesmo espectro. Se a internet ficar instável quando o Bluetooth está ligado, use Wi-Fi 5 GHz.",
      },
      {
        type: "info",
        content: "O perfil A2DP é alta qualidade só de saída (música). O perfil HSP/HFP tem microfone mas qualidade de telefone — fones gamer precisam alternar entre os dois.",
      },
      {
        type: "danger",
        content: "Não deixe o Bluetooth ligado e descobrível em locais públicos. Existem ataques específicos para aparelhos visíveis. Use o modo só quando for parear.",
      },
    ],
  },
  {
    slug: "compartilhar-samba",
    section: "rede",
    title: "Compartilhar arquivos com Samba",
    difficulty: "intermediario",
    subtitle: "Pasta compartilhada que funciona com Linux, Windows e macOS.",
    intro: `Samba é o tradutor universal de compartilhamento de arquivos em rede. Ele faz o seu Lubuntu falar o mesmo idioma do Windows (chamado SMB/CIFS), permitindo que máquinas de qualquer sistema vejam pastas compartilhadas no seu computador. Imagine uma gaveta no meio da casa onde todo mundo pode pegar e guardar coisas: é isso que o Samba cria, mas em rede.

O caso mais clássico: você tem um Lubuntu funcionando 24h como mini-servidor, e dois notebooks (um Windows, um Mac) que querem acessar fotos, documentos e backups dele. Sem Samba, cada um precisaria de pendrive ou ferramenta diferente. Com Samba, todo mundo abre o explorador de arquivos, digita \`\\\\IP-do-Lubuntu\\compartilhamento\` (Windows) ou \`smb://IP-do-Lubuntu/compartilhamento\` (Lubuntu/Mac), digita usuário e senha e está dentro.

A configuração mora num arquivo único: \`/etc/samba/smb.conf\`. Você define quais pastas compartilhar, quem pode acessar e o que pode fazer (só ler, ou ler e escrever). É um arquivo de texto simples, dividido em seções. Cada seção é uma pasta compartilhada.

Neste capítulo, você vai instalar o Samba, criar um usuário só para acesso compartilhado (sem ele entrar no sistema todo), compartilhar uma pasta, abrir as portas no firewall e acessar do Windows e de outro Linux. Também vai aprender a versão "rápida e suja" do PCManFM-Qt, que compartilha em três cliques sem nem editar arquivo.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar o Samba
sudo apt update
sudo apt install samba samba-common-bin -y

# Verificar se os serviços estão rodando
systemctl status smbd nmbd
# Procure por "active (running)" nos dois.`,
      },
      {
        lang: "bash",
        code: `# Criar usuário do sistema só para compartilhamento
sudo adduser --no-create-home --disabled-login samba_user
# Senha do sistema (não vai usar, pode ser qualquer coisa)

# Definir senha do Samba (essa é a que importa para conectar)
sudo smbpasswd -a samba_user
# Digite a senha duas vezes`,
      },
      {
        lang: "bash",
        code: `# Criar a pasta compartilhada
sudo mkdir -p /srv/samba/publica
sudo chown samba_user:samba_user /srv/samba/publica
sudo chmod 770 /srv/samba/publica`,
      },
      {
        lang: "ini",
        code: `# Adicionar ao final de /etc/samba/smb.conf
# Edite com: sudo nano /etc/samba/smb.conf

[Publica]
   comment = Pasta compartilhada do Lubuntu
   path = /srv/samba/publica
   browseable = yes
   read only = no
   valid users = samba_user
   create mask = 0660
   directory mask = 0770`,
      },
      {
        lang: "bash",
        code: `# Validar a configuração antes de reiniciar
testparm
# Aperte Enter para ver as seções carregadas.

# Aplicar a mudança reiniciando os serviços
sudo systemctl restart smbd nmbd

# Confirmar que a pasta aparece na rede
smbclient -L localhost -U samba_user
# Vai pedir a senha; deve listar [Publica] entre os shares.`,
      },
      {
        lang: "bash",
        code: `# Liberar Samba no firewall (se você usa UFW)
sudo ufw allow samba
sudo ufw status
# Status: active
# To       Action  From
# Samba    ALLOW   Anywhere`,
      },
      {
        lang: "bash",
        code: `# Acessar do próprio Lubuntu (ou outro Linux)
# 1) pelo PCManFM-Qt: tecle Ctrl+L e digite:
#    smb://192.168.0.42/Publica
# 2) pelo terminal:
sudo apt install cifs-utils -y
sudo mkdir /mnt/samba_test
sudo mount -t cifs //192.168.0.42/Publica /mnt/samba_test \\
    -o username=samba_user,uid=$(id -u),gid=$(id -g)
ls /mnt/samba_test`,
      },
    ],
    points: [
      "Samba faz o Linux falar o protocolo SMB/CIFS, o mesmo do Windows.",
      "O usuário do sistema (adduser) e o usuário do Samba (smbpasswd) são contas separadas.",
      "Compartilhamentos ficam em /etc/samba/smb.conf, uma seção por pasta.",
      "Use testparm sempre antes de reiniciar — ele pega erros de sintaxe na hora.",
      "No Windows: Explorer → \\\\IP\\Publica. No Linux: smb://IP/Publica.",
      "Para uso casual entre Linux, considere também SSHFS — mais simples e mais seguro.",
      "Iniciante comum: criar a pasta com chown root e o Samba não conseguir escrever.",
      "Iniciante comum: esquecer de liberar a porta no firewall e ficar horas debugando.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Nunca exponha Samba diretamente na internet. Ele foi feito para rede local. Se precisar acesso remoto, use VPN como mostrado no capítulo 3 desta seção.",
      },
      {
        type: "tip",
        content: "O PCManFM-Qt do Lubuntu tem opção de compartilhar pasta via menu de contexto: clique direito → Compartilhar pasta. Ele edita o smb.conf por você.",
      },
      {
        type: "info",
        content: "Para descobrir o IP do Lubuntu na rede, rode hostname -I no terminal. O primeiro número é o que você usa nos outros aparelhos.",
      },
      {
        type: "danger",
        content: "Evite a opção \"guest ok = yes\" em redes não confiáveis. Ela permite acesso sem senha — qualquer um na rede entra.",
      },
    ],
  },
  {
    slug: "ssh-acesso-remoto",
    section: "rede",
    title: "SSH: acesso remoto seguro",
    difficulty: "intermediario",
    subtitle: "Controlando outro computador pelo terminal, com criptografia.",
    intro: `SSH (Secure Shell) é o jeito padrão de uma máquina Linux acessar outra pela rede. Pense nele como uma "ligação telefônica" criptografada entre dois terminais: você digita comandos no seu teclado e eles rodam no computador remoto, com a saída voltando na sua tela. Tudo passa por um túnel cifrado, então é seguro mesmo na internet aberta.

O caso mais comum: você tem um servidor (um Lubuntu antigo no canto, um Raspberry Pi, ou uma máquina virtual num provedor) e quer mexer nele do conforto do seu notebook. Sem teclado, sem monitor, sem precisar levantar. Você abre o terminal, digita \`ssh usuario@ip\`, dá a senha e está lá. Cada comando é como se você estivesse fisicamente na máquina remota.

O Lubuntu já vem com o cliente SSH instalado (\`ssh\`). O que precisa instalar é o servidor (\`openssh-server\`) na máquina que você quer acessar. Por padrão, o servidor escuta na porta 22 e aceita login com senha. Em produção, a recomendação é trocar para login com chave (sem senha digitada, muito mais seguro) e mudar a porta para algo diferente, evitando varreduras automáticas.

Neste capítulo você vai instalar o servidor SSH, conectar pela primeira vez, configurar autenticação por chave (sem senha), copiar arquivos via \`scp\`/\`sftp\` e endurecer o servidor para uso seguro na internet. SSH é uma das ferramentas mais importantes que você vai aprender em Linux.`,
    codes: [
      {
        lang: "bash",
        code: `# Na máquina que vai RECEBER conexões: instalar e ativar o servidor
sudo apt update
sudo apt install openssh-server -y
sudo systemctl enable --now ssh

# Verificar que está escutando
sudo ss -tlnp | grep ssh
# LISTEN 0 128 0.0.0.0:22 ... users:(("sshd",...))`,
      },
      {
        lang: "bash",
        code: `# Na máquina CLIENTE: conectar pela primeira vez
ssh bruno@192.168.0.42
# The authenticity of host '192.168.0.42 (192.168.0.42)' can't be established.
# ED25519 key fingerprint is SHA256:...
# Are you sure you want to continue connecting (yes/no)?  yes
# bruno@192.168.0.42's password: ******
# bruno@servidor:~$    ← agora você está no servidor`,
      },
      {
        lang: "bash",
        code: `# Configurar acesso por chave (sem senha)
# 1) Na sua máquina cliente, gere o par de chaves (uma vez só)
ssh-keygen -t ed25519 -C "meu-laptop"
# Aperte Enter três vezes (sem senha na chave)

# 2) Copie a chave pública para o servidor
ssh-copy-id bruno@192.168.0.42
# Vai pedir a senha uma última vez.

# 3) Agora conecte sem senha:
ssh bruno@192.168.0.42`,
      },
      {
        lang: "bash",
        code: `# Copiar arquivos com scp (cliente local → servidor)
scp arquivo.txt bruno@192.168.0.42:/home/bruno/
# arquivo.txt 100% 1.2KB ...

# Copiar pasta inteira (recursivo)
scp -r minha_pasta/ bruno@192.168.0.42:/home/bruno/

# Trazer arquivo do servidor para sua máquina
scp bruno@192.168.0.42:/var/log/syslog ./syslog_remoto.txt`,
      },
      {
        lang: "bash",
        code: `# Sessão interativa para enviar/receber vários arquivos
sftp bruno@192.168.0.42
# sftp> ls              # lista no servidor
# sftp> lls             # lista local
# sftp> put foto.jpg    # envia
# sftp> get backup.zip  # baixa
# sftp> bye`,
      },
      {
        lang: "ini",
        code: `# Endurecer o servidor: edite /etc/ssh/sshd_config
# sudo nano /etc/ssh/sshd_config

# Mudar porta padrão (dificulta varredura automatizada)
Port 2222

# Proibir login do root
PermitRootLogin no

# Permitir só login por chave (depois que confirmar que sua chave funciona!)
PasswordAuthentication no
PubkeyAuthentication yes

# Aplicar mudanças:
# sudo systemctl restart ssh`,
      },
      {
        lang: "bash",
        code: `# Conectar usando porta diferente
ssh -p 2222 bruno@192.168.0.42

# Para não precisar lembrar, crie ~/.ssh/config no cliente:
# Host servidor-casa
#     HostName 192.168.0.42
#     User bruno
#     Port 2222
#
# Aí basta: ssh servidor-casa`,
      },
    ],
    points: [
      "SSH é o jeito seguro de controlar outra máquina Linux pela rede.",
      "openssh-server é o pacote do lado que recebe; o cliente já vem instalado.",
      "Use ssh-keygen + ssh-copy-id para login sem senha — mais seguro e mais cômodo.",
      "scp copia arquivos individualmente; sftp dá uma sessão interativa.",
      "Em servidores na internet: desative login por senha, proíba root, mude porta.",
      "Use ~/.ssh/config para guardar atalhos com nome, host, usuário e porta.",
      "Iniciante comum: desativar PasswordAuthentication antes de testar a chave — fica trancado fora.",
      "Iniciante comum: deixar porta 22 aberta na internet com senha fraca — em horas o bot acha.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Para servidores em produção, instale o fail2ban (sudo apt install fail2ban). Ele bloqueia automaticamente IPs que erram a senha várias vezes.",
      },
      {
        type: "warning",
        content: "Antes de mudar configuração do sshd, abra UMA SEGUNDA conexão SSH e deixe aberta. Se algo quebrar, você ainda tem como entrar e desfazer.",
      },
      {
        type: "info",
        content: "rsync usa SSH por baixo e é a melhor ferramenta para sincronizar pastas grandes entre máquinas (rsync -avz pasta/ user@host:/destino/).",
      },
      {
        type: "danger",
        content: "Nunca compartilhe o arquivo ~/.ssh/id_ed25519 (sua chave privada). Quem o tiver pode entrar como você. Só a id_ed25519.pub (terminada em .pub) pode ser compartilhada.",
      },
    ],
  },
  {
    slug: "firewall-ufw",
    section: "rede",
    title: "Firewall com UFW",
    difficulty: "iniciante",
    subtitle: "Controlando o que entra e sai do seu Lubuntu.",
    intro: `Um firewall é o porteiro da sua máquina. Ele decide quais conexões entram, quais saem e quais batem na porta e ouvem "não, hoje não". Em servidores e em qualquer máquina exposta à internet, ele é essencial. Em desktops domésticos atrás de um roteador, ele já te protege "dentro" da rede de casa, caso algum aparelho dela seja comprometido.

O Lubuntu vem com o iptables (o motor real de firewall do kernel Linux), mas mexer nele direto é um trauma. A boa notícia é que existe uma camada amigável por cima chamada UFW (Uncomplicated FireWall — Firewall Descomplicado). Você diz "permita SSH" e ele traduz para as regras complicadas do iptables. Você fala em humano, ele fala em kernel.

A regra de ouro do firewall é: bloquear tudo por padrão e abrir só o que você precisa. Isso se chama política "deny by default". Se você abrir o computador novo na internet, o firewall já bloqueia conexões maliciosas mesmo se você nem sabe que existem. É proteção que funciona enquanto você dorme.

Neste capítulo você vai instalar e ativar o UFW (cuidado para não se trancar fora pelo SSH), abrir portas para serviços conhecidos, fechar portas, ver o que está aberto e olhar o log para entender o que foi bloqueado. Ao final, você vai estar mais seguro que 90% das máquinas Linux desktop por aí.`,
    codes: [
      {
        lang: "bash",
        code: `# Instalar e ver status
sudo apt install ufw -y
sudo ufw status
# Status: inactive    ← ainda não está ligado`,
      },
      {
        lang: "bash",
        code: `# IMPORTANTE: se você está conectado por SSH, libere SSH ANTES de ativar
sudo ufw allow ssh        # equivale a "ufw allow 22/tcp"

# Definir política padrão (negar entrada, permitir saída)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Agora pode ativar
sudo ufw enable
# Command may disrupt existing ssh connections. Proceed (y|n)? y
# Firewall is active and enabled on system startup`,
      },
      {
        lang: "bash",
        code: `# Ver regras ativas
sudo ufw status verbose
# Status: active
# Default: deny (incoming), allow (outgoing), disabled (routed)
# To                   Action      From
# 22/tcp (SSH)         ALLOW IN    Anywhere`,
      },
      {
        lang: "bash",
        code: `# Liberar serviços comuns
sudo ufw allow http        # porta 80
sudo ufw allow https       # porta 443
sudo ufw allow 8080/tcp    # porta específica
sudo ufw allow samba       # CIFS/SMB

# Liberar uma porta SÓ para um IP específico
sudo ufw allow from 192.168.0.100 to any port 5432
# (ex: PostgreSQL só para a máquina do colega)`,
      },
      {
        lang: "bash",
        code: `# Remover uma regra
sudo ufw status numbered
# [ 1] 22/tcp                     ALLOW IN    Anywhere
# [ 2] 80/tcp                     ALLOW IN    Anywhere

sudo ufw delete 2
# Deleting:  allow 80/tcp
# Proceed with operation (y|n)? y`,
      },
      {
        lang: "bash",
        code: `# Ativar log para ver o que está sendo bloqueado
sudo ufw logging on

# Acompanhar em tempo real
sudo tail -f /var/log/ufw.log
# UFW BLOCK ... SRC=203.0.113.10 DST=192.168.0.42 PROTO=TCP SPT=54321 DPT=23
# (alguém de fora tentou bater na porta 23 — telnet)`,
      },
      {
        lang: "bash",
        code: `# Desligar o UFW se precisar diagnosticar (lembre de religar!)
sudo ufw disable

# Resetar todas as regras (volta ao zero)
sudo ufw reset
# (vai pedir confirmação)`,
      },
    ],
    points: [
      "UFW é uma camada amigável sobre o iptables — você fala em humano.",
      "Regra de ouro: deny incoming, allow outgoing (negar entrada, permitir saída).",
      "ANTES de ativar via SSH, libere a porta 22 ou você se tranca fora da máquina.",
      "Use nomes de serviço (ssh, http, samba) em vez de números — fica mais legível.",
      "ufw status numbered mostra com índice; útil para deletar regras específicas.",
      "Ative logging e leia /var/log/ufw.log para entender o que vem do mundo lá fora.",
      "Iniciante comum: ativar firewall conectado via SSH sem liberar a porta 22 antes.",
      "Iniciante comum: liberar uma porta para Anywhere quando bastava abrir só para um IP da rede local.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Se você ativar UFW remotamente sem liberar SSH, perde acesso à máquina. A única recuperação é console físico ou modo recovery. Sempre teste localmente primeiro.",
      },
      {
        type: "tip",
        content: "Para servidores web, libere só 22 (SSH), 80 e 443 (HTTP/HTTPS). Tudo mais deveria ficar fechado por padrão.",
      },
      {
        type: "info",
        content: "Em desktop doméstico atrás de roteador, o UFW protege contra outros aparelhos da sua rede. É útil se a vovó conectar o tablet infectado no mesmo Wi-Fi.",
      },
      {
        type: "warning",
        content: "UFW gerencia entrada e saída, mas não a rede do Docker. Containers podem furar regras. Em servidores com Docker, pesquise sobre DOCKER-USER chain.",
      },
    ],
  },
  {
    slug: "dns-troubleshoot",
    section: "rede",
    title: "DNS: quando o nome não vira IP",
    difficulty: "intermediario",
    subtitle: "Diagnosticando \"a internet caiu\" que na verdade é só DNS.",
    intro: `DNS é a "lista telefônica" da internet. Quando você digita \`google.com\` no navegador, seu computador não sabe onde isso fica. Ele pergunta para um servidor DNS, que responde com o IP (algo como \`142.250.190.46\`). Aí sim o navegador consegue conectar. Esse processo acontece dezenas de vezes por minuto, e você nunca percebe — até o dia que o DNS para de responder. Aí parece que "a internet caiu", mas na verdade só a lista telefônica está com defeito.

Sabe aquele clássico "não abre site nenhum, mas o WhatsApp funciona"? É DNS. O WhatsApp usa IPs fixos que ele já sabe. O navegador depende de DNS para cada novo nome. Quando você consegue dar ping num IP (\`8.8.8.8\` por exemplo) mas não num nome (\`google.com\`), você diagnosticou o problema: DNS quebrado.

O Lubuntu moderno usa o systemd-resolved para gerenciar DNS. Ele cuida de cache, de fallback entre servidores, de configuração via DHCP. Os servidores DNS que você usa vêm normalmente do roteador (que pega da operadora). Você pode trocar por servidores mais rápidos e que respeitam mais privacidade, como os do Cloudflare (\`1.1.1.1\`) ou do Google (\`8.8.8.8\`).

Neste capítulo você vai aprender a diagnosticar o tipo de problema (rede caiu? só DNS?), trocar de servidor DNS, limpar o cache do resolver e usar ferramentas como \`dig\` e \`nslookup\` para investigar o que está acontecendo. Esse é o conhecimento que evita você ficar reiniciando roteador à toa.`,
    codes: [
      {
        lang: "bash",
        code: `# Diagnóstico em camadas (faça nessa ordem)
# 1) ping num IP (testa só rede)
ping -c 3 1.1.1.1
# Se isso falha → problema de rede (não DNS).

# 2) ping num nome (testa DNS)
ping -c 3 google.com
# Se IP funciona mas nome não → DNS quebrado.

# 3) ver qual DNS o sistema usa
resolvectl status | grep -A2 "DNS Servers"`,
      },
      {
        lang: "bash",
        code: `# Consultar manualmente um nome (sem cache, sem misturar)
dig google.com
# Procure pela seção ANSWER:
# google.com.   300  IN  A  142.250.190.46

# Versão curta, só o IP:
dig +short google.com
# 142.250.190.46

# Saber qual servidor respondeu:
dig google.com | grep SERVER
# ;; SERVER: 127.0.0.53#53(127.0.0.53)
# (o 127.0.0.53 é o systemd-resolved local)`,
      },
      {
        lang: "bash",
        code: `# Forçar consulta direta a um servidor específico
dig @1.1.1.1 google.com
# Se isso responde mas o normal falha, seu DNS local está quebrado.

# Testar nslookup (sintaxe mais antiga)
nslookup google.com 8.8.8.8`,
      },
      {
        lang: "bash",
        code: `# Limpar o cache do systemd-resolved
sudo resolvectl flush-caches

# Estatísticas do cache (útil pra ver se está sendo usado)
sudo resolvectl statistics | grep -A2 Cache`,
      },
      {
        lang: "bash",
        code: `# Trocar o DNS da sua conexão de Wi-Fi para Cloudflare (1.1.1.1)
nmcli connection modify "CasaDoBruno" \\
    ipv4.dns "1.1.1.1 1.0.0.1" \\
    ipv4.ignore-auto-dns yes

# Desconecta e reconecta para aplicar
nmcli connection down "CasaDoBruno"
nmcli connection up "CasaDoBruno"

# Confirma que mudou
resolvectl status | grep "DNS Servers"
# DNS Servers: 1.1.1.1 1.0.0.1`,
      },
      {
        lang: "bash",
        code: `# Testar latência de servidores DNS para escolher o mais rápido
for srv in 1.1.1.1 8.8.8.8 9.9.9.9 208.67.222.222; do
    echo -n "$srv: "
    dig @$srv google.com +stats 2>&1 | grep "Query time"
done
# 1.1.1.1: ;; Query time: 12 msec
# 8.8.8.8: ;; Query time: 28 msec
# 9.9.9.9: ;; Query time: 45 msec
# 208.67.222.222: ;; Query time: 62 msec`,
      },
      {
        lang: "bash",
        code: `# Forçar entrada manual no /etc/hosts (útil para testes)
# Edite com: sudo nano /etc/hosts
# 192.168.0.50    servidor.local
# 127.0.0.1       site-em-desenvolvimento.test

# Esse arquivo é consultado ANTES do DNS.
# Útil para apontar nome para IP fixo sem mexer em servidor DNS.`,
      },
    ],
    points: [
      "DNS traduz nome (google.com) em IP (142.250.190.46) — é a lista telefônica da internet.",
      "Ping num IP testa rede; ping num nome testa DNS. Diagnostique sempre nessa ordem.",
      "resolvectl status mostra qual servidor DNS você está usando agora.",
      "dig é a ferramenta principal para investigar DNS; nslookup é a versão mais antiga.",
      "1.1.1.1 (Cloudflare) e 8.8.8.8 (Google) são alternativas rápidas ao DNS da operadora.",
      "/etc/hosts sobrescreve DNS — útil para desenvolvimento e bloqueios manuais.",
      "Iniciante comum: reiniciar o roteador 5 vezes quando o problema era só limpar cache DNS.",
      "Iniciante comum: trocar DNS no /etc/resolv.conf direto e o NetworkManager sobrescrever depois.",
    ],
    alerts: [
      {
        type: "info",
        content: "DNS-over-HTTPS (DoH) e DNS-over-TLS (DoT) criptografam suas consultas. Servidores como 1.1.1.1 e 9.9.9.9 suportam — Firefox tem opção embutida.",
      },
      {
        type: "warning",
        content: "Não edite /etc/resolv.conf diretamente: o NetworkManager (ou systemd-resolved) sobrescreve. Use nmcli connection modify para mudanças permanentes.",
      },
      {
        type: "tip",
        content: "Se a rede de casa cai sempre que muita gente usa, considere instalar Pi-hole num Raspberry Pi: ele faz cache local de DNS e bloqueia anúncios.",
      },
      {
        type: "danger",
        content: "Use só DNS de fontes confiáveis. Servidores DNS maliciosos podem te redirecionar para sites falsos de banco. Cloudflare, Google e Quad9 são auditados; DNS aleatório do TikTok não.",
      },
    ],
  },
];
