# Safraaqui - Plataforma de Serviços Agrícolas

## Visão Geral do Projeto

O Safraaqui é uma plataforma digital inovadora desenvolvida para conectar produtores rurais a prestadores de serviços agrícolas no Brasil. O projeto nasceu da identificação de problemas reais enfrentados pelo agronegócio brasileiro, como a subutilização de equipamentos, a dificuldade de encontrar prestadores qualificados em regiões distantes e a dependência de intermediários que frequentemente praticam valores abusivos ou golpes. A plataforma propõe uma solução moderna, transparente e eficiente que beneficia tanto produtores quanto prestadores de serviços.

O MVP (Minimum Viable Product) apresentado neste repositório foi desenvolvido com foco em demonstrar o conceito central da plataforma para apresentação a potenciais investidores e parceiros estratégicos. A solução técnica utiliza tecnologias web modernas, design responsivo e integração com mapas para geolocalização, oferecendo uma experiência completa que simula o funcionamento real de uma marketplace de serviços agrícolas. O código foi estruturado para facilitar a evolução incremental, permitindo a adição de novas funcionalidades conforme o crescimento do projeto e o feedback dos usuários.

A proposta de valor do Safraaqui está ancorada em três pilares fundamentais: marketplace de serviços para conexão direta entre demanda e oferta, sistema de logística inteligente para otimização de rotas e redução de fretes vazios, e安全管理 financeiro com pagamentos garantidos e antecipação de recebíveis. O MVP foca no primeiro pilar, demonstrando a funcionalidade core de conexão entre produtores e prestadores, enquanto os demais pilares serão implementados em fases posteriores conforme a validação do modelo de negócio e a captação de investimentos.

## Funcionalidades Implementadas

O MVP do Safraaqui inclui um conjunto abrangente de funcionalidades que demonstram a proposta de valor da plataforma de forma tangível e interativa. A landing page foi desenvolvida com design profissional e otimizada para conversão, apresentando claramente os benefícios da plataforma para ambos os perfis de usuários. A comunicação visual utiliza cores que remetem ao agroneg幸运cio brasileiro, com verde floresta representando crescimento e produtividade e dourado evocando a colheita e o sucesso das operações rurais.

O sistema de autenticação permite que usuários se cadastrem como produtores ou prestadores de serviços, com fluxo simplificado para demonstração. Os dashboards foram projetados considerando as necessidades específicas de cada perfil, com interfaces intuitivas e funcionalmente relevantes. O dashboard do produtor inclui criação de solicitações de serviço com geolocalização, visualização de prestadores disponíveis na região, histórico de contratações e gestão de pagamentos. O dashboard do prestador oferece busca de oportunidades de trabalho, visualização de rotas otimizadas, gestão de serviços aceitos e acompanhamento financeiro detalhado.

A integração com Mapbox permite visualização geográfica das solicitações e prestadores, demonstrando uma das funcionalidades mais diferenciadas da plataforma. O algoritmo de matching proposto conecta demanda e oferta baseado em localização, tipo de serviço e disponibilidade, criando eficiência que reduz custos operacionais para prestadores e tempo de espera para produtores. O sistema de notificações simula alertas sobre novas oportunidades, mantendo os usuários engajados e informados sobre atividades relevantes em suas regiões.

## Estrutura do Projeto

A organização do código segue práticas modernas de desenvolvimento web, separando claramente as responsabilidades e facilitando a manutenção e evolução do sistema. O diretório raiz contém os arquivos HTML principais que representam as diferentes páginas da aplicação, enquanto os recursos compartilhados estão organizados em subdiretórios específicos. Esta estrutura permite que a plataforma seja facilmente hospedada em serviços de hosting estático, reduzindo custos de infraestrutura especialmente nas fases iniciais do projeto.

```
safraaqui/
├── index.html              # Landing page principal
├── dashboard-produtor.html # Dashboard do produtor rural
├── dashboard-prestador.html # Dashboard do prestador de serviços
├── css/
│   └── styles.css         # Stylesheet completo
├── js/
│   ├── auth.js            # Autenticação e dados mockados
│   ├── map.js             # Integração com Mapbox
│   └── app.js             # Lógica da aplicação
└── README.md              # Documentação do projeto
```

