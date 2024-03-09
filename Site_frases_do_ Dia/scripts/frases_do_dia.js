var colecao_frases_do_dia = [
    { id: 1, frase: "A persistência é o caminho do êxito. - Charles Chaplin"},
    { id: 2, frase: "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis. - José de Alencar"},
    { id: 3, frase: "Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali? - Fernando Pessoa"},
    { id: 4, frase: "Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho. - Dalai Lama"},
    { id: 5, frase: "Só existe um êxito: a capacidade de levar a vida que se quer. - Cristopher Morley"},
    { id: 6, frase: "Três regras: não prometa nada quando estiver feliz; não responda nada quando estiver irritado; não decida nada quando estiver triste. - Desconhecido"},
    { id: 7, frase: "Deus acalma o nosso coração mesmo nos dias mais difíceis - Salmos 107.29"},
    { id: 8, frase: "Amai ao próximo como a ti mesmo, fazei pelos outros o que gostaríamos que os outros fizessem por nós. - Bíblia"},
    { id: 9, frase: "A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo. - F. Scott Fitzgerald"},
    { id: 10, frase: "A coragem não é ausência do medo; é a persistência apesar do medo. - Desconhecido"},
    {  id: 11, frase: "O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível. - Max Weber"},
    { id: 12, frase: "Eu não estaria onde estou se eu não tivesse falhado – e muito. O bom e o ruim fazem parte da equação do sucesso - Mark Cuban"},
    { id: 13, frase: "Se você pensa que consegue fazer algo ou pensa que não consegue fazer algo, você está certo - Henry Ford"},
    { id: 14, frase: "Não importa qual seja a sua condição atual, como ou onde você cresceu ou que tipo de educação você teve, você pode ser bem-sucedido se escolher se empenhar. Espírito, coragem e força de vontade são o que mais importa quando você começa - Jack Ma"},
    { id: 15, frase: "A sensação de conquista é o veneno mais perigoso que existe. O antídoto é, todos os dias, pensar no que pode ser melhorado amanhã - Ingvar Kamprad"},
    { id: 16, frase: "A maioria das pessoas desiste quando elas estão próximas de alcançar o sucesso. Elas desistem a um passo da linha de chegada. - H. Ross Perot"},
    { id: 17, frase: "Não há problema em celebrar o sucesso, mas é mais importante considerar as lições que podem ser aprendidas com o fracasso - Bill Gates"},
    { id: 18, frase: "Desenvolva o sucesso a partir do fracasso. Desencorajamento e fracasso são dois dos mais importantes degraus na escada do sucesso. - Dale Carnegie"},
    { id: 19, frase: "Eu adoro quando as pessoas dizem que não conseguem fazer algo. Não tem nada que faça com que eu me sinta melhor, já que várias pessoas me disseram que eu também não conseguiria. - Ted Turner"},
    { id: 20, frase: "Fracasso não é o resultado – fracassar é não tentar. Não tenha medo de falhar. - Sara Blakely"},
    { id: 21, frase: "Todo mundo passa por fases difíceis. A forma como você lida com elas é a medida da sua determinação e dedicação. - Lakshmi Mittal"},
    { id: 22, frase: "Você não aprende seguindo as regras. Você aprende fazendo e fracassando”. - Richard Branson"},
    { id: 23, frase: "Só sou rico porque sei quando estou errado. Basicamente eu sobrevivi por conseguir reconhecer os meus erros. - George Soros"},
    { id: 24, frase: "Se você quer ser bem-sucedido, você precisa apostar em novos caminhos em vez de seguir pelos quais você já conhece. - John Rockefeller"},
    { id: 25, frase: "Quando o meu maior medo se tornou realidade, eu me libertei. Eu ainda estava viva e tinha uma filha que eu amava, uma máquina de escrever e uma grande ideia. Então o fim do poço formou a base sólida para a reconstrução da minha vida. - J.K. Rowling"},
    { id: 26, frase: "Se você trabalhar duro e for determinado, você alcançará seus objetivos. Eu não acredito em atalhos. - Isabel dos Santos"},
    { id: 27, frase: "Não lamente o que podia ter e se perdeu por caminhos errados e nunca mais voltou. - Cora Coralina"},
    { id: 28, frase: "Há três coisas na vida que nunca voltam atrás: a flecha lançada, a palavra pronunciada e a oportunidade perdida. - Desconhecido"},
    { id: 29, frase: "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante. - Augusto Branco"},
    { id: 30, frase: "Diante de uma larga frente de batalha, procure o ponto mais fraco e, ali, ataque com a sua maior força. - Sun Tzu"},
    { id: 31, frase: "Às vezes os problemas são sinais de que chegou a hora de o guerreiro iniciar uma nova batalha. - Roberto Shinyashiki"},
    { id: 32, frase: "Faça o que pode, com o que você tem, no lugar onde você está!"},
    { id: 33, frase: "Tudo o que um sonho precisa para ser realizado é alguém que acredite que é possivel"},
    { id: 34, frase: "Faça hoje o que vai te dar orgulho amanhã"},
    { id: 35, frase: "Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo"},
];

function NovaFrase(){ // Esta função gera uma nova frase do dia aleatória e a exibe na página
    var NovaFraseDoDia = Math.floor(Math.random() * colecao_frases_do_dia.length); // Essa correção garantirá que você sempre obtenha um índice válido ao gerar uma nova frase do dia aleatória. 
    var frase_do_dia = colecao_frases_do_dia[NovaFraseDoDia].frase;
    return document.getElementById("fraseDoDia").textContent = frase_do_dia;
}

var data_atual = new Date();
var dia_do_mes = data_atual.getDate(); // Obtém o dia do mês atual (1 a 31)
var indice_da_frase = (dia_do_mes - 1) % colecao_frases_do_dia.length; // Calcula o índice da frase com base no dia do mês
var frase_do_dia = colecao_frases_do_dia[indice_da_frase].frase; // Obtém a frase do dia

document.getElementById("fraseDoDia").textContent = frase_do_dia; // Atualiza o conteúdo da página com a frase do dia