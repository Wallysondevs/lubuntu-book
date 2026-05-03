import type { Chapter } from "../types";

export const chapters: Chapter[] = [
  {
    slug: "abrir-terminal",
    section: "terminal",
    title: "Abrindo o terminal pela primeira vez",
    difficulty: "iniciante",
    subtitle: "Conhecendo o QTerminal e perdendo o medo da tela preta.",
    intro: `O terminal é uma janelinha que parece assustadora: fundo preto (ou branco, dependendo do tema), letras monoespaçadas, e nada de botões para clicar. Pense nele como a recepção de um hotel onde você fala diretamente com o gerente, em vez de mexer em painéis e menus. Tudo o que o Lubuntu sabe fazer, você pode pedir digitando.

No Lubuntu, o terminal padrão se chama QTerminal. Ele é leve (combinando com a filosofia do sistema), suporta abas, divisão de tela e atalhos do teclado. Você pode abri-lo pelo menu de aplicações em Sistema > QTerminal, ou usando o atalho de teclado Ctrl + Alt + T se estiver configurado.

Antes de digitar qualquer coisa, vale entender o que você está vendo. Aparece algo como \`bruno@meupc:~$\`. Esse é o "prompt": o nome do seu usuário, um @, o nome do computador, dois pontos, a pasta atual (\`~\` é seu diretório pessoal) e o cifrão indicando que está pronto. Quando aparece \`#\` em vez de \`$\`, atenção: você está como root (administrador) — pode quebrar o sistema com um comando errado.

Neste capítulo você vai abrir o terminal, identificar cada parte do prompt, executar seus primeiros comandos inofensivos e configurar o QTerminal do jeito que te agrada. Daqui em diante, todo capítulo desta seção depende deste alicerce.`,
    codes: [
      {
        lang: "bash",
        code: `# Abrindo o terminal pelo menu:
# Menu (canto inferior esquerdo) > Sistema > QTerminal

# Ou pelo atalho de teclado padrão do Lubuntu:
# Ctrl + Alt + T

# Já dentro do terminal, seus primeiros comandos inofensivos:
whoami        # mostra o seu nome de usuário
# saída: bruno
hostname      # mostra o nome do computador
# saída: meupc
date          # mostra data e hora atuais
# saída: Qua 13 Nov 2024 14:32:10 -03`,
      },
      {
        lang: "bash",
        code: `# Entendendo o prompt: bruno@meupc:~$
#   bruno  -> seu usuário
#   meupc  -> nome do computador (hostname)
#   ~      -> pasta atual (~ é atalho para /home/bruno)
#   $      -> usuario comum; # seria root (admin)

# Veja em qual pasta você está:
pwd
# saída: /home/bruno`,
      },
      {
        lang: "bash",
        code: `# Limpando a tela quando ficar bagunçada:
clear
# ou aperte: Ctrl + L

# Saindo do terminal:
exit
# ou aperte: Ctrl + D
# A janela fecha sozinha.`,
      },
      {
        lang: "bash",
        code: `# Abrindo várias abas no QTerminal sem abrir várias janelas
# Atalho: Ctrl + Shift + T  -> nova aba
# Atalho: Ctrl + Tab        -> alterna entre abas
# Atalho: Ctrl + Shift + W  -> fecha a aba atual

# Dividindo a janela em duas (split):
# Menu: File > Split Terminal Horizontally / Vertically`,
      },
      {
        lang: "bash",
        code: `# Aumentando e diminuindo a fonte (útil para apresentações)
# Ctrl + +   -> aumenta
# Ctrl + -   -> diminui
# Ctrl + 0   -> volta ao tamanho padrao

# Copiar e colar dentro do terminal NAO usa Ctrl+C/V (eles tem outro sentido)
# Use:
#   Ctrl + Shift + C   -> copiar
#   Ctrl + Shift + V   -> colar`,
      },
      {
        lang: "bash",
        code: `# Procurando ajuda sobre qualquer comando
man ls          # abre o manual do comando ls (q para sair)
ls --help       # ajuda resumida, mostra opcoes principais
help cd         # ajuda para comandos internos do bash (cd, pwd, etc.)`,
      },
    ],
    points: [
      "QTerminal e o terminal padrao do Lubuntu; abra em Sistema > QTerminal ou Ctrl+Alt+T.",
      "O prompt mostra usuario@maquina:pasta$ — leia da esquerda para a direita.",
      "$ no fim do prompt = usuario comum; # = root (cuidado redobrado).",
      "pwd diz onde voce esta; whoami diz quem voce e; hostname diz qual a maquina.",
      "Ctrl+L (ou clear) limpa a tela; Ctrl+D (ou exit) fecha o terminal.",
      "Para copiar e colar use Ctrl+Shift+C e Ctrl+Shift+V (sem o Shift tem outro efeito).",
      "Iniciante comum: digitar comando achando que esta no Word — terminal nao tem autocorretor; um espaco a mais quebra tudo.",
      "Iniciante comum: ver o # no prompt e nao perceber que esta como root — confira sempre antes de rodar coisa pesada.",
      "man comando abre o manual completo; comando --help mostra um resumo rapido.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Configure o QTerminal em Settings > Preferences. Aumente a fonte para 12 ou 14, escolha um tema escuro para cansar menos a vista e ative 'Open new tabs adjacent to current'.",
      },
      {
        type: "info",
        content: "Se o atalho Ctrl+Alt+T nao abrir o terminal, va em Configuracoes > Atalhos e adicione manualmente: comando 'qterminal' com a combinacao desejada.",
      },
      {
        type: "warning",
        content: "Nao copie e cole comandos longos de sites desconhecidos sem ler antes. Existe truque malicioso onde o que voce ve nao e o que vai colar.",
      },
      {
        type: "success",
        content: "Adquira o habito de abrir o terminal pelo menos uma vez por dia. Em duas semanas voce ja vai preferir a velocidade dele para varias tarefas.",
      },
    ],
  },
  {
    slug: "navegacao-pastas",
    section: "terminal",
    title: "Navegando pelas pastas",
    difficulty: "iniciante",
    subtitle: "cd, ls, pwd e o mapa do sistema de arquivos do Linux.",
    intro: `Imagine o sistema de arquivos do Linux como um predio gigante. Na portaria fica a raiz, representada por uma simples barra \`/\`. A partir dali saem corredores: \`/home\` onde moram as pessoas, \`/etc\` onde ficam os manuais de configuracao, \`/usr\` com os programas instalados, \`/var\` onde o sistema anota suas atividades. Voce, no terminal, e como uma pessoa andando por esse predio.

Para se mover, usamos tres comandos basicos: \`pwd\` para saber em que andar voce esta, \`ls\` para olhar o que tem no andar, e \`cd\` para subir de elevador para outro lugar. Esses tres ja resolvem 80% da navegacao do dia a dia.

Tem dois tipos de "endereco": o caminho absoluto, comecando do \`/\` raiz (\`/home/bruno/Documentos\`), e o caminho relativo, partindo de onde voce esta (\`Documentos\` se ja estiver em \`/home/bruno\`). Atalhos uteis: \`~\` significa sua casa (\`/home/bruno\`), \`.\` e a pasta atual, e \`..\` e a pasta de cima.

Com pratica, voce acha qualquer arquivo no terminal mais rapido do que clicando no gerenciador. E quando precisar acessar a maquina pela rede via SSH (capitulo de Rede), so vai ter o terminal — entao melhor dominar logo.`,
    codes: [
      {
        lang: "bash",
        code: `# Onde estou agora?
pwd
# saida: /home/bruno

# O que tem aqui?
ls
# saida: Documentos  Downloads  Imagens  Musica  Videos`,
      },
      {
        lang: "bash",
        code: `# Listagem detalhada com permissoes, tamanho e data
ls -l
# saida (resumida):
# drwxr-xr-x 2 bruno bruno 4096 Nov 10 09:12 Documentos
# -rw-r--r-- 1 bruno bruno 1234 Nov 12 14:00 notas.txt

# Mostrando arquivos ocultos (que comecam com .)
ls -la

# Tamanho legivel para humanos (KB, MB, GB)
ls -lh`,
      },
      {
        lang: "bash",
        code: `# Mudando de pasta (cd = change directory)
cd Documentos        # entra em ./Documentos (relativo)
pwd                  # /home/bruno/Documentos

cd /etc              # caminho absoluto
pwd                  # /etc

cd ~                 # volta para sua casa (/home/bruno)
cd                   # mesma coisa, sem argumento

cd -                 # volta para a pasta anterior (truque util!)`,
      },
      {
        lang: "bash",
        code: `# Atalhos de caminho
.       # pasta atual
..      # pasta de cima (pai)
~       # sua casa, equivale a /home/seu-usuario
/       # raiz do sistema

# Subindo um nivel:
cd ..

# Subindo dois niveis:
cd ../..

# Indo para a raiz:
cd /`,
      },
      {
        lang: "bash",
        code: `# Tab completion: o terminal completa nomes para voce
# Comece a digitar e aperte Tab. Se houver duvida, aperte Tab duas vezes.
cd Doc<Tab>          # vira: cd Documentos/
ls /et<Tab>          # vira: ls /etc/

# Isso evita 90% dos erros de digitacao.`,
      },
      {
        lang: "bash",
        code: `# Grandes pastas do sistema Linux:
ls /         # mostra:
# bin   etc   home   lib   opt   root  sbin  tmp   usr   var
# bin/sbin -> programas essenciais
# etc      -> configuracoes do sistema
# home     -> pastas dos usuarios
# tmp      -> temporario, sumira no proximo boot
# usr      -> programas instalados pelo gerenciador de pacotes
# var      -> logs, caches, banco de dados`,
      },
      {
        lang: "bash",
        code: `# Mostrando a arvore de pastas (precisa instalar tree):
sudo apt install tree -y
tree -L 2 ~/Documentos
# saida (exemplo):
# /home/bruno/Documentos
# |-- contas
# |   \`-- janeiro.pdf
# \`-- estudos
#     \`-- linux.txt`,
      },
    ],
    points: [
      "pwd mostra o caminho atual; ls lista; cd entra em outra pasta.",
      "Caminho absoluto comeca em /, relativo parte de onde voce esta agora.",
      "~ e atalho para /home/seu-usuario; .. sobe um nivel; . e a pasta atual.",
      "ls -lh mostra detalhes com tamanhos legiveis; ls -la inclui ocultos.",
      "Aperte Tab para completar nomes — economiza tempo e evita erro de digitacao.",
      "cd - leva voce de volta para a ultima pasta visitada (alterna entre duas).",
      "Iniciante comum: confundir cd ~ (sua casa) com cd / (raiz do sistema).",
      "Iniciante comum: tentar digitar caminho com barra invertida \\ no estilo Windows; no Linux e barra normal /.",
      "Pastas como /etc, /var e /usr sao do sistema — entre para olhar, mas pense duas vezes antes de mudar.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Aprenda os atalhos cd .. (sobe um nivel), cd - (volta uma) e cd ~ (vai pra casa). Eles aparecem em cada sessao do terminal.",
      },
      {
        type: "info",
        content: "Arquivos que comecam com . (ponto) sao 'ocultos' por convencao — geralmente sao configuracoes. Use ls -a para ve-los.",
      },
      {
        type: "warning",
        content: "Nao confunda / (raiz, no inicio) com / (separador entre pastas). cd / leva para a raiz; cd /home/bruno e um caminho absoluto ate sua casa.",
      },
    ],
  },
  {
    slug: "manipular-arquivos",
    section: "terminal",
    title: "Criando, copiando e movendo arquivos",
    difficulty: "iniciante",
    subtitle: "mkdir, touch, cp, mv, rm — o quarteto do dia a dia.",
    intro: `Depois de aprender a andar pelas pastas, voce vai querer mexer no que tem dentro delas: criar arquivos novos, organizar em pastas, copiar para backup, mover para outro lugar e — com cuidado — apagar o que nao serve mais. Esses comandos sao o equivalente do "novo arquivo, recortar, colar e deletar" do gerenciador grafico, mas mais rapidos e roteirizaveis.

A pegadinha do Linux e: nao existe "lixeira" no terminal. Quando voce apaga com \`rm\`, o arquivo vai embora de verdade, na hora, sem confirmacao. Por isso, antes de executar um \`rm\` qualquer, leia o comando duas vezes. Tem ate uma piada classica: \`rm -rf /\` apaga o sistema todo.

Os quatro pilares deste capitulo sao: \`mkdir\` para criar pastas, \`touch\` para criar arquivos vazios, \`cp\` para copiar, \`mv\` para mover ou renomear (e a mesma operacao!) e \`rm\` para apagar. Combinados com os atalhos de caminho que voce aprendeu (\`~\`, \`..\`, \`.\`), eles cobrem praticamente toda manipulacao basica.

Antes de seguir, fique tranquilo: vamos sempre testar em uma pasta de brincadeira (\`~/sandbox\`) para nao destruir nada de verdade. Adquira o habito de criar uma pasta assim quando for testar comandos novos.`,
    codes: [
      {
        lang: "bash",
        code: `# Cria uma pasta de testes para nao mexer em arquivos reais
mkdir ~/sandbox
cd ~/sandbox
pwd
# saida: /home/bruno/sandbox

# Criando varios arquivos vazios de uma vez
touch nota.txt receita.txt lista.txt
ls
# saida: lista.txt  nota.txt  receita.txt`,
      },
      {
        lang: "bash",
        code: `# Criando varias pastas de uma vez (-p cria as intermediarias)
mkdir -p projeto/codigo/python
mkdir -p projeto/docs

# Conferindo a arvore (se tiver tree instalado)
tree projeto
# projeto
# |-- codigo
# |   \`-- python
# \`-- docs`,
      },
      {
        lang: "bash",
        code: `# Copiando arquivos: cp origem destino
cp nota.txt nota_backup.txt
ls
# lista.txt  nota_backup.txt  nota.txt  receita.txt

# Copiando para outra pasta
cp receita.txt projeto/docs/

# Copiando uma pasta inteira (recursivo, -r):
cp -r projeto projeto-copia`,
      },
      {
        lang: "bash",
        code: `# Movendo arquivos (e a mesma coisa que renomear!)
mv lista.txt compras.txt   # renomeia: lista.txt -> compras.txt
ls
# compras.txt  nota_backup.txt  nota.txt  receita.txt

# Movendo para outra pasta:
mv compras.txt projeto/docs/

# Movendo uma pasta:
mv projeto-copia ~/Documentos/`,
      },
      {
        lang: "bash",
        code: `# Apagando arquivos (CUIDADO: nao tem lixeira!)
rm nota_backup.txt
ls
# (nota_backup.txt sumiu)

# Apagando varios de uma vez:
rm receita.txt nota.txt

# Apagando uma pasta vazia:
rmdir projeto/docs/cache  # so funciona se estiver vazia

# Apagando pasta com tudo dentro (recursivo + force):
rm -rf projeto/docs   # apaga sem perguntar — TENHA CERTEZA`,
      },
      {
        lang: "bash",
        code: `# Pedindo confirmacao antes de apagar (rede de seguranca)
rm -i compras.txt
# rm: remove regular file 'compras.txt'? y    (digite y para sim, n para nao)

# Dica: crie um alias permanente no ~/.bashrc para sempre perguntar
echo "alias rm='rm -i'" >> ~/.bashrc
source ~/.bashrc`,
      },
      {
        lang: "bash",
        code: `# Wildcards (curingas): selecionando varios arquivos por padrao
touch foto1.jpg foto2.jpg foto3.jpg doc.pdf

ls *.jpg          # so as fotos: foto1.jpg foto2.jpg foto3.jpg
rm *.jpg          # apaga todas as .jpg de uma vez
ls foto?.jpg      # ? casa um caractere; nada mais sobrou aqui`,
      },
    ],
    points: [
      "mkdir cria pastas; mkdir -p cria toda a arvore intermediaria.",
      "touch cria arquivo vazio (e atualiza data de modificacao se ja existir).",
      "cp copia, mv move/renomeia (e a mesma operacao no Linux), rm apaga.",
      "Para pastas use cp -r e rm -r (r de recursivo).",
      "Wildcards: * casa qualquer coisa, ? casa um caractere — economizam digitacao.",
      "rm -i pergunta antes de apagar; bom alias para iniciantes ate pegar o jeito.",
      "Iniciante comum: rodar rm -rf na pasta errada — sempre confira pwd antes.",
      "Iniciante comum: esquecer o -r ao copiar/apagar pasta e ver 'is a directory'.",
      "Nao existe lixeira no terminal: apagou com rm, foi embora de vez.",
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca rode 'rm -rf /' nem 'rm -rf /*' nem 'rm -rf $VARIAVEL/' (se a variavel estiver vazia, apaga raiz). Esse e o comando que destroi sistema mais classico do Linux.",
      },
      {
        type: "warning",
        content: "Antes de qualquer rm com wildcard, troque por ls primeiro. Por exemplo: ls *.tmp mostra o que SERIA apagado. So depois substitua o ls por rm.",
      },
      {
        type: "tip",
        content: "Para realmente ter lixeira no terminal, instale o pacote trash-cli e use trash-put no lugar de rm. Ele manda para a Lixeira do LXQt e da pra recuperar.",
      },
      {
        type: "info",
        content: "mv entre pastas no mesmo disco e instantaneo (so muda o registro). Entre discos diferentes, ele copia e depois apaga — pode demorar.",
      },
    ],
  },
  {
    slug: "ver-arquivos",
    section: "terminal",
    title: "Lendo o conteudo dos arquivos",
    difficulty: "iniciante",
    subtitle: "cat, less, head, tail, grep — espiando textos sem abrir editor.",
    intro: `Boa parte dos arquivos importantes no Linux sao texto puro: configuracoes, logs, scripts, listas. Para ler rapido, voce nao precisa abrir um editor pesado — o terminal tem ferramentas dedicadas a "olhar". Cada uma serve para um tamanho de arquivo e um objetivo diferente.

Pense assim: \`cat\` e o despejo (joga tudo na tela de uma vez, bom para arquivos pequenos), \`less\` e o leitor de PDF (paginavel, voce navega com setas), \`head\` mostra so as primeiras linhas (bom para conferir um cabecalho de CSV) e \`tail\` mostra so as ultimas (bom para ver o que acabou de acontecer num log).

Tem ainda o \`grep\`, o detetive da turma. Ele procura uma palavra dentro de um arquivo (ou varios) e mostra so as linhas que casam. Quando combinado com pipe (capitulo seguinte), grep vira sua melhor amiga em qualquer investigacao.

Esses cinco comandos resolvem inspecao do dia a dia: ler config de Wi-Fi, conferir o que rodou no apt-get, verificar log de erro, achar onde tem uma palavra especifica em uma pasta com 200 arquivos. E tudo sem nunca abrir o gerenciador grafico.`,
    codes: [
      {
        lang: "bash",
        code: `# Vamos preparar um arquivo de exemplo
cd ~/sandbox
cat > poema.txt <<'EOF'
Linha um: bom dia
Linha dois: bom dia ainda
Linha tres: oi tarde
Linha quatro: boa noite
Linha cinco: ate amanha
EOF
# (o <<'EOF' vai te ensinar mais a fundo no proximo capitulo)`,
      },
      {
        lang: "bash",
        code: `# cat = mostra o arquivo inteiro de uma vez
cat poema.txt
# Linha um: bom dia
# Linha dois: bom dia ainda
# Linha tres: oi tarde
# Linha quatro: boa noite
# Linha cinco: ate amanha

# Bom para arquivos pequenos (ate ~50 linhas).
# Em arquivos gigantes, ele rola tudo e voce nao consegue ler.`,
      },
      {
        lang: "bash",
        code: `# less = leitor paginavel; ideal para arquivos grandes
less /var/log/syslog
# Setas para navegar, /palavra para buscar, q para sair.
# Comandos uteis dentro do less:
#   espaco -> proxima pagina
#   b      -> pagina anterior
#   g      -> ir para o inicio
#   G      -> ir para o final
#   /erro  -> busca a palavra "erro"
#   q      -> sair`,
      },
      {
        lang: "bash",
        code: `# head = primeiras linhas (padrao 10)
head poema.txt
head -n 2 poema.txt    # so as 2 primeiras linhas

# tail = ultimas linhas
tail poema.txt
tail -n 1 poema.txt    # so a ultima linha

# tail -f = ACOMPANHA o arquivo em tempo real (otimo para logs)
tail -f /var/log/syslog
# Pressione Ctrl+C para parar de seguir.`,
      },
      {
        lang: "bash",
        code: `# grep = procura uma palavra dentro do arquivo
grep "bom" poema.txt
# Linha um: bom dia
# Linha dois: bom dia ainda

grep -i "BOM" poema.txt    # -i = ignora maiusculas/minusculas
grep -n "bom" poema.txt    # -n = mostra numero da linha
# 1:Linha um: bom dia
# 2:Linha dois: bom dia ainda`,
      },
      {
        lang: "bash",
        code: `# grep recursivo: procura dentro de uma pasta inteira
grep -r "ip_address" /etc/network/
# Mostra arquivo:linha para cada ocorrencia.

# Excluindo arquivos binarios (recomendado):
grep -rI "TODO" ~/projetos

# Mostrando so o nome do arquivo (sem o conteudo):
grep -rl "senha" ~/configs`,
      },
      {
        lang: "bash",
        code: `# wc = conta linhas, palavras e caracteres
wc poema.txt
# saida: 5  20 110 poema.txt    -> linhas, palavras, bytes

wc -l poema.txt    # so o numero de linhas: 5

# Combo classico: quantas linhas de log tem 'error'?
grep -i error /var/log/syslog | wc -l
# (esse | e o pipe — proximo capitulo)`,
      },
    ],
    points: [
      "cat e bom para arquivos pequenos; less para grandes (paginavel).",
      "head mostra o comeco, tail mostra o fim; -n N controla quantas linhas.",
      "tail -f acompanha um arquivo em tempo real — ideal para logs ao vivo.",
      "grep procura palavra; -i ignora caso, -n mostra linha, -r busca em pasta.",
      "Dentro do less: barra (/) busca, q sai, g vai ao inicio, G ao fim.",
      "wc -l conta linhas; combinado com grep e pipe vira contagem rapida.",
      "Iniciante comum: dar cat em arquivo gigante e travar o terminal — use less em duvida.",
      "Iniciante comum: esquecer aspas em grep com palavras com espaco (grep 'bom dia' arquivo).",
      "Esses comandos so 'leem'; nunca alteram o arquivo (seguros para usar a vontade).",
    ],
    alerts: [
      {
        type: "tip",
        content: "Use 'less +F arquivo.log' para abrir um log e ja ficar acompanhando como se fosse tail -f. Aperte Ctrl+C para parar e navegar normalmente.",
      },
      {
        type: "warning",
        content: "Nao de cat em arquivos binarios (imagem, video, executavel) — voce vai ver caracteres estranhos e o terminal pode embaralhar. Se acontecer, digite 'reset' e Enter.",
      },
      {
        type: "info",
        content: "O grep tem um irmao mais rapido chamado ripgrep (rg). Instale com 'sudo apt install ripgrep' e use 'rg palavra' — rapido absurdo em pastas com milhares de arquivos.",
      },
    ],
  },
  {
    slug: "processos-basicos",
    section: "terminal",
    title: "Vendo e controlando processos",
    difficulty: "iniciante",
    subtitle: "ps, top, htop, kill — quem esta rodando e como parar.",
    intro: `Tudo o que esta rodando no seu Lubuntu — o navegador, o terminal, o painel do LXQt, ate aquele programa que travou — e um processo. Cada processo tem um numero unico chamado PID (Process ID). E como o numero de matricula da escola: serve para o sistema operacional saber exatamente de quem esta falando.

No terminal, voce ve a lista de processos com \`ps\` (instantaneo, snapshot) ou com \`top\`/\`htop\` (atualizando em tempo real, como o Gerenciador de Tarefas do Windows). Quando algo trava, o caminho e: descobrir o PID do programa zumbi e mandar ele encerrar com \`kill\`.

Existem varios "sinais" que voce pode mandar a um processo. O educado e o SIGTERM (numero 15), que pede gentilmente para o programa salvar e sair. O ultimato e o SIGKILL (numero 9), que mata na hora sem dar chance de salvar nada — use so quando o SIGTERM nao funciona.

Este capitulo te poupa muitas reinicializacoes. Em vez de desligar o computador toda vez que o navegador trava, voce abre o terminal, descobre o PID dele e termina so esse processo. O resto do sistema continua intacto.`,
    codes: [
      {
        lang: "bash",
        code: `# ps = lista processos. Sem opcoes, mostra so os seus, do shell atual.
ps
#   PID TTY          TIME CMD
#  3142 pts/0    00:00:00 bash
#  4501 pts/0    00:00:00 ps

# Lista TODOS os processos, com mais detalhes
ps aux
# Mostra: USER  PID  %CPU %MEM  COMMAND ...
# (sao centenas de linhas; combine com less ou grep)`,
      },
      {
        lang: "bash",
        code: `# Procurando um processo especifico
ps aux | grep firefox
# bruno  4321  3.2  5.1  ...  /usr/lib/firefox/firefox

# pgrep e mais limpo: so devolve o PID
pgrep firefox
# 4321
pgrep -l firefox    # com nome:  4321 firefox`,
      },
      {
        lang: "bash",
        code: `# top = lista atualizada em tempo real (q para sair)
top
# Mostra ordenado por uso de CPU.
# Apertando M (maiuscula) ordena por memoria.
# Apertando k voce mata um processo (digita o PID).

# htop = versao colorida e mais amigavel (instale antes)
sudo apt install htop -y
htop
# Setas para navegar, F9 para matar, F10 para sair.`,
      },
      {
        lang: "bash",
        code: `# kill = encerra processo pelo PID
# Pedido educado (SIGTERM = 15): salva e sai
kill 4321

# Se nao responder, ultimato (SIGKILL = 9): morre na hora
kill -9 4321

# pkill = mata pelo nome (mais pratico)
pkill firefox          # pede educado
pkill -9 firefox       # forca`,
      },
      {
        lang: "bash",
        code: `# killall = parecido com pkill, mata por nome exato
killall firefox-bin

# Util quando o processo abriu varias copias.
# Cuidado: 'killall' no FreeBSD tem outro sentido (mata tudo).
# No Linux/Lubuntu e seguro.`,
      },
      {
        lang: "bash",
        code: `# Rodando programa em segundo plano com & (nao prende o terminal)
gedit &
# [1] 5678   <- numero do job e PID

# Vendo jobs do shell atual
jobs
# [1]+  Running   gedit &

# Trazendo de volta para frente
fg %1

# Mandando o que ja esta rodando para tras (Ctrl+Z pausa, depois bg)
# Ctrl+Z   -> pausa
# bg       -> continua em background`,
      },
      {
        lang: "bash",
        code: `# Quem esta usando muita memoria agora?
ps aux --sort=-%mem | head -n 5

# Quem esta usando muita CPU?
ps aux --sort=-%cpu | head -n 5

# Quanta memoria livre tenho?
free -h
#               total   usado   livre  comp.  cache  disp.
# Mem.:         3,8Gi   1,2Gi   1,1Gi   45Mi   1,5Gi  2,5Gi
# Swap:         2,0Gi      0B   2,0Gi`,
      },
    ],
    points: [
      "Cada processo tem um PID unico — e por ele que voce identifica e controla.",
      "ps mostra um snapshot; top/htop mostram lista viva atualizada.",
      "ps aux | grep nome e o jeito classico de achar o PID.",
      "kill PID pede educado (SIGTERM); kill -9 PID forca (SIGKILL).",
      "pkill nome e killall nome matam pelo nome em vez de PID.",
      "Programa & roda em segundo plano; jobs lista; fg traz de volta.",
      "Iniciante comum: ja sair com kill -9 sem tentar o sinal padrao primeiro — pode corromper arquivos abertos.",
      "Iniciante comum: matar o processo errado por PID — sempre confirme com 'ps aux | grep nome' antes.",
      "free -h mostra quanto de RAM esta livre, ocupado e em swap.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Instale e use o htop em vez do top. E muito mais amigavel: cores, navegacao por setas, F9 para matar com menu, e mostra todos os nucleos da CPU.",
      },
      {
        type: "warning",
        content: "Nunca mate processos com PID baixo (menor que 100) sem saber o que sao. Sao do sistema (init, kernel) — matar um deles pode derrubar a sessao toda.",
      },
      {
        type: "danger",
        content: "kill -9 1 (matar o PID 1, init/systemd) congela ou reinicia o sistema. Nao faca isso nem como teste.",
      },
      {
        type: "info",
        content: "Quando um navegador trava, geralmente sao varias abas/processos. pkill -9 firefox encerra todos de uma vez sem precisar matar PID por PID.",
      },
    ],
  },
  {
    slug: "pipes-redirecionamento",
    section: "terminal",
    title: "Pipes e redirecionamento",
    difficulty: "intermediario",
    subtitle: "Conectando comandos com | e salvando saida com > e >>.",
    intro: `O segredo da forca do terminal Linux nao esta em comandos gigantes que fazem tudo, mas em pequenos comandos que fazem uma coisa bem e se conectam entre si. E como uma cozinha industrial: um aparelho descasca, outro corta, outro cozinha, outro tempera. Voce so liga as maquinas em sequencia.

A "cola" entre os comandos e o pipe, simbolo \`|\` (a barra vertical, geralmente Shift + barra invertida). Ele pega a saida de um comando e entrega como entrada ao proximo. \`ls | grep .txt\` significa: lista a pasta, depois filtra so os .txt. \`ps aux | grep firefox | wc -l\` lista os processos, filtra os firefox e conta quantos sao. Tres comandos simples, uma resposta especifica.

Alem do pipe, voce tambem pode redirecionar a saida para arquivo: \`>\` joga em arquivo (substituindo o que tinha) e \`>>\` adiciona ao fim (sem apagar). Para entrada, \`<\` faz o caminho oposto: le um arquivo e da como input ao comando. Erros tem um canal separado, o stderr (descritor 2), redirecionado com \`2>\`.

Este capitulo desbloqueia o estilo "Unix" de pensar: transforme um problema grande em uma sequencia de passos pequenos. Depois que esse jeito de pensar entra na cabeca, voce vai inventar pipelines uteis sozinho, todo dia.`,
    codes: [
      {
        lang: "bash",
        code: `# Pipe basico: saida de um comando vira entrada do outro
ls /etc | grep "conf"
# Lista /etc, filtra so o que tem 'conf' no nome.
# saida (exemplo):
# debconf
# host.conf
# resolv.conf

# Encadeando varios:
ls /etc | grep "conf" | wc -l
# Conta quantos arquivos com 'conf' tem em /etc
# saida: 23`,
      },
      {
        lang: "bash",
        code: `# Redirecionamento: > escreve em arquivo (substitui!)
ls ~ > minha_lista.txt
cat minha_lista.txt
# Documentos
# Downloads
# ...

# >> adiciona no fim (nao apaga o que ja tinha)
date >> minha_lista.txt
echo "fim do arquivo" >> minha_lista.txt`,
      },
      {
        lang: "bash",
        code: `# Cuidado classico: > sobrescreve sem perguntar
echo "linha 1" > teste.txt
echo "linha 2" > teste.txt   # OPS: a "linha 1" sumiu!
cat teste.txt
# linha 2

# Para acumular, sempre use >>
echo "primeira" > acumulo.txt
echo "segunda" >> acumulo.txt
echo "terceira" >> acumulo.txt
cat acumulo.txt
# primeira
# segunda
# terceira`,
      },
      {
        lang: "bash",
        code: `# Redirecionando a entrada: < le arquivo no lugar do teclado
sort < minha_lista.txt
# Ordena alfabeticamente as linhas do arquivo.

# Heredoc: bloco de texto inline (util em scripts)
cat > config.ini <<'EOF'
[geral]
nome=Bruno
tema=escuro
EOF
cat config.ini`,
      },
      {
        lang: "bash",
        code: `# Erros tem canal separado (stderr = 2)
ls /pasta-que-nao-existe
# ls: cannot access '/pasta-que-nao-existe': No such file or directory

# Redirecionando so o erro para um arquivo
ls /pasta-que-nao-existe 2> erros.log

# Redirecionando saida normal e erro juntos
comando_qualquer > tudo.log 2>&1
# Le-se: redireciona saida (1) para tudo.log; depois manda erro (2) para o mesmo lugar (&1).

# Ou em bash moderno (mais legivel):
comando_qualquer &> tudo.log`,
      },
      {
        lang: "bash",
        code: `# tee = redireciona para arquivo E ainda mostra na tela
ls ~ | tee lista.txt
# Aparece na tela e tambem salva em lista.txt.

# tee -a = append (acumula em vez de sobrescrever)
date | tee -a lista.txt`,
      },
      {
        lang: "bash",
        code: `# Pipelines uteis do dia a dia:

# Encontrar processos consumindo memoria, top 5
ps aux --sort=-%mem | head -n 6

# Contar quantos arquivos tem em /usr/bin
ls /usr/bin | wc -l

# Ver as ultimas 20 linhas de log com a palavra error
grep -i error /var/log/syslog | tail -n 20

# Listar pacotes instalados que tem 'python' no nome
dpkg -l | grep python | wc -l`,
      },
    ],
    points: [
      "Pipe (|) liga a saida de um comando a entrada do proximo.",
      "> grava em arquivo (substituindo); >> adiciona ao fim.",
      "< le um arquivo como entrada; heredoc (<<EOF...EOF) injeta bloco de texto.",
      "stdout (1) e a saida normal; stderr (2) e o canal de erros — separados por padrao.",
      "2> redireciona so o erro; &> redireciona saida e erro juntos.",
      "tee divide o fluxo: vai para o arquivo e tambem para a tela.",
      "Iniciante comum: usar > em vez de >> e perder o que estava no arquivo.",
      "Iniciante comum: esquecer que pipe so passa o stdout — erro nao passa pelo |.",
      "Pipelines pequenos e claros sao melhores que comandos gigantescos: facil ler e manter.",
    ],
    alerts: [
      {
        type: "warning",
        content: "Use > com cuidado: 'comando > arquivo' apaga o conteudo anterior antes de comecar a escrever, mesmo se o comando falhar e gerar nada.",
      },
      {
        type: "tip",
        content: "Quando estiver montando pipeline grande, monte aos poucos. Rode so o primeiro comando, ve o que sai. Adiciona o segundo. E assim vai. Mais facil debugar.",
      },
      {
        type: "info",
        content: "tee vem do simbolo T do encanamento: pega um fluxo e divide em dois. Uma saida vai para tela, outra para arquivo. Util para logar enquanto acompanha.",
      },
      {
        type: "success",
        content: "Quando dominar pipes, voce comeca a escrever 'one-liners' que substituem scripts inteiros. Bash one-liners viraram quase um esporte — ha sites colecionando os melhores.",
      },
    ],
  },
  {
    slug: "sudo-seguranca",
    section: "terminal",
    title: "sudo e seguranca basica",
    difficulty: "iniciante",
    subtitle: "Quando precisa de poder de admin e como nao se cortar.",
    intro: `No Linux, existe uma separacao clara entre o que voce pode fazer como usuario comum (mexer nos seus arquivos em /home) e o que precisa de permissao de administrador (instalar programa, mudar config do sistema, mexer em /etc). Essa separacao nao e chatice: e o que mantem o sistema seguro mesmo se voce baixar algo suspeito.

O \`sudo\` (do ingles "substitute user do") e o jeito moderno de elevar so um comando ao nivel de administrador, sem ficar logado como root o tempo todo. Quando voce digita \`sudo apt update\`, o sistema pergunta sua senha (a do seu usuario, nao uma senha separada de root), e roda aquele comando especifico com privilegios. Acabou o comando, voltou a ser usuario comum.

A senha que voce digita fica em cache por uns 15 minutos, entao se rodar varios sudos seguidos nao precisa redigitar. E perceba: enquanto voce digita a senha, NADA aparece na tela — nem asterisco, nem ponto. Isso e proposital, para esconder ate o tamanho. Confie e va digitando.

Aqui vai a regra de ouro: se nao esta certo do que aquele comando com sudo faz, NAO rode. Um \`sudo rm -rf /etc\` e o mesmo que demolir os ajustes do sistema todo. Sudo e poder, e poder pede responsabilidade. Vamos ver os usos legitimos e os erros mais comuns.`,
    codes: [
      {
        lang: "bash",
        code: `# Comando comum (sem sudo): tudo que esta dentro de /home/seu-usuario
mkdir ~/minha_pasta     # ok, e sua casa
echo "ola" > ~/teste.txt  # ok

# Comando que precisa de admin (com sudo):
sudo apt update         # atualiza lista de pacotes do sistema
# [sudo] senha para bruno: ********
# (a senha NAO aparece enquanto voce digita)`,
      },
      {
        lang: "bash",
        code: `# Erro classico de iniciante: editar config sem sudo
echo "novo_dns=8.8.8.8" >> /etc/resolv.conf
# bash: /etc/resolv.conf: Permissao negada

# Forma certa:
echo "novo_dns=8.8.8.8" | sudo tee -a /etc/resolv.conf
# (precisa do tee porque o > do shell roda ANTES do sudo)`,
      },
      {
        lang: "bash",
        code: `# Editando arquivo do sistema com editor:
sudo nano /etc/hosts
# (abre o nano com permissao para salvar)

# Para sair do nano:
#   Ctrl+O salva
#   Ctrl+X fecha`,
      },
      {
        lang: "bash",
        code: `# Esqueceu o sudo no comando anterior? Use !!
apt install htop
# E: nao foi possivel abrir arquivo de bloqueio... (erro)

sudo !!
# vira: sudo apt install htop
# (truque salvador, evita redigitar)`,
      },
      {
        lang: "bash",
        code: `# Virando root por uma sessao inteira (use com parcimonia!)
sudo -i
# O prompt muda: root@meupc:~#
# O # no fim avisa que voce e root.

# Para sair e voltar a ser usuario comum:
exit`,
      },
      {
        lang: "bash",
        code: `# Conferindo quem pode usar sudo
groups bruno
# bruno : bruno adm cdrom sudo dip plugdev lpadmin sambashare
# O 'sudo' na lista significa que esse usuario pode usar sudo.

# Adicionando outro usuario ao sudo (precisa ser root ou ter sudo):
sudo usermod -aG sudo nome_do_outro_usuario
# Ele precisa fazer logout e login para o efeito valer.`,
      },
      {
        lang: "bash",
        code: `# Boas praticas:

# 1) NUNCA rode 'sudo' em comando que voce nao entende.
# 2) Prefira 'sudo' pontual a 'sudo -i' (menos chance de errar).
# 3) Antes de rodar, leia o comando da esquerda para a direita.
# 4) Em duvida, copie o comando e pesquise antes de apertar Enter.
# 5) Nunca instale via 'curl ... | sudo bash' sem ler o script.`,
      },
    ],
    points: [
      "sudo eleva so um comando ao nivel root; depois volta a usuario comum.",
      "A senha do sudo e a SUA senha — nao existe senha separada de root no Lubuntu padrao.",
      "Enquanto digita a senha, nada aparece na tela. E proposital, va digitando.",
      "Truque: 'sudo !!' repete o ultimo comando com sudo na frente.",
      "sudo tee resolve o problema de redirecionar saida com permissao (echo ... | sudo tee).",
      "sudo -i abre uma sessao inteira como root — use so quando precisar mesmo.",
      "Iniciante comum: rodar com sudo qualquer coisa que de erro de permissao, sem entender. Crie o habito de ler o erro antes.",
      "Iniciante comum: copiar e colar 'curl ... | sudo bash' de blogs aleatorios. Isso roda codigo desconhecido como root — nao faca.",
      "Quem pode usar sudo esta no grupo 'sudo' (veja com groups seu_usuario).",
    ],
    alerts: [
      {
        type: "danger",
        content: "Nunca rode 'sudo rm -rf /' nem variacoes. Esse comando apaga o sistema operacional inteiro. Existem versoes maliciosas disfarcadas em codigo decimal/hex em alguns sites — desconfie.",
      },
      {
        type: "warning",
        content: "Nunca instale software com 'curl url | sudo bash' sem ler o script primeiro. Voce esta dando privilegio de root para um codigo que nao viu.",
      },
      {
        type: "tip",
        content: "Se quiser saber o que aquele comando com sudo faria sem executar, use 'echo' na frente: 'echo sudo apt install pacote' so imprime, nao roda.",
      },
      {
        type: "info",
        content: "A senha do sudo fica em cache por uns 15 minutos no terminal atual. Se rodar varios sudos seguidos, so digita a senha uma vez.",
      },
    ],
  },
  {
    slug: "atalhos-bash",
    section: "terminal",
    title: "Atalhos do bash que aceleram tudo",
    difficulty: "iniciante",
    subtitle: "Tab, historico, Ctrl+R e movimentos pelo cursor.",
    intro: `O bash (a "linguagem" do terminal padrao do Lubuntu) tem dezenas de atalhos pequenos que, juntos, multiplicam sua velocidade. A maioria das pessoas aprende dois ou tres no primeiro dia (Tab e seta para cima) e fica nisso para sempre. E uma pena, porque os outros atalhos ja vem instalados de graca e poupam horas por mes.

Pense no bash como um piano: cada teclinha de atalho e uma nota. Tab completa nomes (a "do central"), seta para cima resgata o ultimo comando (segunda nota mais usada), Ctrl+R busca no historico (a virada de chave para parar de redigitar), Ctrl+A vai para o inicio da linha, Ctrl+E para o fim. Em duas semanas de pratica, esses gestos viram automaticos.

Os melhores atalhos sao para nao redigitar. \`!!\` repete o ultimo comando, \`!apt\` repete o ultimo que comecava com apt, \`!$\` reusa o ultimo argumento. Quando voce escreve um comando longo errado, em vez de redigitar, navega ate o erro com Ctrl+seta e corrige no lugar.

Este capitulo fecha a secao de terminal trazendo agilidade. Voce ja sabe navegar, manipular, ler, controlar processos, encanar comandos e usar sudo. Agora vai aprender a fazer tudo isso o dobro mais rapido. E quem domina os atalhos do bash logo prefere o terminal a qualquer interface grafica.`,
    codes: [
      {
        lang: "bash",
        code: `# Tab completion: completa nomes de comando, arquivo e pasta
cd Doc<Tab>            # vira: cd Documentos/
sudo apt inst<Tab>     # vira: sudo apt install
ls /et<Tab>            # vira: ls /etc/

# Aperte Tab DUAS vezes para ver opcoes quando ha varias:
ls ~/D<Tab><Tab>
# Documentos/  Downloads/`,
      },
      {
        lang: "bash",
        code: `# Historico de comandos
history          # mostra os ultimos 500 comandos numerados
history 20       # so os ultimos 20

# Repetindo um comando do historico pelo numero:
!42              # roda o comando que tem numero 42 no history
!!               # repete o ULTIMO comando
!apt             # repete o ultimo comando que comecava com 'apt'
!?install        # repete o ultimo comando que continha 'install'`,
      },
      {
        lang: "bash",
        code: `# Ctrl+R = busca interativa no historico (o atalho que muda a vida)
# Aperte Ctrl+R, comece a digitar parte do comando.
# (reverse-i-search)\`apt\`: sudo apt install htop
# - Enter executa
# - Setas para frente/tras editam antes de executar
# - Ctrl+R de novo busca a ocorrencia anterior
# - Ctrl+G cancela a busca`,
      },
      {
        lang: "bash",
        code: `# Reutilizando partes do comando anterior
ls ~/Documentos/relatorio.pdf
xdg-open !$
# !$ vira o ultimo argumento do comando anterior
# Equivale a: xdg-open ~/Documentos/relatorio.pdf

mv arquivo.txt /pasta/destino/
cd !$            # vai para /pasta/destino/

# !* pega TODOS os argumentos do anterior
echo um dois tres
ls !*            # equivale a: ls um dois tres`,
      },
      {
        lang: "bash",
        code: `# Movendo o cursor sem usar a seta letra-por-letra
# Ctrl + A   -> inicio da linha
# Ctrl + E   -> fim da linha
# Alt  + B   -> uma palavra para tras
# Alt  + F   -> uma palavra para frente
# Ctrl + ←/→ -> uma palavra para tras/frente (em alguns terminais)`,
      },
      {
        lang: "bash",
        code: `# Apagando trechos da linha
# Ctrl + U   -> apaga do cursor ate o INICIO da linha
# Ctrl + K   -> apaga do cursor ate o FIM
# Ctrl + W   -> apaga uma palavra para tras
# Ctrl + Y   -> "cola" o que voce acabou de cortar com Ctrl+U/K/W

# Limpando a tela sem perder o que digitou
# Ctrl + L   -> mesmo efeito que 'clear'`,
      },
      {
        lang: "bash",
        code: `# Outros atalhos uteis
# Ctrl + C   -> interrompe o comando que esta rodando
# Ctrl + D   -> sai do shell (equivale a 'exit')
# Ctrl + Z   -> pausa o comando (manda para background, retoma com fg)

# Criando seu proprio atalho permanente (alias) no ~/.bashrc
echo "alias ll='ls -lhA'" >> ~/.bashrc
echo "alias ..='cd ..'"   >> ~/.bashrc
source ~/.bashrc          # recarrega para valer agora
ll                        # ja funciona`,
      },
    ],
    points: [
      "Tab completa nomes; Tab Tab mostra opcoes quando ha mais de uma.",
      "Seta para cima/baixo navega no historico; Ctrl+R faz busca interativa.",
      "!! repete o ultimo comando; !$ reusa o ultimo argumento; !apt repete o ultimo que comecava com 'apt'.",
      "Ctrl+A vai ao inicio, Ctrl+E ao fim; Alt+B/F andam palavra por palavra.",
      "Ctrl+U apaga ate o inicio, Ctrl+K ate o fim, Ctrl+W uma palavra atras.",
      "Ctrl+L limpa a tela mantendo o que voce ja digitou na linha.",
      "Iniciante comum: redigitar comandos longos em vez de usar seta para cima ou Ctrl+R.",
      "Iniciante comum: nunca abrir o ~/.bashrc para criar atalhos pessoais (aliases).",
      "Aliases no ~/.bashrc sao a forma definitiva de personalizar — duram entre sessoes.",
    ],
    alerts: [
      {
        type: "tip",
        content: "Treine Ctrl+R por uma semana, repetindo de proposito. Em uns 10 dias vira muscular: voce nem pensa, ja esta buscando.",
      },
      {
        type: "info",
        content: "O historico e gravado em ~/.bash_history quando voce sai do shell. HISTSIZE=10000 no ~/.bashrc aumenta a quantidade guardada.",
      },
      {
        type: "warning",
        content: "Senhas digitadas no terminal podem aparecer no historico. Para um comando especifico, comece com um espaco — bash ignora linhas iniciadas por espaco se HISTCONTROL incluir 'ignorespace'.",
      },
      {
        type: "success",
        content: "Aliases pessoais sao a marca de quem usa Linux ha tempo. Comece com ll='ls -lhA', gs='git status', ..='cd ..'. Em pouco tempo voce tem dezenas.",
      },
    ],
  },
];