O diretório CSS contém o stylesheet completo da aplicação, com mais de 2500 linhas de código organizadas em seções claramente identificadas. O arquivo utiliza variáveis CSS para facilitar customizações de tema e mantém consistência visual em toda a plataforma. O design é mobile-first, garantindo que a experiência do usuário seja otimizada para dispositivos móveis, considerando que muitos usuários do agronegócio acessam a internet principalmente através de smartphones em condições de campo.

O diretório JavaScript organiza a lógica da aplicação em três módulos complementares. O módulo auth.js gerencia autenticação, armazenamento de sessão e dados mockados para demonstração. O módulo map.js encapsula toda a complexidade da integração com Mapbox, oferecendo funções simplificadas para uso nos dashboards. O módulo app.js contém a lógica de interface, handlers de formulários, renderização de componentes e interações do usuário, servindo como orquestrador principal da experiência.

## Pré-requisitos e Configuração

Para executar o MVP do Safraaqui localmente, você precisará de um servidor web básico que sirva arquivos estáticos. As opções mais simples incluem o servidor HTTP integrado do Python, extensões de editor de código como Live Server, ou serviços de hospedagem estática como Vercel, Netlify ou GitHub Pages. A plataforma não requer backend complexo para demonstração, funcionando inteiramente com JavaScript no navegador e dados mockados para simular o comportamento de uma aplicação completa.

O único requisito de configuração externo é a obtenção de um token de acesso válido para a API do Mapbox. O código atual inclui um token de placeholder que permitirá carregar a interface do mapa, mas para visualização completa das funcionalidades de geolocalização e marcadores, você precisará substituir o token no arquivo js/map.js. O Mapbox oferece uma camada gratuita generosa que é suficiente para desenvolvimento e testes, e a obtenção do token é um processo rápido através do site oficial do Mapbox.

Para configurar o token do Mapbox, acesse o site mapbox.com, crie uma conta gratuita e gere um access token público. Localize a linha no arquivo js/map.js que define a constante MAPBOX_TOKEN e substitua o valor atual pelo seu token. Após esta alteração, todas as funcionalidades de mapa funcionarão corretamente, incluindo geolocalização, marcadores personalizados e popups informativos. O mapa utilizará o estilo light-v11 por padrão, mas você pode personalizar o estilo alterando o parâmetro style na inicialização do mapa.

## Como Executar Localmente

A forma mais simples de executar o projeto localmente é utilizando o servidor HTTP do Python, que já vem instalado na maioria das instalações do sistema operacional. Navegue até o diretório raiz do projeto no terminal e execute o comando apropriado para a versão do Python instalada em seu ambiente. O servidor iniciará automaticamente e disponibilizará a aplicação em http://localhost:8000, onde você poderá acessar todas as páginas e funcionalidades do MVP.

Para Python 3, o comando é python -m http.server 8000, enquanto para Python 2 a sintaxe é python -m SimpleHTTPServer 8000. Após executar o comando, abra seu navegador web e acesse o endereço informado. A landing page será exibida automaticamente, permitindo navegação para os dashboards através dos botões de login ou cadastro. Você pode fazer login com qualquer e-mail e senha para acessar os dashboards de demonstração.

Alternativamente, se você utiliza VS Code, pode instalar a extensão Live Server e clicar com o botão direito no arquivo index.html para abrir diretamente no navegador com recarregamento automático. Esta opção é particularmente útil durante o desenvolvimento, pois alterações nos arquivos são refletidas instantaneamente no navegador. Para usuários que preferem soluções de hospedagem online, basta fazer upload dos arquivos para serviços como Netlify Drop ou GitHub Pages, que servem arquivos estáticos gratuitamente.

## Tecnologias Utilizadas

O desenvolvimento do MVP priorizou tecnologias amplamente adotadas, com curvas de aprendizado acessíveis e comunidades ativas de desenvolvedores. O frontend foi construído com HTML5 semântico, CSS3 moderno e JavaScript puro, evitando dependências de frameworks complexos que poderiam dificultar a compreensão do código e a evolução incremental do projeto. Esta decisão técnica permite que desenvolvedores com conhecimento básico de web development contribuam com o projeto, reduzindo barreiras para expansão da equipe.

O CSS utiliza recursos avançados como variáveis personalizadas, flexbox e grid layout para criar interfaces responsivas e visualmente atraentes. A tipografia foi cuidadosamente selecionada para garantir legibilidade em diferentes condições de uso, com Montserrat para títulos transmitindo solidez e modernidade, e Inter para o corpo do texto oferecendo alta legibilidade em telas de diversos tamanhos. A paleta de cores foi desenvolvida para comunicar os valores da marca e criar associação visual com o setor agrícola.

