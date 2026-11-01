import LanguageExperiment from '@/components/LanguageExperiment';
export default function PortugueseBusinessEmail() {
 return <LanguageExperiment lang="pt-BR" title="E-mail profissional com domínio próprio | Venmail" description="Conheça o e-mail profissional com domínio próprio da Venmail, planos para equipes e os passos para configurar seu domínio." heading="E-mail profissional com seu domínio" intro="Crie endereços como voce@suaempresa.com.br para sua equipe, com calendário, contatos e armazenamento compartilhado." cta="Criar conta" languageNotice="Cadastro e aplicativo disponíveis em inglês e francês." facts={[
 {title:'Seu domínio',body:'Use um domínio próprio e crie endereços para as pessoas da sua equipe.'},
 {title:'Plano Standard',body:'US$ 1 por mês para até 5 caixas de e-mail. Cada caixa adicional custa US$ 1 por mês.'},
 {title:'Calendário e contatos',body:'Organize compromissos e contatos junto ao e-mail profissional.'}
 ]} steps={{title:'Como configurar',items:['Crie uma conta e escolha um plano para empresas.','Adicione e verifique seu domínio.','Configure os registros DNS indicados e crie as caixas de e-mail.']}} questions={{title:'Perguntas frequentes',items:[
 {q:'Preciso de um domínio?',a:'Sim. Para ativar as caixas de e-mail, é necessário verificar um domínio e assinar um plano pago.'},
 {q:'Posso manter meu endereço ao trocar de provedor?',a:'Em geral, sim. Você precisa controlar o domínio e ajustar os registros de e-mail. Planeje a migração das mensagens antes de alterar os registros MX.'},
 {q:'Há uma versão em português?',a:'O cadastro e o aplicativo estão disponíveis em inglês e francês; o português ainda não está disponível no aplicativo.'}
 ]}} />;
}
