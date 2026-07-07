import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "atualizar-lts",
    section: "manutencao",
    title: "Atualizando para uma nova LTS",
    difficulty: "intermediario",
    subtitle: "Migrando o Lubuntu de uma versão LTS para a próxima sem perder nada.",
    intro: `Pense no seu Lubuntu como uma casa: você mora bem nela, mas de tempos em tempos a prefeitura libera uma reforma maior — encanamento novo, fiação atualizada, telhado reforçado. As versões LTS (Long Term Support) do Ubuntu são exatamente isso. Elas saem a cada dois anos (22.04, 24.04, 26.04...) e recebem atualizações de segurança por cinco anos. Migrar para a próxima LTS é a "reforma" da sua casa digital.

Atualizar não é o mesmo que reinstalar. Numa atualização, o sistema baixa milhares de pacotes novos e substitui os antigos no lugar, mantendo seus arquivos pessoais, suas configurações, seus programas instalados. É confortável, mas exige preparação: backup antes de tudo, espaço em disco sobrando, conexão de internet decente e paciência (pode demorar de 30 minutos a 2 horas).

A ferramenta oficial chama-se \`do-release-upgrade\`. Ela vem instalada no Lubuntu por padrão, no pacote \`update-manager-core\`. Por trás dos panos, ela troca os endereços dos repositórios da versão antiga para a nova, baixa a lista de pacotes atualizados, calcula o que precisa ser substituído e faz tudo de uma vez, perguntando antes de mexer em arquivos de configuração que você editou.

Iniciantes costumam pular para a versão nova assim que ela sai, no dia do lançamento. Não faça isso. Espere o primeiro "point release" (ex.: 26.04.1, normalmente 3 meses depois) — é quando os bugs mais sérios já foram corrigidos. E nunca, jamais, atualize sem ter um backup completo dos seus arquivos importantes.`,
    codes: [
      {
        lang: "bash",
        code: `# 1. Antes de qualquer coisa, atualize TUDO da versão atual
sudo apt update            # baixa a lista de pacotes
sudo apt upgrade -y        # atualiza o que pode sem remover nada
sudo apt full-upgrade -y   # atualiza inclusive o que precisa remover dependências

# Confirme que não sobrou nada pendente
sudo apt autoremove -y     # remove pacotes órfãos
# saída esperada: "0 upgraded, 0 newly installed"`,
      },
      {
        lang: "bash",
        code: `# 2. Confira qual versão você tem hoje
lsb_release -a
# saída exemplo:
# Distributor ID: Ubuntu
# Description:    Ubuntu 22.04.4 LTS
# Release:        22.04
# Codename:       jammy

# E veja qual é a próxima LTS oferecida
cat /etc/update-manager/release-upgrades
# Prompt=lts  → só oferece quando houver outra LTS estável`,
      },
      {
        lang: "bash",
        code: `# 3. Garanta que o gerenciador de upgrade está instalado
sudo apt install update-manager-core -y

# Inicie o processo (precisa de internet)
sudo do-release-upgrade
# Se quiser pular o aviso de "ainda não recomendada", use -d
# sudo do-release-upgrade -d   # APENAS para teste/desenvolvimento`,
      },
      {
        lang: "text",
        code: `# Saída resumida do do-release-upgrade
Checking for a new Ubuntu release
Get:1 Upgrade tool signature
Get:2 Upgrade tool
Authenticate and extract the upgrade tool
Reading cache

Do you want to start the upgrade?

3 packages are going to be removed.
85 new packages are going to be installed.
421 packages are going to be upgraded.

You have to download a total of 612 M.
This download will take about 18 minutes.

Continue [yN]  Details [d]  y`,
      },
      {
        lang: "bash",
        code: `# 4. Se o sistema perguntar sobre arquivos de configuração:
# *** sources.list (Y/I/N/O/D/Z) [default=N] ?
#  Y = pega a versão NOVA (perde suas edições)
#  N = mantém a versão antiga (default — geralmente seguro)
#  D = mostra a diferença antes de decidir
# Em caso de dúvida, escolha D, leia, depois decida.`,
      },
      {
        lang: "bash",
        code: `# 5. Após reiniciar, confirme se deu tudo certo
lsb_release -a
# Description:    Ubuntu 26.04.1 LTS
uname -r          # mostra a versão do kernel novo
# 7.0.0-14-generic

# Limpe pacotes que sobraram da versão anterior
sudo apt autoremove --purge -y
sudo apt clean`,
      },
    ],
    points: [
      "LTS sai a cada 2 anos (anos pares, mês 04) e tem 5 anos de suporte de segurança.",
      "Atualize SEMPRE com sudo apt update && full-upgrade ANTES de rodar do-release-upgrade.",
      "Faça backup completo dos seus arquivos antes — atualizações podem falhar e quebrar o sistema.",
      "Espere o primeiro point release (X.04.1) — costuma sair 3 meses depois e já corrigiu bugs sérios.",
      "Nunca use -d em máquina de uso real; é só para testar versões em desenvolvimento.",
      "Se o instalador perguntar sobre conffile (arquivo de configuração), o default 'N' (manter o seu) é o mais seguro.",
      "Iniciante comum: começar a atualização e fechar o terminal no meio — isso pode deixar o sistema quebrado. Use 'screen' ou 'tmux' se acessar via SSH.",
      "Iniciante comum: atualizar com bateria de notebook quase descarregada e sem fonte conectada — uma queda de energia no meio da troca quebra o gerenciador de pacotes.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Sem backup, não atualize. Falhas de energia, internet caindo, ou bug no instalador podem deixar o sistema sem inicializar. Use Timeshift (próximo capítulo) e copie /home para um HD externo antes.",
      },
      {
        type: "warning",
        content: "Repositórios PPA de terceiros costumam quebrar na atualização. O do-release-upgrade desabilita eles automaticamente; reabilite só depois de confirmar que existe versão para a nova LTS.",
      },
      {
        type: "tip",
        content: "Se você acessa por SSH, rode dentro de 'screen' ou 'tmux'. Assim, mesmo que sua conexão caia, o upgrade continua rodando no servidor.",
      },
      {
        type: "info",
        content: "Você não é obrigado a atualizar. Cada LTS tem 5 anos de suporte; pular uma versão (ex.: ir de 22.04 direto para 26.04) também funciona, mas exige passar pela 26.04 antes — não dá para 'pular' duas LTS de uma vez.",
      },
    ],
  },
  {
    slug: "limpeza-disco",
    section: "manutencao",
    title: "Limpeza de disco",
    difficulty: "iniciante",
    subtitle: "Liberando espaço removendo cache, kernels antigos e lixo acumulado.",
    intro: `Com o tempo, todo sistema acumula "gordurinha": pacotes baixados que ficaram no cache, kernels antigos guardados por garantia, miniaturas de imagens já apagadas, logs gigantescos. É a mesma coisa do armário de cozinha: você usa por meses, vira ano, e percebe que metade do espaço está ocupada por embalagens vazias e potes que você esqueceu.

A boa notícia é que o Lubuntu tem ferramentas simples para limpar tudo isso. O \`apt\` cuida do cache de pacotes e dos kernels antigos. O \`journalctl\` controla o tamanho dos logs do systemd. E uma rápida olhada em \`~/.cache\` mostra megabytes (às vezes gigas) de miniaturas e arquivos temporários que aplicativos criaram e nunca apagaram.

Limpar não é só "ganhar espaço". Em SSDs pequenos (32GB, 64GB) é literalmente questão de o sistema continuar funcionando: se a partição raiz enche, o Lubuntu fica lento, alguns programas param de salvar e o próprio gerenciador de pacotes recusa a instalar coisas novas. Faça uma limpeza a cada 1-2 meses e o computador agradece.

A regra de ouro: nunca use comandos que apagam coisas se você não entende o que está fazendo. Especialmente \`rm -rf\`. Os comandos deste capítulo são seguros (apt, bleachbit, journalctl com flags); fugir deles para "atalhos" da internet é receita para apagar o /home por engano.`,
    codes: [
      {
        lang: "bash",
        code: `# 1. Veja o quanto está ocupado em cada partição
df -h
# saída:
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/sda2        58G   42G   13G  77% /
# /dev/sda1       512M   12M  500M   3% /boot/efi

# E o tamanho de cada subpasta de uma raiz qualquer
sudo du -sh /var/* 2>/dev/null | sort -h
# Mostra quem está ocupando mais espaço`,
      },
      {
        lang: "bash",
        code: `# 2. Limpeza padrão do APT — quase sempre libera megabytes (ou gigas)
sudo apt clean
# Apaga TODOS os .deb baixados em /var/cache/apt/archives

sudo apt autoclean
# Apaga só os .deb de versões antigas (mais conservador)

sudo apt autoremove --purge -y
# Remove pacotes que ninguém mais depende + arquivos de configuração`,
      },
      {
        lang: "bash",
        code: `# 3. Removendo kernels antigos (cada um ocupa ~300MB em /boot)
# Veja o kernel atual em uso
uname -r
# 7.0.0-14-generic

# Liste todos os kernels instalados
dpkg --list | grep linux-image
# Os que NÃO têm o número acima podem ser removidos

# autoremove já faz isso, mas se quiser remover manual:
sudo apt purge linux-image-7.0.0-14-generic
# (substitua pelo número do kernel velho que quer apagar)`,
      },
      {
        lang: "bash",
        code: `# 4. Logs do systemd (podem chegar a vários GB)
sudo journalctl --disk-usage
# Archived and active journals take up 3.2G in the file system.

# Mantenha só os últimos 7 dias
sudo journalctl --vacuum-time=7d

# Ou limite o tamanho total a 200MB
sudo journalctl --vacuum-size=200M`,
      },
      {
        lang: "bash",
        code: `# 5. Cache do usuário — miniaturas, navegadores, etc.
du -sh ~/.cache
# 1.4G    /home/voce/.cache

# Limpar miniaturas antigas (seguro):
rm -rf ~/.cache/thumbnails/*

# Para uma limpeza guiada com interface gráfica, instale o BleachBit
sudo apt install bleachbit -y
bleachbit             # versão usuário
sudo bleachbit        # versão root, limpa coisas do sistema`,
      },
      {
        lang: "bash",
        code: `# 6. Achar arquivos enormes que você esqueceu por aí
# Top 10 maiores arquivos no seu /home
find ~ -type f -size +100M -exec du -h {} + 2>/dev/null | sort -rh | head -10

# Top 10 pastas gigantes em /var (precisa sudo)
sudo du -h /var --max-depth=2 2>/dev/null | sort -rh | head -10`,
      },
    ],
    points: [
      "df -h mostra quanto cada partição está ocupando; comece sempre por aí.",
      "sudo apt clean libera o cache de pacotes baixados — costuma ser o que mais ocupa.",
      "sudo apt autoremove --purge remove pacotes órfãos junto com seus arquivos de config.",
      "Kernels antigos vão se acumulando em /boot; deixe no máximo 2 (atual + um anterior).",
      "journalctl --vacuum-size=200M limita o crescimento dos logs do systemd.",
      "BleachBit é o 'CCleaner do Linux' — fácil de usar, mas leia cada caixinha antes de marcar.",
      "Iniciante comum: rodar 'sudo rm -rf /var/log/*' achando que limpa logs — isso quebra serviços; use journalctl.",
      "Iniciante comum: apagar pasta ~/.cache inteira com aplicativos abertos — eles podem travar; feche tudo antes.",
    ],
    alerts: [
      {
        type: "danger",
        content: "JAMAIS use 'sudo rm -rf /' ou variações com espaços extras (rm -rf / tmp). Esse comando apaga todo o sistema. Se viu na internet, é golpe ou troll.",
      },
      {
        type: "warning",
        content: "Não delete o kernel atualmente em uso (uname -r) nem o último de fallback. Se algo der errado e o atual quebrar, é o anterior que te salva no GRUB.",
      },
      {
        type: "tip",
        content: "Para visualizar o uso de disco de forma gráfica, instale o 'baobab' (Analisador de Uso de Disco). Ele mostra um gráfico em pizza que torna óbvio onde o espaço está indo.",
      },
      {
        type: "info",
        content: "Em SSDs, evite rodar 'fstrim' à mão constantemente. O Ubuntu já roda toda semana via cron (fstrim.timer). Verifique com 'systemctl status fstrim.timer'.",
      },
    ],
  },
  {
    slug: "timeshift-backup",
    section: "manutencao",
    title: "Backup com Timeshift",
    difficulty: "iniciante",
    subtitle: "Tirando 'fotos' do sistema para voltar quando algo der errado.",
    intro: `Imagine poder tirar uma foto do estado do seu sistema hoje, antes de instalar aquele driver duvidoso ou atualizar para uma versão nova. E, se algo der errado, voltar para a foto de ontem como se nada tivesse acontecido. É exatamente isso que o Timeshift faz: snapshots (instantâneos) do sistema que você restaura em poucos minutos.

O Timeshift é inspirado no Time Machine do macOS e no System Restore do Windows. Diferença importante: por padrão, ele faz backup do SISTEMA, não dos seus arquivos pessoais em \`/home\`. A ideia é proteger contra atualizações ruins, configurações que você bagunçou, drivers problemáticos. Para fotos, documentos e vídeos pessoais, use outra ferramenta de backup (Déjà Dup, rsync, nuvem).

Por baixo dos panos, o Timeshift usa uma de duas tecnologias: \`rsync\` (cópia incremental, funciona em qualquer sistema de arquivos) ou \`btrfs\` (instantâneos quase instantâneos, mas exige formatar com Btrfs). No Lubuntu padrão, que vem em ext4, você usa o modo rsync. Funciona perfeitamente, só ocupa um pouco mais de espaço.

A regra é simples: tire um snapshot ANTES de qualquer mudança importante. Atualizar para uma nova LTS? Snapshot. Instalar driver da NVIDIA? Snapshot. Mexer no GRUB? Snapshot. Cinco minutos de paciência hoje podem economizar horas de reinstalação amanhã.`,
    codes: [
      {
        lang: "bash",
        code: `# 1. Instalando o Timeshift (já vem em algumas versões; se não, instale)
sudo apt update
sudo apt install timeshift -y

# Abrindo pela primeira vez (interface gráfica)
sudo timeshift-gtk
# Pede senha porque precisa acesso ao disco inteiro`,
      },
      {
        lang: "bash",
        code: `# 2. Configuração inicial recomendada (modo gráfico)
# - Tipo: RSYNC (funciona em ext4, mais comum)
# - Local: outra partição/disco se tiver, senão a mesma /
# - Agendamento: Daily (mantém 5), Weekly (mantém 3)
# - Incluir /home: por padrão NÃO. Deixe assim se /home for grande.

# Para criar o primeiro snapshot pela linha de comando:
sudo timeshift --create --comments "estado limpo pos-instalacao" --tags D
# --tags D = "Daily"; outros: H (hourly), W (weekly), M (monthly), O (on demand)`,
      },
      {
        lang: "text",
        code: `# Saída de exemplo de um snapshot pronto
First run mode (config file not found)
Selected default snapshot type: RSYNC
Mounted '/dev/sda2' at '/run/timeshift/backup'
Device is OK
Estimating system size...
Creating new snapshot...(RSYNC)
Saving to device: /dev/sda2, mounted at: /run/timeshift/backup
Linking from previous snapshot
Synching files with rsync...
Saving config file
Created control file: /run/timeshift/.../info.json
RSYNC Snapshot saved successfully (61s)
Tagged snapshot '2025-01-15_14-22-37': ondemand`,
      },
      {
        lang: "bash",
        code: `# 3. Listando snapshots existentes
sudo timeshift --list
# Num     Name                 Tags  Description
# 0    >  2025-01-15_14-22-37   O    estado limpo pos-instalacao
# 1    >  2025-01-14_03-00-00   D
# 2    >  2025-01-13_03-00-00   D

# Ver onde estão guardados
sudo timeshift --list-devices`,
      },
      {
        lang: "bash",
        code: `# 4. Apagando snapshots antigos quando o disco encher
sudo timeshift --delete --snapshot '2025-01-13_03-00-00'

# Ou tudo de uma vez (cuidado!)
sudo timeshift --delete-all`,
      },
      {
        lang: "bash",
        code: `# 5. Agendando via interface — checagem rápida
# A configuração fica em /etc/timeshift/timeshift.json
sudo cat /etc/timeshift/timeshift.json | head -20
# Procure por "schedule_daily" : "true"

# Agenda real é executada pelo cron do timeshift-cron
systemctl status cron | head -5`,
      },
    ],
    points: [
      "Timeshift = snapshots do SISTEMA. Para arquivos pessoais, use outra ferramenta (Déjà Dup, rsync).",
      "Em ext4 (Lubuntu padrão), use modo RSYNC; se for Btrfs, prefira o modo BTRFS por velocidade.",
      "Crie um snapshot ANTES de atualizações grandes, drivers ou mudanças no GRUB.",
      "Por padrão /home NÃO entra no snapshot (evita ocupar muito); ative só se realmente quiser.",
      "Mantenha snapshots em outra partição ou disco externo — se o disco do sistema falhar, perde tudo.",
      "Agende snapshots diários e semanais; o Timeshift gerencia o ciclo automaticamente.",
      "Iniciante comum: pensar que Timeshift faz backup de fotos/documentos — não faz por padrão; perde tudo num desastre.",
      "Iniciante comum: guardar snapshots na MESMA partição /; se o disco morrer, leva os snapshots junto.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Snapshot NÃO é backup. Se o HD/SSD físico falhar, os snapshots vão junto. Sempre tenha cópia dos arquivos importantes em outro lugar (HD externo, nuvem).",
      },
      {
        type: "tip",
        content: "Se você tem dois discos (SSD + HD antigo), aponte o Timeshift para o HD. Snapshots ocupam menos espaço crítico e o sistema continua rápido no SSD.",
      },
      {
        type: "info",
        content: "Snapshots incrementais quase não ocupam espaço extra: o Timeshift usa hard-links para reaproveitar arquivos que não mudaram. Só o que muda gera novos blocos.",
      },
      {
        type: "danger",
        content: "Não confie em snapshots como única proteção contra ransomware: malwares modernos apagam snapshots locais. Backup off-site ou desconectado é insubstituível.",
      },
    ],
  },
  {
    slug: "restaurar-snapshot",
    section: "manutencao",
    title: "Restaurando um snapshot",
    difficulty: "intermediario",
    subtitle: "Voltando o Lubuntu para o estado de ontem quando algo quebra.",
    intro: `Restaurar um snapshot é como apertar o botão "desfazer" do sistema operacional inteiro. Você diz para o Timeshift: "leve meu Lubuntu de volta ao estado daquela foto que tirei ontem". Em alguns minutos, todos os arquivos do sistema voltam exatamente como estavam — pacotes, configurações, drivers, tudo.

Existem dois cenários típicos. No primeiro, o sistema ainda inicia normalmente: você instalou algo que deu errado, mas consegue logar e usar a interface gráfica. Aí basta abrir o Timeshift, escolher o snapshot, clicar Restore. Cinco minutos depois, está como antes.

No segundo cenário, o sistema NÃO inicia mais — tela preta, kernel panic, GRUB quebrado. Aqui é onde o Timeshift brilha: você inicia com um pendrive Live do Lubuntu, instala o timeshift no Live, monta o disco interno e restaura de lá. Sem reinstalar nada.

Antes de começar, lembre: a restauração SUBSTITUI os arquivos do sistema pelos do snapshot. Se você criou ou alterou algum arquivo de sistema entre o snapshot e agora, vai perder essas mudanças. Por padrão, /home fica intocado, então fotos e documentos ficam a salvo. Confirme isso na tela de seleção antes de confirmar.`,
    codes: [
      {
        lang: "bash",
        code: `# Cenário 1 — sistema iniciou, restauração pela GUI
sudo timeshift-gtk
# Selecione o snapshot na lista → clique em "Restaurar"
# Tela mostra o que será sobrescrito.
# Confirme → reinicie quando ele pedir`,
      },
      {
        lang: "bash",
        code: `# Cenário 1 — restauração pela linha de comando
sudo timeshift --list
# Anote o nome do snapshot, ex: 2025-01-14_03-00-00

sudo timeshift --restore --snapshot '2025-01-14_03-00-00'
# Vai pedir confirmações:
# - Restaurar configuração de boot? (geralmente sim)
# - Excluir certos diretórios? (deixe o padrão)`,
      },
      {
        lang: "text",
        code: `# Saída resumida durante a restauração
Selected snapshot: 2025-01-14_03-00-00
To restore with default options, press the ENTER key for all prompts!

Snapshot will be restored to: /
Files will be over-written.

Do you want to continue? (y/N): y

Synching files with rsync...
...
Re-installing GRUB2 bootloader...
Restore completed.
You should reboot the system to load the restored kernel.`,
      },
      {
        lang: "bash",
        code: `# Cenário 2 — sistema NÃO inicia, usando pendrive Live
# 1. Boot pelo pendrive do Lubuntu
# 2. Escolha "Try Lubuntu" (sem instalar)
# 3. Abra o terminal (qterminal) e instale o timeshift
sudo apt update
sudo apt install timeshift -y

# 4. Abra a interface gráfica
sudo timeshift-gtk
# Ele detecta os snapshots do disco interno automaticamente`,
      },
      {
        lang: "bash",
        code: `# Cenário 2 — modo CLI no Live
# Veja onde está o snapshot
sudo timeshift --list-devices
# Selecione o disco onde os snapshots estão guardados
sudo timeshift --list --snapshot-device /dev/sda2

# Restaura para o disco do sistema (ex: /dev/sda3 = sua /)
sudo timeshift --restore \\
  --snapshot '2025-01-14_03-00-00' \\
  --target /dev/sda3`,
      },
      {
        lang: "bash",
        code: `# Após reiniciar — confirme que voltou direitinho
uname -r              # kernel deve ser o do snapshot
lsb_release -a        # versão do Ubuntu
dpkg -l | grep -c '^ii'  # quantidade de pacotes instalados

# Se algum app não funcionar, atualize a lista de pacotes
sudo apt update
sudo apt --fix-broken install`,
      },
    ],
    points: [
      "Restaurar substitui arquivos do sistema pelos do snapshot — mudanças posteriores se perdem.",
      "/home fica protegido por padrão; configure explicitamente se quiser incluí-lo.",
      "Pela GUI: timeshift-gtk → escolher snapshot → Restore. Pela CLI: timeshift --restore --snapshot '...'.",
      "Se o sistema não inicia, use um pendrive Live do Lubuntu, instale o timeshift e restaure de lá.",
      "Sempre reinstale o GRUB durante a restauração se você mexeu em boot ou trocou kernel.",
      "Após restaurar, rode 'sudo apt --fix-broken install' caso algum pacote tenha ficado bagunçado.",
      "Iniciante comum: restaurar com /home incluído sem perceber, perdendo trabalho recente em documentos.",
      "Iniciante comum: pular o reboot pedido pelo Timeshift e continuar usando — o sistema fica num estado inconsistente.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Antes de restaurar, copie qualquer arquivo recente importante para um pendrive. Mesmo com /home preservado, pequenos descuidos podem custar caro.",
      },
      {
        type: "tip",
        content: "Crie um pendrive de emergência com a versão atual do Lubuntu e guarde na gaveta. No dia do problema, você não vai querer baixar 3GB de ISO com pressa.",
      },
      {
        type: "info",
        content: "Restaurar não desfaz alterações em arquivos pessoais (.config, fotos, planilhas) por padrão. Só sistema. Se um vírus comeu seus documentos, snapshot não traz de volta.",
      },
      {
        type: "danger",
        content: "Ao restaurar pela GUI Live, confira o disco de destino com cuidado. Apontar para o pendrive em vez do disco interno é o erro mais caro possível.",
      },
    ],
  },
  {
    slug: "logs-sistema",
    section: "manutencao",
    title: "Lendo os logs do sistema",
    difficulty: "intermediario",
    subtitle: "Onde o Lubuntu anota o que acontece — e como interpretar.",
    intro: `Logs são o "diário do sistema". Cada serviço, driver, atualização e erro deixa anotações em arquivos próprios para que, quando algo der errado, você (ou um amigo experiente) consiga investigar o que aconteceu. Sem logs, debugar é adivinhação. Com logs, é detetive.

No Lubuntu moderno (e em todo Ubuntu pós-15.04), o protagonista é o \`journalctl\`, ferramenta do systemd. Ele guarda todos os eventos do sistema num formato binário comprimido em \`/var/log/journal/\`, organizado por data, serviço e prioridade. Você pergunta o que quer ver e ele responde — mostrar erros das últimas 2 horas, eventos de boot, falhas do Wi-Fi.

Existem também os logs "tradicionais", em texto simples, dentro de \`/var/log/\`. \`auth.log\` registra logins e tentativas. \`dpkg.log\` mostra o que foi instalado/removido. \`Xorg.0.log\` ou \`syslog\` ajudam com problemas gráficos. Cada arquivo tem seu pedaço da história.

A primeira regra do leitor de logs: leia de baixo para cima e procure pelas palavras "error", "failed", "warning". Não tente entender tudo de uma vez. A segunda regra: anote o horário aproximado em que o problema aconteceu antes de abrir o log. Filtrar por tempo poupa horas.`,
    codes: [
      {
        lang: "bash",
        code: `# 1. journalctl — primeira parada para qualquer problema
# Mostra TUDO desde o boot atual
sudo journalctl -b
# Use as setas para navegar; q para sair

# Apenas erros (priority <= err)
sudo journalctl -p err -b
# Mostra os erros desde o último boot`,
      },
      {
        lang: "bash",
        code: `# 2. Filtrando por tempo — quando você sabe quando algo quebrou
sudo journalctl --since "2 hours ago"
sudo journalctl --since today
sudo journalctl --since "2025-01-15" --until "2025-01-15 12:00"

# Acompanhar em tempo real (igual tail -f)
sudo journalctl -f
# Aperte Ctrl+C para parar`,
      },
      {
        lang: "bash",
        code: `# 3. Filtrando por serviço/unidade
sudo journalctl -u NetworkManager -b
# Só logs do NetworkManager desde o boot

sudo journalctl -u bluetooth --since "1 hour ago"
# Bluetooth na última hora

# Combinando: erros do sddm (login) hoje
sudo journalctl -u sddm -p err --since today`,
      },
      {
        lang: "bash",
        code: `# 4. Logs tradicionais em /var/log/
ls /var/log/ | head -20
# auth.log    dpkg.log    syslog    Xorg.0.log    apt/

# Tentativas de login (sucesso e falha)
sudo tail -50 /var/log/auth.log

# Histórico de instalações de pacotes
grep " install " /var/log/dpkg.log | tail
# 2025-01-15 14:22:01 install timeshift:amd64 <none> 22.11.2

# Histórico de upgrades
sudo less /var/log/apt/history.log`,
      },
      {
        lang: "bash",
        code: `# 5. Achar mensagens do kernel (drivers, hardware)
sudo dmesg | tail -30
# Mensagens recentes

sudo dmesg --level=err,warn -T
# Só erros/avisos com data legível

# Falhas de hardware costumam aparecer aqui
sudo dmesg | grep -i 'error\\|fail\\|denied'`,
      },
      {
        lang: "bash",
        code: `# 6. Buscando uma palavra-chave em vários lugares ao mesmo tempo
sudo grep -r 'wpa_supplicant' /var/log/ 2>/dev/null | head

# Listar serviços que falharam
systemctl --failed
# 0 loaded units listed.   ← perfeito, sem falhas

# Status detalhado de um serviço específico
systemctl status NetworkManager`,
      },
    ],
    points: [
      "journalctl é a ferramenta principal de logs no Lubuntu moderno; aprenda 3-4 flags básicas.",
      "-b mostra logs do boot atual; -b -1 mostra do boot anterior (útil quando o sistema reinicia sozinho).",
      "-p err filtra só erros; combine com --since para reduzir o ruído.",
      "/var/log/auth.log = logins; /var/log/dpkg.log = pacotes; /var/log/syslog = geral.",
      "dmesg mostra mensagens do kernel — essencial para problemas de hardware/driver.",
      "systemctl --failed lista rapidamente todos os serviços que não subiram.",
      "Iniciante comum: ler logs gigantes do começo. Comece pelo fim com 'tail' ou 'less +G' e suba.",
      "Iniciante comum: copiar erros do log para o Google sem remover datas/IDs únicos — enterra a busca em zero resultados.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Ao buscar por um erro no Google, copie só a parte genérica da mensagem (sem timestamps, sem PIDs, sem caminhos do seu /home). Isso aumenta muito a chance de achar a solução.",
      },
      {
        type: "info",
        content: "O journal é rotacionado automaticamente. Se ele estiver enorme, controle com 'sudo journalctl --vacuum-size=200M' (visto no capítulo de limpeza).",
      },
      {
        type: "warning",
        content: "Não compartilhe logs publicamente sem ler antes: podem conter nomes de usuário, paths de arquivos privados e até endereços IP. Anonimize antes de postar em fóruns.",
      },
    ],
  },
  {
    slug: "agendar-tarefas-cron",
    section: "manutencao",
    title: "Agendando tarefas com cron",
    difficulty: "intermediario",
    subtitle: "Fazendo o Lubuntu rodar comandos sozinho em horários definidos.",
    intro: `Imagine ter um mordomo invisível que, todo dia às 3 da manhã, faz backup dos seus documentos enquanto você dorme. Ou que limpa pastas temporárias toda segunda. Ou que sincroniza notas para a nuvem a cada hora. No Linux, esse mordomo se chama \`cron\` — um serviço que existe desde os anos 70 e roda comandos em horários que você programa.

A configuração é feita por arquivos chamados "crontabs". Cada usuário tem o seu (\`crontab -e\`) e o sistema tem o dele em \`/etc/crontab\`. Cada linha define quando e o que executar. A sintaxe parece estranha à primeira vista, mas com 5 minutos vira natural: cinco campos para o tempo (minuto, hora, dia, mês, dia-da-semana) e o comando depois.

Existe uma alternativa mais nova chamada \`systemd timer\`, que faz a mesma coisa com YAML moderninho. Para tarefas pessoais simples, cron continua imbatível pela facilidade. Para serviços do sistema, o systemd timer é o caminho atual.

A regra ouro do cron: SEMPRE use caminhos absolutos no comando (\`/usr/bin/rsync\`, \`/home/voce/scripts/backup.sh\`) e SEMPRE redirecione a saída para um arquivo de log. Cron roda num ambiente reduzido, sem o seu PATH e sem terminal — comandos relativos somem no vazio e erros silenciosos enlouquecem qualquer um.`,
    codes: [
      {
        lang: "text",
        code: `# Anatomia de uma linha de crontab
#  ┌──── minuto         (0 - 59)
#  │ ┌── hora           (0 - 23)
#  │ │ ┌── dia do mês   (1 - 31)
#  │ │ │ ┌── mês        (1 - 12)
#  │ │ │ │ ┌── dia semana (0 - 6, 0=domingo)
#  │ │ │ │ │
#  * * * * *  comando-a-rodar

# Exemplos comuns:
# 0 3 * * *        → todo dia às 03:00
# */15 * * * *     → a cada 15 minutos
# 0 9 * * 1-5      → 09:00 de segunda a sexta
# 0 0 1 * *        → meia-noite do dia 1 de cada mês`,
      },
      {
        lang: "bash",
        code: `# 1. Editando seu crontab pessoal
crontab -e
# Na primeira vez ele pergunta qual editor (escolha nano se for iniciante)

# Veja o que está agendado
crontab -l

# Remover tudo (cuidado!)
# crontab -r`,
      },
      {
        lang: "bash",
        code: `# 2. Exemplo prático: backup de Documentos toda noite
# Cole no seu crontab (crontab -e):

0 2 * * * /usr/bin/rsync -a /home/voce/Documentos/ /media/backup/docs/ >> /home/voce/cron.log 2>&1

# Quebrando:
# 0 2 * * *               → todo dia às 02:00
# /usr/bin/rsync -a       → caminho ABSOLUTO + cópia preservando permissões
# /home/voce/Documentos/  → origem (barra final = só o conteúdo)
# /media/backup/docs/     → destino
# >> /home/voce/cron.log  → anexa stdout em log
# 2>&1                    → manda stderr para o mesmo log`,
      },
      {
        lang: "bash",
        code: `# 3. Atalhos amigáveis (mais legíveis que asteriscos)
@reboot   /home/voce/scripts/start-vpn.sh    # roda 1x ao iniciar
@hourly   /usr/bin/sync-notas.sh             # toda hora cheia
@daily    /home/voce/scripts/backup.sh       # toda madrugada (00:00)
@weekly   /usr/bin/apt-mirror                # todo domingo 00:00
@monthly  /home/voce/scripts/relatorio.sh    # dia 1 de cada mês`,
      },
      {
        lang: "bash",
        code: `# 4. Conferindo se o cron está rodando e vendo o log dele
systemctl status cron
# active (running) since ...

# Logs do que o cron tentou rodar (no Ubuntu vai pro syslog)
sudo journalctl -u cron --since today
# Ou:
grep CRON /var/log/syslog | tail`,
      },
      {
        lang: "bash",
        code: `# 5. Tarefas do sistema (precisam de root)
sudo crontab -e            # crontab do root, NÃO use para coisas pessoais

# Pastas globais executadas automaticamente:
ls /etc/cron.daily/
# apt-compat  dpkg  logrotate  man-db  ...

# Para rodar diariamente um script seu como root:
sudo cp meu-script.sh /etc/cron.daily/meu-script
sudo chmod +x /etc/cron.daily/meu-script
# IMPORTANTE: arquivos em /etc/cron.daily NÃO podem ter ponto no nome`,
      },
      {
        lang: "bash",
        code: `# 6. Alternativa moderna: systemd timer (rápido tour)
# Crie /etc/systemd/system/meubackup.service
# [Service]
# ExecStart=/home/voce/scripts/backup.sh

# E /etc/systemd/system/meubackup.timer
# [Timer]
# OnCalendar=daily
# Persistent=true
# [Install]
# WantedBy=timers.target

sudo systemctl enable --now meubackup.timer
systemctl list-timers --all | head`,
      },
    ],
    points: [
      "cron roda comandos em horários programados; ideal para backups, limpezas e sincronizações.",
      "Crontab tem 5 campos de tempo: minuto, hora, dia, mês, dia-da-semana, depois o comando.",
      "Use sempre caminhos absolutos: cron não tem o $PATH do seu terminal interativo.",
      "Redirecione stdout e stderr (>> log 2>&1) para conseguir investigar erros depois.",
      "@reboot, @daily, @weekly são apelidos legíveis e bem mais fáceis que */* * * *.",
      "/etc/cron.daily/ executa scripts automaticamente — não use ponto no nome do arquivo.",
      "systemd timer é a alternativa moderna; para tarefas pessoais, cron costuma ser suficiente.",
      "Iniciante comum: testar o agendamento em terminal e achar que vai funcionar no cron — esquecendo do PATH reduzido.",
      "Iniciante comum: criar uma tarefa a cada minuto sem perceber e encher o disco de logs em poucos dias.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Cron usa o fuso horário do sistema. Confira com 'timedatectl' antes de agendar; se você muda de país, os horários mudam.",
      },
      {
        type: "tip",
        content: "Use https://crontab.guru para visualizar em linguagem humana o que sua expressão significa. Evita marcar 'toda hora cheia' achando que era 'a cada hora cheia do dia útil'.",
      },
      {
        type: "info",
        content: "Se o computador estiver desligado na hora marcada, o cron tradicional NÃO recupera tarefas perdidas. Para isso use 'anacron' ou systemd timer com Persistent=true.",
      },
      {
        type: "danger",
        content: "Não coloque senhas em texto plano dentro de scripts agendados pelo cron. Use chaves SSH, gerenciadores de credenciais (pass, secret-tool) ou variáveis de ambiente protegidas.",
      },
    ],
  },
];