A integração com Mapbox GL JS fornece funcionalidades de mapas poderosos com performance otimizada e ampla documentação. O JavaScript modular organiza a lógica da aplicação em responsabilidades bem definidas, facilitando testes unitários e manutenção. O localStorage do navegador é utilizado para persistência de sessão, permitindo que usuários permaneçam logados entre refreshes da página. O design system interno garante consistência visual através de classes CSS reutilizáveis e componentes padronizados.

## Roadmap de Desenvolvimento

O MVP atual representa a primeira fase do desenvolvimento do Safraaqui, focando na demonstração do conceito core e na validação da proposta de valor com potenciais investidores. A segunda fase, contingentemente ao aporte de investimentos, contemplará o desenvolvimento completo do módulo de logística inteligente, incluindo algoritmos avançados de otimização de rotas que identificarão automaticamente fretes de retorno, reduzindo significativamente os custos de deslocamento vazio que afetam o setor.

A terceira fase introduzirá os serviços financeiros, começando com sistema de pagamentos integrado via APIs de processadores brasileiros como Pagar.me ou Mercado Pago. A funcionalidade de escrow garantirá segurança para ambas as partes nas transações, com fundos retidos até confirmação de conclusão do serviço. Posteriormente, será implementada a antecipação de recebíveis, oferecendo aos prestadores acesso imediato ao dinheiro recebido mediante taxa de desconto, atendendo uma necessidade real de fluxo de caixa do setor.

A expansão para aplicativo mobile nativo está planejada para a quarta fase, utilizando React Native para compartilhamento de lógica com a versão web. O aplicativo oferecerá funcionalidades específicas para uso offline, crítico para áreas com conectividade limitada, e notificações push para alertas em tempo real sobre novas oportunidades. A estratégia de expansão geográfica priorizará inicialmente os estados do Mato Grosso, Goiás e Bahia, onde o fundador possui relacionamentos estabelecidos, antes de expandir para outras regiões brasileiras e potencialmente outros países da América Latina.

## Considerações sobre Segurança e Compliance

O MVP atual utiliza dados mockados e autenticação simulada para fins de demonstração. Em ambiente de produção, a segurança será reforçada com implementação de HTTPS obrigatório, criptografia de dados sensíveis em repouso, validação rigorosa de inputs no backend e proteção contra ataques comuns como SQL injection, XSS e CSRF. A autenticação será migrada para soluções maduras como JWT com refresh tokens ou integrações com provedores OAuth como Google e Facebook.

A LGPD (Lei Geral de Proteção de Dados) será totalmente contemplada na implementação de produção, incluindo coleta de consentimentos explícitos, direitos de acesso, correção e exclusão de dados pessoais, e designação de Encarregado de Proteção de Dados. A política de privacidade será transparente sobre quais dados são coletados, como são utilizados e por quanto tempo são armazenados. Para funcionalidades financeiras, a conformidade com regulamentações do Banco Central e da CVM será assegurada através de parcerias com instituições financeiras licensed.

O sistema de avaliações e reputação será projetado para resistir a manipulações, com validação de serviços realizados através de confirmações geolocalizadas e integração com sistemas de rastreamento de equipamentos. A mediação de disputas incluirá processos claros e equipe dedicada para resolução de conflitos entre produtores e prestadores. A transparência sobre como avaliações são calculadas e utilizadas construirá confiança no ecossistema, diferenciando a plataforma de alternativas informais.

## Licença e Contribuição

Este projeto é disponibilizado para fins de demonstração e avaliação por potenciais investidores e parceiros. O código pode ser utilizado como referência e base para desenvolvimento de projetos similares, mantendo os devidos créditos. Para questões comerciais, parcerias ou contribuições significativas, favor entrar em contato através dos canais indicados na landing page.

Agradecemos seu interesse no Safraaqui e acreditamos que, juntos, podemos transformar a forma como o agronegócio brasileiro se conecta e opera. A modernização do setor através de tecnologia não é apenas uma oportunidade de negócio, mas uma contribuição para a eficiência produtiva e sustentabilidade de um dos pilares mais importantes da economia nacional.
