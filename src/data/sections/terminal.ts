import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "abrir-terminal",
    section: "terminal",
    title: "Abrindo o terminal pela primeira vez",
    difficulty: "iniciante",
    subtitle: "Conhecendo o QTerminal, o shell bash e perdendo o medo da tela preta.",
    intro: `O terminal parece assustador: fundo escuro, letras monoespaçadas e nenhum botão para clicar. Mas pense nele como a recepção de um hotel onde você fala direto com o gerente, em vez de procurar o painel certo no menu. Tudo o que o Lubuntu sabe fazer, você consegue pedir digitando — e quase sempre mais rápido do que no mouse.

Vale separar dois nomes que confundem todo iniciante. O **terminal** (no Lubuntu, o QTerminal) é só a janela — o "monitor e teclado". Quem realmente entende e executa os comandos é o **shell**, e o shell padrão do Ubuntu/Lubuntu se chama **bash**. Ou seja: você digita no QTerminal, o bash interpreta. Saber disso ajuda quando um tutorial fala "abra um shell" ou "no seu bash" — é tudo a mesma coisa aqui.

Antes de digitar, entenda o que aparece: algo como \`bruno@meupc:~$\`. Esse é o **prompt** — usuário (\`bruno\`), \`@\`, nome da máquina (\`meupc\`), dois-pontos, a pasta atual (\`~\` é a sua casa) e o \`$\` avisando que está pronto para receber comando. Se em vez de \`$\` aparecer \`#\`, cuidado dobrado: você está como **root** (administrador) e um comando errado pode quebrar o sistema.

Neste capítulo você vai abrir o terminal, ler cada pedaço do prompt, rodar seus primeiros comandos inofensivos, entender o erro mais comum de todos ("command not found") e deixar o QTerminal do seu jeito. Todo o resto desta trilha se apoia neste alicerce.`,
    codes: [
      {
        lang: "bash",
        code: `# Abrir o terminal:
#   Menu (canto inferior esquerdo) > Sistema > QTerminal
#   ou o atalho padrão do Lubuntu:  Ctrl + Alt + T

# Já dentro dele, três comandos totalmente inofensivos:
whoami
# bruno
hostname
# meupc
date
# qua 06 mai 2026 14:32:10 -03`,
      },
      {
        lang: "bash",
        code: `# Anatomia do prompt   bruno@meupc:~$
#   bruno   -> seu usuário
#   meupc   -> nome do computador (hostname)
#   ~       -> pasta atual (~ é atalho para /home/bruno)
#   $       -> usuário comum   |   # seria root (admin)

# Onde eu estou e qual shell estou usando?
pwd
# /home/bruno
echo "$SHELL"
# /bin/bash
bash --version | head -n1
# GNU bash, version 5.2.21(1)-release (x86_64-pc-linux-gnu)`,
      },
      {
        lang: "bash",
        code: `# O erro mais comum do mundo: "command not found"
# Acontece por digitar errado ou por o programa não estar instalado.
neofetch
# Command 'neofetch' not found, did you mean:
#   command 'setfetch' from deb setfetch
# Try: sudo apt install <deb name>

# Correção 1 — foi só erro de digitação? confira o nome certo.
# Correção 2 — não está instalado? instale (veremos apt na trilha de Pacotes):
sudo apt install fastfetch -y
fastfetch      # agora funciona`,
      },
      {
        lang: "bash",
        code: `# Limpar a tela quando bagunçar:
clear          # ou aperte Ctrl + L (não perde o que já digitou)

# Repetir o último comando sem redigitar: seta para cima.
# Sair do terminal:
exit           # ou Ctrl + D`,
      },
      {
        lang: "bash",
        code: `# Abas e divisão de tela no QTerminal (sem abrir várias janelas):
#   Ctrl + Shift + T  -> nova aba
#   Ctrl + Tab        -> alterna entre abas
#   Ctrl + Shift + W  -> fecha a aba
#   Menu File > Split Terminal  -> divide a janela em dois painéis

# Copiar/colar no terminal NÃO é Ctrl+C/Ctrl+V (esses têm outro papel):
#   Ctrl + Shift + C  -> copiar
#   Ctrl + Shift + V  -> colar`,
      },
      {
        lang: "bash",
        code: `# Ajustar a fonte (ótimo para enxergar melhor ou apresentar):
#   Ctrl + +  aumenta    Ctrl + -  diminui    Ctrl + 0  padrão

# Preferências salvas: menu  Settings > Preferences
#   - Fonte: Monospace 12 ou 13
#   - Tema escuro cansa menos a vista
#   - "Open new tabs adjacent to current"  deixa as abas organizadas`,
      },
      {
        lang: "bash",
        code: `# Todo comando tem manual e ajuda embutidos — use antes de pesquisar fora:
man ls         # manual completo (q sai, /palavra busca, setas rolam)
ls --help      # resumo rápido das opções mais usadas
help cd        # ajuda de comandos internos do bash (cd, pwd, export...)
type ls        # diz o que 'ls' é: alias, programa ou builtin
# ls is aliased to 'ls --color=auto'`,
      },
    ],
    points: [
      "O QTerminal é a janela; o bash é o shell que interpreta os comandos. No Lubuntu, o padrão é bash.",
      "Abra em Sistema > QTerminal ou com Ctrl+Alt+T; feche com exit ou Ctrl+D.",
      "Leia o prompt da esquerda para a direita: usuário@máquina:pasta$ (o $ vira # quando você é root).",
      "whoami diz quem você é, hostname o nome da máquina, pwd a pasta atual — três checagens de orientação.",
      "\"command not found\" quase sempre é erro de digitação ou programa não instalado (instale com apt).",
      "Copiar/colar no terminal é Ctrl+Shift+C e Ctrl+Shift+V — o Ctrl+C puro interrompe o comando em execução.",
      "Ctrl+L (ou clear) limpa a tela; a seta para cima repete o último comando.",
      "Iniciante comum: digitar como no Word e não perceber que um espaço a mais ou letra trocada quebra tudo (o terminal não corrige).",
      "Iniciante comum: ver o # no prompt e não notar que está como root — confira sempre antes de rodar algo pesado.",
      "man comando e comando --help resolvem a maioria das dúvidas sem sair do terminal.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Ajuste o QTerminal em Settings > Preferences: fonte 12–13, tema escuro e 'Open new tabs adjacent to current'. Pequenos ajustes que você agradece depois de horas de uso.",
      },
      {
        type: "info",
        content: "Se o Ctrl+Alt+T não abrir nada, vá em Preferências do LXQt > Atalhos de teclado e crie um atalho para o comando 'qterminal'. Em algumas instalações ele não vem configurado.",
      },
      {
        type: "warning",
        content: "Não cole comandos longos de sites desconhecidos sem ler. Existe um truque malicioso em que o texto copiado esconde um comando diferente do que aparece na tela.",
      },
      {
        type: "success",
        content: "Abra o terminal pelo menos uma vez por dia de propósito. Em duas semanas a 'tela preta' vira o lugar mais rápido para metade das suas tarefas.",
      },
    ],
  },
  {
    slug: "navegacao-pastas",
    section: "terminal",
    title: "Navegando pelas pastas",
    difficulty: "iniciante",
    subtitle: "cd, ls, pwd e o mapa (FHS) do sistema de arquivos do Linux.",
    intro: `Imagine o sistema de arquivos do Linux como um prédio gigante. Na portaria fica a raiz, representada por uma simples barra \`/\`. Dela saem corredores padronizados: \`/home\` onde moram os usuários, \`/etc\` com os "manuais de configuração", \`/usr\` com os programas instalados, \`/var\` onde o sistema anota logs e caches. Essa padronização tem até nome oficial: **FHS** (Filesystem Hierarchy Standard) — por isso qualquer distro Linux tem as mesmas pastas nos mesmos lugares.

Para andar por esse prédio bastam três comandos: \`pwd\` diz em que andar você está, \`ls\` mostra o que tem no andar e \`cd\` pega o elevador para outro lugar. Esses três resolvem 80% da navegação do dia a dia; o resto é atalho e opção.

Existem dois tipos de endereço. O **caminho absoluto** começa na raiz (\`/home/bruno/Documentos\`) e funciona de qualquer lugar. O **caminho relativo** parte de onde você está agora (\`Documentos\`, se já estiver em \`/home/bruno\`). Some a isso os atalhos \`~\` (sua casa), \`.\` (pasta atual) e \`..\` (pasta de cima) e você navega sem digitar caminho gigante.

Com um pouco de prática, achar arquivo no terminal fica mais rápido do que clicar no gerenciador. E quando você acessar a máquina pela rede via SSH (trilha de Rede), muitas vezes só vai ter o terminal — melhor dominar isso logo no começo.`,
    codes: [
      {
        lang: "bash",
        code: `# Onde estou?
pwd
# /home/bruno

# O que tem aqui?
ls
# Documentos  Downloads  Imagens  Música  Modelos  Público  Vídeos`,
      },
      {
        lang: "bash",
        code: `# Listagem detalhada: permissões, dono, tamanho e data
ls -l
# drwxr-xr-x 2 bruno bruno 4096 mai 10 09:12 Documentos
# -rw-r--r-- 1 bruno bruno 1234 mai 12 14:00 notas.txt

ls -la     # inclui arquivos ocultos (os que começam com .)
ls -lh     # tamanho legível: 4,0K, 1,2M, 3,1G em vez de bytes crus
ls -lt     # ordena por data (mais recentes primeiro)`,
      },
      {
        lang: "bash",
        code: `# Trocar de pasta (cd = change directory)
cd Documentos        # relativo: entra em ./Documentos
pwd                  # /home/bruno/Documentos
cd /etc              # absoluto: vai direto, de qualquer lugar
cd ~                 # volta para a sua casa (/home/bruno)
cd                   # sem argumento: também volta para casa
cd -                 # volta para a PASTA ANTERIOR (alterna entre duas)`,
      },
      {
        lang: "bash",
        code: `# Erros comuns de navegação — e o que eles significam:

cd notas.txt
# bash: cd: notas.txt: Not a directory
#  -> 'cd' só entra em PASTAS; notas.txt é arquivo.

cd /roott
# bash: cd: /roott: No such file or directory
#  -> caminho digitado errado (era /root). Confira com Tab.

cd /root
# bash: cd: /root: Permission denied
#  -> a casa do root é protegida; usuário comum não entra.`,
      },
      {
        lang: "bash",
        code: `# Tab completion: o maior atalho contra erro de digitação.
# Comece a digitar e aperte Tab; se houver ambiguidade, Tab duas vezes lista.
cd Doc<Tab>          # completa para:  cd Documentos/
ls /et<Tab>          # completa para:  ls /etc/
cd ~/D<Tab><Tab>     # mostra as opções: Documentos/  Downloads/`,
      },
      {
        lang: "bash",
        code: `# As pastas da raiz e para que servem (padrão FHS):
ls /
# bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run
# sbin  srv  sys  tmp  usr  var
#
# etc   -> configurações do sistema (texto puro, editável com sudo)
# home  -> pastas pessoais dos usuários
# usr   -> programas instalados pelo apt
# var   -> logs, caches, filas, bancos de dados
# tmp   -> temporário; é esvaziado a cada reinício
# proc  -> "arquivos" virtuais do kernel (processos, hardware)`,
      },
      {
        lang: "bash",
        code: `# Ver a árvore de pastas de uma vez (instale o tree):
sudo apt install tree -y
tree -L 2 ~/Documentos
# /home/bruno/Documentos
# ├── contas
# │   └── janeiro.pdf
# └── estudos
#     └── linux.txt
#
# -L 2 limita a 2 níveis de profundidade (senão despeja tudo).`,
      },
    ],
    points: [
      "pwd mostra o caminho atual, ls lista o conteúdo, cd entra em outra pasta — o trio da navegação.",
      "Caminho absoluto começa em / e funciona de qualquer lugar; relativo parte de onde você está.",
      "~ é atalho para /home/seu-usuário; . é a pasta atual; .. sobe um nível.",
      "cd - volta para a última pasta visitada — ótimo para alternar entre dois lugares.",
      "ls -lh mostra tamanhos legíveis, ls -la inclui ocultos, ls -lt ordena por data.",
      "\"Not a directory\" = você tentou entrar num arquivo; \"No such file\" = caminho errado; \"Permission denied\" = pasta protegida.",
      "Aperte Tab para completar nomes: economiza tempo e evita a maioria dos erros de digitação.",
      "Iniciante comum: confundir cd ~ (sua casa) com cd / (raiz do sistema).",
      "Iniciante comum: escrever caminho com barra invertida \\ no estilo Windows — no Linux é sempre a barra normal /.",
      "As pastas /etc, /var e /usr seguem o padrão FHS e existem igual em toda distro Linux.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Decore três atalhos e sua navegação dobra de velocidade: cd .. (sobe um nível), cd - (volta à pasta anterior) e cd ~ (vai para casa).",
      },
      {
        type: "info",
        content: "Arquivos que começam com . (ponto) são 'ocultos' por convenção — quase sempre são configurações pessoais (ex.: ~/.bashrc). Use ls -a para vê-los.",
      },
      {
        type: "warning",
        content: "\"Permission denied\" ao entrar em pastas como /root ou /var/log/algo não é bug: são áreas do sistema. Só acesse com sudo quando realmente precisar e souber o motivo.",
      },
    ],
  },
  {
    slug: "manipular-arquivos",
    section: "terminal",
    title: "Criando, copiando e movendo arquivos",
    difficulty: "iniciante",
    subtitle: "mkdir, touch, cp, mv, rm — o quarteto do dia a dia (sem lixeira!).",
    intro: `Depois de andar pelas pastas, você vai querer mexer no conteúdo delas: criar arquivos, organizar em pastas, copiar para backup, mover de lugar e — com cuidado — apagar o que não serve mais. Esses comandos são o "novo arquivo, recortar, colar e excluir" do gerenciador gráfico, só que mais rápidos e automatizáveis em scripts.

A grande pegadinha: **no terminal não existe Lixeira**. Quando você apaga com \`rm\`, o arquivo some na hora, sem confirmação e sem como desfazer pelo caminho normal. Por isso a regra de ouro é ler o comando duas vezes antes de apertar Enter — principalmente qualquer \`rm\` com \`-r\` ou com curinga (\`*\`).

Os cinco pilares são: \`mkdir\` cria pastas, \`touch\` cria arquivo vazio, \`cp\` copia, \`mv\` move **ou** renomeia (no Linux é a mesma operação) e \`rm\` apaga. Juntando com os atalhos de caminho (\`~\`, \`..\`, \`.\`) e os curingas (\`*\`, \`?\`), eles cobrem quase toda manipulação básica.

Para praticar sem risco, vamos usar sempre uma pasta de brincadeira (\`~/sandbox\`). Crie uma dessas sempre que for testar comando novo — é a sua rede de segurança.`,
    codes: [
      {
        lang: "bash",
        code: `# Pasta de testes, para não mexer em nada de verdade:
mkdir ~/sandbox
cd ~/sandbox

# Criar vários arquivos vazios de uma vez:
touch nota.txt receita.txt lista.txt
ls
# lista.txt  nota.txt  receita.txt`,
      },
      {
        lang: "bash",
        code: `# Criar árvore de pastas de uma vez (-p cria as intermediárias):
mkdir -p projeto/codigo/python projeto/docs

# Sem o -p, criar pasta dentro de pasta inexistente falha:
mkdir projeto2/docs
# mkdir: cannot create directory 'projeto2/docs': No such file or directory
#  -> a pasta 'projeto2' ainda não existe. Correção: use -p.
mkdir -p projeto2/docs   # agora funciona`,
      },
      {
        lang: "bash",
        code: `# Copiar: cp origem destino
cp nota.txt nota_backup.txt
cp receita.txt projeto/docs/     # copia para outra pasta

# Copiar PASTA precisa do -r (recursivo):
cp projeto projeto-copia
# cp: -r not specified; omitting directory 'projeto'
#  -> correção:
cp -r projeto projeto-copia

# cp -i pergunta antes de sobrescrever um arquivo já existente:
cp -i nota.txt receita.txt
# cp: overwrite 'receita.txt'? n`,
      },
      {
        lang: "bash",
        code: `# Mover é o mesmo que renomear (só muda o nome/lugar do registro):
mv lista.txt compras.txt         # renomeia
mv compras.txt projeto/docs/     # move para outra pasta
mv projeto-copia ~/Documentos/   # move a pasta inteira
ls
# nota.txt  nota_backup.txt  projeto  projeto2  receita.txt`,
      },
      {
        lang: "bash",
        code: `# Apagar (CUIDADO: não tem lixeira!)
rm nota_backup.txt          # some na hora
rm receita.txt nota.txt     # vários de uma vez

# Apagar pasta VAZIA:
rmdir projeto2/docs

# Apagar pasta com conteúdo (recursivo + force):
rm -r projeto               # pede confirmação por item, dependendo do alias
rm -rf projeto-copia        # força, sem perguntar — TENHA CERTEZA do caminho`,
      },
      {
        lang: "bash",
        code: `# Rede de segurança para iniciantes: pergunte antes de apagar
rm -i compras.txt
# rm: remove regular file 'compras.txt'? y

# Torne isso permanente criando um alias no ~/.bashrc:
echo "alias rm='rm -i'" >> ~/.bashrc
source ~/.bashrc            # recarrega para valer agora`,
      },
      {
        lang: "bash",
        code: `# Curingas (wildcards): agir em vários arquivos por padrão
touch foto1.jpg foto2.jpg foto3.jpg doc.pdf

# REGRA DE OURO: teste com ls ANTES de apagar com rm.
ls *.jpg
# foto1.jpg  foto2.jpg  foto3.jpg   (é isso que seria afetado)
rm *.jpg                   # agora sim, apaga só as .jpg
ls foto?.jpg               # ? casa exatamente 1 caractere (nada sobrou)`,
      },
    ],
    points: [
      "mkdir cria pastas; mkdir -p cria também as pastas intermediárias que faltam.",
      "touch cria arquivo vazio (e atualiza a data de modificação se já existir).",
      "cp copia, mv move/renomeia (mesma operação no Linux), rm apaga.",
      "Para pastas use cp -r e rm -r; sem o -r vem o erro \"omitting directory\" / \"is a directory\".",
      "Curingas: * casa qualquer coisa, ? casa um único caractere — sempre teste com ls antes de usar no rm.",
      "cp -i e rm -i perguntam antes de sobrescrever/apagar — bom alias enquanto você pega o jeito.",
      "Iniciante comum: rodar rm -rf na pasta errada — confira o pwd e o caminho antes de apertar Enter.",
      "Iniciante comum: esquecer o -r ao copiar/apagar pasta e não entender o erro \"is a directory\".",
      "Não existe Lixeira no terminal: apagou com rm, foi embora de vez (por isso a cautela).",
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca rode 'rm -rf /', 'rm -rf /*' nem 'rm -rf \"$VAR\"/' com a variável vazia — qualquer um deles apaga o sistema inteiro. É o acidente mais clássico do Linux.",
      },
      {
        type: "warning",
        content: "Antes de qualquer rm com curinga, troque o rm por ls: 'ls *.tmp' mostra exatamente o que SERIA apagado. Só depois substitua o ls por rm.",
      },
      {
        type: "tip",
        content: "Quer uma lixeira de verdade no terminal? Instale 'sudo apt install trash-cli' e use 'trash-put arquivo' no lugar de rm. Ele manda para a Lixeira do LXQt e dá para recuperar.",
      },
      {
        type: "info",
        content: "mv no mesmo disco é instantâneo (só troca o registro do arquivo). Entre discos diferentes, ele copia e depois apaga — por isso pode demorar em arquivos grandes.",
      },
    ],
  },
  {
    slug: "ver-arquivos",
    section: "terminal",
    title: "Lendo o conteúdo dos arquivos",
    difficulty: "iniciante",
    subtitle: "cat, less, head, tail, grep — espiando textos sem abrir editor.",
    intro: `Boa parte dos arquivos importantes do Linux é texto puro: configurações em \`/etc\`, logs em \`/var/log\`, scripts, listas. Para dar uma olhada rápida você não precisa abrir um editor pesado — o terminal tem ferramentas feitas só para "espiar", cada uma para um tamanho de arquivo e um objetivo.

Pense assim: \`cat\` é o despejo (joga o arquivo inteiro na tela, bom para textos pequenos); \`less\` é o leitor paginável (você navega com setas, como num PDF); \`head\` mostra só o começo (útil para conferir o cabeçalho de um CSV) e \`tail\` mostra só o fim (perfeito para ver o que acabou de acontecer num log).

E tem o \`grep\`, o detetive da turma: ele procura um texto dentro de um ou vários arquivos e devolve só as linhas que casam. Combinado com pipe (próximo capítulo), o grep vira sua melhor ferramenta de investigação — "onde é que está escrito isso?" deixa de ser um problema.

Com esses cinco comandos você resolve a inspeção do dia a dia: ler a configuração do Wi-Fi, conferir o que o apt registrou, acompanhar um log de erro ao vivo, achar em que arquivo de uma pasta com 200 itens aparece certa palavra — tudo sem abrir uma única janela gráfica.`,
    codes: [
      {
        lang: "bash",
        code: `# Preparando um arquivo de exemplo (heredoc; detalhado no próximo capítulo):
cd ~/sandbox
cat > poema.txt <<'EOF'
Linha um: bom dia
Linha dois: bom dia ainda
Linha três: oi tarde
Linha quatro: boa noite
Linha cinco: até amanhã
EOF`,
      },
      {
        lang: "bash",
        code: `# cat = mostra o arquivo inteiro de uma vez
cat poema.txt
# Linha um: bom dia
# Linha dois: bom dia ainda
# Linha três: oi tarde
# Linha quatro: boa noite
# Linha cinco: até amanhã

# cat -n numera as linhas:
cat -n poema.txt
#   1  Linha um: bom dia
#   2  Linha dois: bom dia ainda
# ... bom só para arquivos pequenos (até ~50 linhas).`,
      },
      {
        lang: "bash",
        code: `# less = leitor paginável; ideal para arquivos grandes
less /var/log/syslog
# Dentro do less:
#   espaço -> próxima página        b -> página anterior
#   g -> início   G -> fim          /erro -> busca "erro"
#   n -> próxima ocorrência         q -> sair
#
# Precisa de sudo em alguns logs? "Permission denied" -> sudo less /var/log/auth.log`,
      },
      {
        lang: "bash",
        code: `# head = primeiras linhas (padrão 10) | tail = últimas linhas
head -n 2 poema.txt
# Linha um: bom dia
# Linha dois: bom dia ainda
tail -n 1 poema.txt
# Linha cinco: até amanhã

# tail -f ACOMPANHA o arquivo em tempo real (essencial para logs):
tail -f /var/log/syslog
# ...novas linhas aparecem conforme acontecem; Ctrl+C para parar.`,
      },
      {
        lang: "bash",
        code: `# grep = procura texto dentro do arquivo
grep "bom" poema.txt
# Linha um: bom dia
# Linha dois: bom dia ainda

grep -i "BOM" poema.txt      # -i ignora maiúsculas/minúsculas
grep -n "bom" poema.txt      # -n mostra o número da linha
# 1:Linha um: bom dia
# 2:Linha dois: bom dia ainda

# grep sem resultado não imprime nada e devolve "código 1" (normal):
grep "xyz" poema.txt         # (silêncio = não encontrou)`,
      },
      {
        lang: "bash",
        code: `# grep recursivo: procura dentro de uma pasta inteira
grep -rn "nameserver" /etc/     # -r entra nas subpastas, -n mostra a linha
# /etc/resolv.conf:2:nameserver 127.0.0.53

grep -rI "TODO" ~/projetos      # -I pula arquivos binários
grep -rl "senha" ~/configs      # -l mostra só o NOME dos arquivos que casam`,
      },
      {
        lang: "bash",
        code: `# wc conta linhas, palavras e bytes
wc poema.txt
#  5 20 118 poema.txt      (linhas, palavras, bytes)
wc -l poema.txt
# 5 poema.txt

# Combo clássico com pipe: quantas linhas com "error" tem no log?
grep -ic error /var/log/syslog
# 12       (-c já conta direto, sem precisar do wc)`,
      },
    ],
    points: [
      "cat serve para arquivos pequenos; less para grandes (paginável, com busca).",
      "head mostra o começo, tail mostra o fim; -n N controla quantas linhas.",
      "tail -f acompanha um arquivo em tempo real — ideal para observar logs ao vivo.",
      "grep procura texto: -i ignora caixa, -n mostra a linha, -r busca na pasta, -l só nomes, -c conta.",
      "Dentro do less: / busca, n vai à próxima, g/G pulam para início/fim, q sai.",
      "grep sem resultado não imprime nada — silêncio significa \"não encontrei\", não erro.",
      "Alguns logs pedem sudo (\"Permission denied\"): use sudo less /var/log/auth.log, por exemplo.",
      "Iniciante comum: dar cat em arquivo gigante e inundar a tela — na dúvida, use less.",
      "Iniciante comum: esquecer as aspas em termos com espaço (grep 'bom dia' arquivo).",
    ],
    alerts: [
      {
        type: "tip",
        content: "Use 'less +F arquivo.log' para abrir o log já acompanhando (igual ao tail -f). Aperte Ctrl+C para congelar e navegar, e Shift+F para voltar a seguir.",
      },
      {
        type: "warning",
        content: "Não dê cat em arquivos binários (imagem, vídeo, executável): a tela enche de caracteres estranhos e o terminal pode embaralhar. Se acontecer, digite 'reset' e Enter para normalizar.",
      },
      {
        type: "info",
        content: "O grep tem um primo mais rápido, o ripgrep. Instale com 'sudo apt install ripgrep' e use 'rg palavra' — absurdamente veloz em pastas com milhares de arquivos.",
      },
    ],
  },
  {
    slug: "processos-basicos",
    section: "terminal",
    title: "Vendo e controlando processos",
    difficulty: "iniciante",
    subtitle: "ps, top, htop, kill — quem está rodando e como parar sem reiniciar.",
    intro: `Tudo o que roda no Lubuntu — o navegador, o painel do LXQt, o terminal, até aquele programa que travou — é um **processo**. Cada um tem um número único, o **PID** (Process ID). É como a matrícula da escola: o sistema usa o PID para saber exatamente de quem você está falando quando pede para parar algo.

No terminal você vê os processos com \`ps\` (uma foto instantânea) ou com \`top\`/\`htop\` (lista viva, atualizando sozinha, como o Gerenciador de Tarefas do Windows). Quando algo trava, o roteiro é sempre o mesmo: descobrir o PID do programa-zumbi e mandar ele encerrar com \`kill\`.

Você pode mandar "sinais" diferentes a um processo. O educado é o **SIGTERM** (número 15): pede gentilmente para o programa salvar e sair. O ultimato é o **SIGKILL** (número 9): mata na hora, sem chance de salvar — use só quando o SIGTERM não resolver, porque encerrar à força pode deixar arquivos pela metade.

Este capítulo te poupa reinicializações. Em vez de desligar o PC toda vez que o navegador congela, você abre o terminal, acha o PID e encerra só aquele processo. O resto do sistema continua intacto.`,
    codes: [
      {
        lang: "bash",
        code: `# ps sem opções mostra só os processos do seu terminal atual:
ps
#   PID TTY          TIME CMD
#  3142 pts/0    00:00:00 bash
#  4501 pts/0    00:00:00 ps

# ps aux lista TODOS os processos, com uso de CPU e memória:
ps aux | head -n 3
# USER   PID %CPU %MEM    VSZ   RSS TTY  STAT START  TIME COMMAND
# root     1  0.0  0.1 167884 11384 ?   Ss   08:10  0:02 /sbin/init`,
      },
      {
        lang: "bash",
        code: `# Achar o PID de um programa específico:
ps aux | grep firefox
# bruno  4321  3.2  5.1 ... /usr/lib/firefox/firefox

# pgrep é mais limpo — devolve só o PID (ou o nome com -l):
pgrep -l firefox
# 4321 firefox`,
      },
      {
        lang: "bash",
        code: `# top = lista viva, ordenada por CPU (q para sair)
top
#   dentro dele:  M ordena por memória,  P por CPU,  k mata um PID,  q sai

# htop = versão colorida e amigável (recomendada):
sudo apt install htop -y
htop
#   setas navegam, F6 ordena, F9 mata (menu de sinais), F10 sai`,
      },
      {
        lang: "bash",
        code: `# kill encerra pelo PID. Primeiro o pedido educado (SIGTERM = 15):
kill 4321

# Se não responder, o ultimato (SIGKILL = 9):
kill -9 4321

# Erros comuns do kill:
kill 99999
# bash: kill: (99999) - No such process     -> esse PID não existe (confira)
kill 1
# bash: kill: (1) - Operation not permitted  -> processo de root; precisa de sudo`,
      },
      {
        lang: "bash",
        code: `# Matar pelo NOME (mais prático que decorar PID):
pkill firefox            # educado, todos os processos "firefox"
pkill -9 firefox         # à força
killall qterminal        # por nome exato do executável

# Quando o navegador trava, geralmente há vários processos dele;
# pkill -9 firefox encerra todos de uma vez.`,
      },
      {
        lang: "bash",
        code: `# Rodar em segundo plano com & (não prende o terminal):
featherpad &
# [1] 5678          -> número do job e PID

jobs                 # lista os jobs deste terminal
# [1]+  Running   featherpad &
fg %1                # traz o job de volta para a frente
# Ctrl+Z pausa o programa em execução; 'bg' o retoma em segundo plano.`,
      },
      {
        lang: "bash",
        code: `# Quem está pesando agora? (ótimo em PC leve)
ps aux --sort=-%mem | head -n 4    # top de memória
ps aux --sort=-%cpu | head -n 4    # top de CPU

free -h
#               total   usado   livre  compart.  buff/cache  disp.
# Mem.:         3,8Gi   440Mi   2,5Gi      18Mi       0,9Gi   3,1Gi
# Swap:         2,0Gi      0B   2,0Gi
# 440 MiB em repouso é o Lubuntu 26.04 típico.`,
      },
    ],
    points: [
      "Cada processo tem um PID único — é por ele que você identifica e controla.",
      "ps é uma foto instantânea; top/htop são a lista viva atualizando em tempo real.",
      "ps aux | grep nome (ou pgrep -l nome) é o jeito clássico de achar o PID.",
      "kill PID pede educado (SIGTERM/15); kill -9 PID força (SIGKILL/9) e só em último caso.",
      "pkill nome e killall nome encerram pelo nome, sem precisar do PID.",
      "\"No such process\" = PID não existe; \"Operation not permitted\" = processo de root, use sudo.",
      "programa & roda em segundo plano; jobs lista, fg traz de volta, Ctrl+Z pausa.",
      "Iniciante comum: já partir para kill -9 sem tentar o sinal padrão — pode corromper arquivos abertos.",
      "Iniciante comum: matar o PID errado — confirme com ps aux | grep nome antes de encerrar.",
      "free -h mostra RAM total, usada, livre e swap — a prova da leveza do Lubuntu.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Prefira o htop ao top: cores, navegação por setas, F9 com menu de sinais e uma barra por núcleo de CPU. Em PC antigo ajuda a enxergar o que está pesando.",
      },
      {
        type: "warning",
        content: "Não mate processos com PID baixo (abaixo de ~300) sem saber o que são: costumam ser do sistema. Encerrar um deles pode derrubar a sessão gráfica inteira.",
      },
      {
        type: "danger",
        content: "kill -9 1 tenta matar o PID 1 (init/systemd) e pode congelar ou reiniciar a máquina. Não faça isso nem 'para testar'.",
      },
      {
        type: "info",
        content: "Um programa 'sem responder' às vezes só está ocupado. Espere alguns segundos e tente o SIGTERM antes do SIGKILL — muitos aplicativos voltam sozinhos.",
      },
    ],
  },
  {
    slug: "pipes-redirecionamento",
    section: "terminal",
    title: "Pipes e redirecionamento",
    difficulty: "intermediario",
    subtitle: "Conectando comandos com | e salvando saída com > e >>.",
    intro: `A força do terminal Linux não está em comandos gigantes que fazem tudo, e sim em comandos pequenos que fazem uma coisa bem e se encaixam entre si. É como uma cozinha industrial: uma máquina descasca, outra corta, outra cozinha, outra tempera — você só liga em sequência.

A "cola" entre comandos é o **pipe**, o símbolo \`|\` (geralmente Shift + \\). Ele pega a saída de um comando e entrega como entrada do próximo. \`ls | grep .txt\` significa "liste a pasta e depois filtre só os .txt". \`ps aux | grep firefox | wc -l\` lista processos, filtra os do firefox e conta quantos são — três comandos simples, uma resposta específica.

Além do pipe, você pode **redirecionar** a saída para arquivo: \`>\` grava (apagando o que havia antes) e \`>>\` acrescenta ao fim. Para a entrada, \`<\` faz o contrário: lê um arquivo e entrega ao comando. E os erros têm um canal próprio, o **stderr** (descritor 2), redirecionado com \`2>\` — detalhe que confunde muita gente.

Este capítulo desbloqueia o jeito "Unix" de pensar: transforme um problema grande numa sequência de passos pequenos. Depois que isso entra na cabeça, você inventa pipelines úteis sozinho, todo dia.`,
    codes: [
      {
        lang: "bash",
        code: `# Pipe básico: a saída de um vira a entrada do outro
ls /etc | grep "conf"
# host.conf
# resolv.conf
# ...

# Encadeando três:
ls /etc | grep "conf" | wc -l
# 24        (quantos itens de /etc têm "conf" no nome)`,
      },
      {
        lang: "bash",
        code: `# Redirecionar a saída: > grava em arquivo (SUBSTITUI o conteúdo!)
ls ~ > lista.txt
cat lista.txt
# Documentos
# Downloads
# ...

# >> acrescenta ao fim (não apaga o que já existia):
date >> lista.txt
echo "fim" >> lista.txt`,
      },
      {
        lang: "bash",
        code: `# Pegadinha clássica: > sobrescreve sem avisar
echo "linha 1" > teste.txt
echo "linha 2" > teste.txt    # a "linha 1" foi embora!
cat teste.txt
# linha 2

# Para acumular, use SEMPRE >>:
echo "a" > acumula.txt
echo "b" >> acumula.txt
cat acumula.txt
# a
# b`,
      },
      {
        lang: "bash",
        code: `# Canal de erro separado (stderr = 2)
ls /pasta-inexistente
# ls: cannot access '/pasta-inexistente': No such file or directory

ls /pasta-inexistente 2> erros.log      # manda só o ERRO para arquivo
comando_qualquer > tudo.log 2>&1        # saída (1) e erro (2) juntos
comando_qualquer &> tudo.log            # forma curta e moderna do mesmo`,
      },
      {
        lang: "bash",
        code: `# Erro de permissão ao redirecionar para /etc — e a correção:
echo "nameserver 1.1.1.1" > /etc/resolv.conf
# bash: /etc/resolv.conf: Permission denied
#  -> o > é executado pelo SHELL (usuário comum), não pelo sudo.

# Correção: use 'sudo tee' (o tee escreve com privilégio):
echo "nameserver 1.1.1.1" | sudo tee -a /etc/resolv.conf
# tee -a acrescenta; sem o -a, ele sobrescreve.`,
      },
      {
        lang: "bash",
        code: `# tee = grava em arquivo E mostra na tela ao mesmo tempo
ls ~ | tee saida.txt
# aparece na tela e também salva em saida.txt
date | tee -a saida.txt     # -a acumula em vez de sobrescrever

# Entrada a partir de arquivo (<) e heredoc (<<):
sort < lista.txt            # ordena as linhas do arquivo
cat > config.ini <<'EOF'
[geral]
tema=escuro
EOF`,
      },
      {
        lang: "bash",
        code: `# Pipelines úteis do dia a dia:
ps aux --sort=-%mem | head -n 6            # top 5 de memória
grep -i error /var/log/syslog | tail -n 20 # últimos 20 erros do log
dpkg -l | grep -c '^ii'                    # quantos pacotes instalados
ls /usr/bin | wc -l                        # quantos programas em /usr/bin

# Dica: monte o pipeline aos poucos — rode um comando, veja a saída,
# adicione o próximo. Fica muito mais fácil de depurar.`,
      },
    ],
    points: [
      "O pipe | liga a saída de um comando à entrada do próximo — a base do estilo Unix.",
      "> grava em arquivo (apagando o conteúdo anterior); >> acrescenta ao fim.",
      "< lê um arquivo como entrada; heredoc (<<EOF ... EOF) injeta um bloco de texto.",
      "stdout (1) é a saída normal; stderr (2) é o canal de erros — são separados por padrão.",
      "2> redireciona só o erro; &> (ou > arq 2>&1) manda saída e erro para o mesmo lugar.",
      "'echo ... | sudo tee arquivo' resolve o \"Permission denied\" ao escrever em /etc (o > sozinho roda sem sudo).",
      "tee divide o fluxo: grava em arquivo e ainda mostra na tela (tee -a para acumular).",
      "Iniciante comum: usar > no lugar de >> e apagar sem querer o que estava no arquivo.",
      "Iniciante comum: esperar que o erro passe pelo pipe — o | só carrega o stdout, não o stderr.",
      "Pipelines pequenos e claros valem mais que um comando gigante: mais fáceis de ler e corrigir.",
    ],
    alerts: [
      {
        type: "warning",
        content: "'comando > arquivo' apaga o conteúdo do arquivo ANTES de rodar o comando — mesmo que o comando falhe e não gere nada. Na dúvida entre > e >>, prefira >>.",
      },
      {
        type: "tip",
        content: "Monte pipelines grandes por partes: rode o primeiro comando, veja a saída, acrescente o segundo, e assim por diante. Depurar um pipeline pronto de uma vez é bem mais difícil.",
      },
      {
        type: "info",
        content: "O nome tee vem do 'T' do encanamento: um fluxo que entra e sai por dois lados. Uma cópia vai para a tela, a outra para o arquivo — ótimo para logar enquanto acompanha.",
      },
      {
        type: "success",
        content: "Quando dominar pipes, você começa a escrever 'one-liners' que substituem scripts inteiros. É quase um esporte na comunidade Linux colecionar os melhores.",
      },
    ],
  },
  {
    slug: "sudo-seguranca",
    section: "terminal",
    title: "sudo e segurança básica",
    difficulty: "iniciante",
    subtitle: "Quando você precisa de poder de administrador e como não se cortar.",
    intro: `No Linux há uma separação clara entre o que você faz como usuário comum (mexer nos seus arquivos em \`/home\`) e o que exige permissão de administrador (instalar programa, alterar config do sistema, mexer em \`/etc\`). Isso não é frescura: é o que mantém o sistema seguro mesmo se você baixar algo suspeito — sem senha de admin, o estrago fica limitado à sua casa.

O \`sudo\` (do inglês "substitute user do") é o jeito moderno de elevar **só um comando** ao nível de administrador, sem ficar logado como root o tempo todo. Ao digitar \`sudo apt update\`, o sistema pede **a sua senha** (não uma senha separada de root), roda aquele comando com privilégio e pronto — você volta a ser usuário comum.

Dois detalhes que assustam iniciantes: enquanto você digita a senha, **nada aparece na tela** (nem asterisco) — é proposital, confie e digite. E a senha fica em cache por alguns minutos, então vários \`sudo\` seguidos não pedem senha de novo.

A regra de ouro: se você não entende o que aquele comando com sudo faz, **não rode**. Um \`sudo rm -rf /etc\` demole os ajustes do sistema inteiro. Sudo é poder — e poder pede leitura atenta antes do Enter. Vamos ver os usos legítimos e os erros mais comuns.`,
    codes: [
      {
        lang: "bash",
        code: `# Sem sudo: tudo dentro da sua casa /home/bruno
mkdir ~/minha_pasta
echo "ola" > ~/teste.txt

# Com sudo: o que mexe no sistema
sudo apt update
# [sudo] senha para bruno:        <- digite; a senha NÃO aparece
# ... listas de pacotes atualizadas`,
      },
      {
        lang: "bash",
        code: `# A pegadinha do redirecionamento (o erro mais comum com sudo):
echo "config nova" >> /etc/algum.conf
# bash: /etc/algum.conf: Permission denied
#  -> o >> é feito pelo shell (usuário comum), ANTES do comando rodar.

# Correção: sudo tee
echo "config nova" | sudo tee -a /etc/algum.conf > /dev/null
# (o > /dev/null só evita repetir o texto na tela)`,
      },
      {
        lang: "bash",
        code: `# Editar arquivo de sistema com editor:
sudo nano /etc/hosts
#   Ctrl+O salva   |   Ctrl+X sai

# Esqueceu o sudo? Não precisa redigitar tudo:
apt install htop
# E: Could not open lock file /var/lib/dpkg/lock-frontend - Permission denied
sudo !!
#  -> vira: sudo apt install htop`,
      },
      {
        lang: "bash",
        code: `# Ver o que você tem permissão de rodar com sudo:
sudo -l
# User bruno may run the following commands on meupc:
#     (ALL : ALL) ALL

# Erro de quem não está no grupo sudo:
sudo apt update
# bruno is not in the sudoers file. This incident will be reported.
#  -> esse usuário não pode usar sudo (veja como resolver abaixo).`,
      },
      {
        lang: "bash",
        code: `# Quem pode usar sudo está no grupo "sudo":
groups bruno
# bruno : bruno adm cdrom sudo dip plugdev lpadmin

# Adicionar outro usuário ao sudo (precisa já ter sudo):
sudo usermod -aG sudo maria
# Maria precisa sair e entrar de novo para o grupo valer.`,
      },
      {
        lang: "bash",
        code: `# Virar root por uma sessão inteira — use com parcimônia:
sudo -i
# root@meupc:~#      <- o # avisa que agora você é root
exit               # volta a ser usuário comum

# Prefira sudo pontual a 'sudo -i': menos chance de rodar algo perigoso por engano.`,
      },
      {
        lang: "bash",
        code: `# Boas práticas de segurança (decore estas):
# 1) Nunca rode sudo em comando que você não entende.
# 2) Prefira sudo pontual a virar root com sudo -i.
# 3) Leia o comando da esquerda para a direita antes do Enter.
# 4) Nunca instale com 'curl url | sudo bash' sem ler o script antes.
# 5) Para simular sem executar, ponha echo na frente:
echo sudo apt install pacote
# sudo apt install pacote     (só imprime, não roda)`,
      },
    ],
    points: [
      "sudo eleva só um comando ao nível root; ao terminar, você volta a usuário comum.",
      "A senha do sudo é a SUA senha — no Lubuntu padrão a conta root nem tem senha própria.",
      "Enquanto você digita a senha, nada aparece na tela. É de propósito; digite normalmente.",
      "'sudo !!' repete o último comando com sudo na frente — salva quando você esquece.",
      "'echo ... | sudo tee arquivo' é a forma certa de escrever em /etc (o > sozinho não herda o sudo).",
      "sudo -l mostra o que você pode rodar; \"is not in the sudoers file\" significa que a conta não tem sudo.",
      "Adicione alguém ao sudo com 'sudo usermod -aG sudo usuário' (ele precisa relogar).",
      "Iniciante comum: jogar sudo em qualquer erro de permissão sem entender — leia a mensagem antes.",
      "Iniciante comum: colar 'curl url | sudo bash' de blogs — isso roda código desconhecido como root.",
      "sudo -i abre sessão root inteira (prompt com #); use só quando realmente precisar.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca rode 'sudo rm -rf /' nem variações. Apaga o sistema operacional inteiro. Desconfie de 'soluções' de fóruns que escondem esse comando em código hexadecimal/decimal.",
      },
      {
        type: "warning",
        content: "Não instale software com 'curl url | sudo bash' sem ler o script antes. Você estaria dando privilégio de root a um código que nunca viu.",
      },
      {
        type: "tip",
        content: "Antes de rodar um comando com sudo que veio de fora, cole-o com 'echo' na frente para só imprimir. Se fizer sentido, tire o echo e rode de verdade.",
      },
      {
        type: "info",
        content: "A senha do sudo fica em cache por alguns minutos no terminal atual. Por isso vários sudo seguidos só pedem a senha uma vez.",
      },
    ],
  },
  {
    slug: "atalhos-bash",
    section: "terminal",
    title: "Atalhos do bash que aceleram tudo",
    difficulty: "iniciante",
    subtitle: "Tab, histórico, Ctrl+R, movimentos do cursor e aliases.",
    intro: `O bash tem dezenas de atalhos pequenos que, somados, multiplicam sua velocidade. Quase todo mundo aprende dois ou três no primeiro dia (Tab e seta para cima) e para por aí. É uma pena, porque os outros já vêm de graça e economizam horas por mês.

Pense no bash como um piano: cada atalho é uma nota. Tab completa nomes (a nota central), a seta para cima resgata o último comando, \`Ctrl+R\` busca no histórico (a virada de chave para parar de redigitar), \`Ctrl+A\` vai ao início da linha e \`Ctrl+E\` ao fim. Em duas semanas de prática, esses gestos viram automáticos.

Os melhores atalhos evitam redigitar. \`!!\` repete o último comando, \`!apt\` repete o último que começava com "apt", \`!$\` reaproveita o último argumento. Quando você escreve um comando longo e erra uma letra no meio, navega até lá com \`Ctrl+seta\` e corrige no lugar, em vez de apagar tudo.

Este capítulo fecha a trilha de terminal trazendo agilidade. Você já sabe navegar, manipular, ler, controlar processos, encanar comandos com pipe e usar sudo. Agora vai fazer tudo isso no dobro da velocidade — e criar seus próprios atalhos permanentes com aliases.`,
    codes: [
      {
        lang: "bash",
        code: `# Tab completion: completa comando, arquivo e pasta
cd Doc<Tab>            # -> cd Documentos/
sudo apt inst<Tab>     # -> sudo apt install
ls /et<Tab>            # -> ls /etc/

# Tab DUAS vezes lista as opções quando há mais de uma:
ls ~/D<Tab><Tab>
# Documentos/  Downloads/`,
      },
      {
        lang: "bash",
        code: `# Histórico de comandos:
history          # últimos comandos, numerados
history 15       # só os 15 últimos

!42              # roda o comando de número 42 do history
!!               # repete o ÚLTIMO comando
!apt             # repete o último que começava com "apt"
!?install        # repete o último que continha "install"`,
      },
      {
        lang: "bash",
        code: `# Ctrl+R = busca interativa no histórico (o atalho que muda tudo)
# Aperte Ctrl+R e comece a digitar parte do comando:
# (reverse-i-search)\`apt\`: sudo apt install htop
#   Enter executa | seta edita antes | Ctrl+R de novo busca o anterior | Ctrl+G cancela`,
      },
      {
        lang: "bash",
        code: `# Reaproveitar pedaços do comando anterior:
ls ~/Documentos/relatorio.pdf
xdg-open !$
#  -> !$ vira o último argumento: xdg-open ~/Documentos/relatorio.pdf

mkdir -p ~/projetos/site
cd !$
#  -> cd ~/projetos/site`,
      },
      {
        lang: "bash",
        code: `# Mover o cursor e apagar trechos sem usar seta letra por letra:
#   Ctrl+A  início da linha     Ctrl+E  fim da linha
#   Alt+B   uma palavra atrás    Alt+F   uma palavra à frente
#   Ctrl+U  apaga até o início   Ctrl+K  apaga até o fim
#   Ctrl+W  apaga uma palavra    Ctrl+Y  cola o que você cortou
#   Ctrl+L  limpa a tela (mantém o que já digitou na linha)`,
      },
      {
        lang: "bash",
        code: `# Controle da execução:
#   Ctrl+C  interrompe o comando que está rodando
#   Ctrl+D  sai do shell (igual a exit)
#   Ctrl+Z  pausa o comando (retoma em segundo plano com bg, ou à frente com fg)

sleep 60
# ^C          <- Ctrl+C cancela o sleep imediatamente`,
      },
      {
        lang: "bash",
        code: `# Aliases: seus atalhos permanentes no ~/.bashrc
echo "alias ll='ls -lhA'" >> ~/.bashrc
echo "alias ..='cd ..'"   >> ~/.bashrc
echo "alias update='sudo apt update && sudo apt upgrade'" >> ~/.bashrc
source ~/.bashrc          # recarrega para valer agora
ll                        # já funciona

# Guardar data/hora no histórico (útil para lembrar quando rodou algo):
echo 'export HISTTIMEFORMAT="%d/%m %H:%M  "' >> ~/.bashrc`,
      },
    ],
    points: [
      "Tab completa nomes; Tab Tab lista as opções quando há mais de uma.",
      "Seta para cima/baixo percorre o histórico; Ctrl+R faz busca interativa nele.",
      "!! repete o último comando; !$ reaproveita o último argumento; !apt repete o último que começava com \"apt\".",
      "Ctrl+A vai ao início, Ctrl+E ao fim; Alt+B/Alt+F andam palavra por palavra.",
      "Ctrl+U apaga até o início, Ctrl+K até o fim, Ctrl+W uma palavra atrás, Ctrl+Y cola de volta.",
      "Ctrl+C interrompe o comando atual; Ctrl+Z pausa; Ctrl+L limpa a tela sem perder a linha.",
      "Aliases no ~/.bashrc criam atalhos permanentes; rode source ~/.bashrc para aplicar na hora.",
      "Iniciante comum: redigitar comandos longos em vez de usar a seta para cima ou o Ctrl+R.",
      "Iniciante comum: nunca abrir o ~/.bashrc para criar aliases — perde o maior ganho de produtividade.",
      "HISTTIMEFORMAT guarda data/hora de cada comando no histórico — bom para auditar o que você fez.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Treine o Ctrl+R de propósito por uma semana. Em uns 10 dias vira memória muscular: você nem pensa, já está buscando o comando antigo em vez de redigitar.",
      },
      {
        type: "info",
        content: "O histórico é salvo em ~/.bash_history ao sair do shell. Aumente o tamanho com HISTSIZE=10000 e HISTFILESIZE=20000 no ~/.bashrc.",
      },
      {
        type: "warning",
        content: "Comandos com senha ficam registrados no histórico. Comece a linha com um espaço para o bash ignorá-la (funciona com HISTCONTROL=ignorespace, padrão no Ubuntu).",
      },
      {
        type: "success",
        content: "Aliases pessoais são a marca de quem usa Linux há tempo. Comece com ll='ls -lhA', ..='cd ..' e update='sudo apt update && sudo apt upgrade'. Logo você terá dezenas.",
      },
    ],
  },
];
