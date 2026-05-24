export const clinicConfig = {
  name: "Leticia Terceiro",
  title: "Estética Avançada",
  phone: "+55 (11) 99999-9999",
  whatsappUrl: "https://wa.me/5511999999999?text=Olá%20Dra.%20Leticia,%20gostaria%20de%20agendar%20uma%20avaliação!",
  instagramUrl: "https://instagram.com/leticiaterceiro.estetica",
  address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
  hours: "Segunda a Sexta: 09h às 20h | Sábado: 09h às 14h",
  email: "contato@leticiaterceiro.com.br",
  
  procedures: [
    {
      id: "botox",
      name: "Toxina Botulínica (Botox)",
      tag: "Facial",
      image: "/images/botox.png",
      price: "1.190",
      description: "O tratamento com Toxina Botulínica é o método mais eficaz para suavizar rugas e linhas de expressão (testa, glabela e 'pés de galinha'). Promove um aspecto descansado, rejuvenescido e natural ao rosto, prevenindo o envelhecimento precoce da pele.",
      benefits: [
        "Suavização imediata de linhas dinâmicas",
        "Prevenção de rugas estáticas profundas",
        "Procedimento rápido e sem pós-operatório",
        "Resultados naturais em até 15 dias"
      ]
    },
    {
      id: "preenchimento",
      name: "Preenchimento Labial & Facial",
      tag: "Facial",
      image: "/images/lips.png",
      price: "1.390",
      description: "Realizado com ácido hialurônico de alta qualidade, o preenchimento devolve o volume perdido, corrige assimetrias e desenha o contorno dos lábios ou de áreas como olheiras, malar (maçãs do rosto) e mandíbula. O foco é a harmonização sutil, mantendo suas características únicas.",
      benefits: [
        "Lábios mais hidratados, volumosos e definidos",
        "Correção de pequenas imperfeições e assimetrias",
        "Rejuvenescimento do contorno facial",
        "Seguro, biocompatível e reabsorvível"
      ]
    },
    {
      id: "colageno",
      name: "Bioestimuladores de Colágeno",
      tag: "Facial & Corporal",
      image: "/images/collagen.png",
      price: "1.890",
      description: "Substâncias como Sculptra ou Radiesse injetadas na derme profunda para estimular a produção natural de colágeno pelo próprio corpo. Excelente para tratar a flacidez facial e corporal (braços, abdômen, glúteos e pernas), devolvendo a firmeza, espessura e viço da pele.",
      benefits: [
        "Aumento expressivo na firmeza da pele",
        "Resultados graduais e de longa duração (até 2 anos)",
        "Redução visível de flacidez e celulite",
        "Melhora geral na textura e qualidade cutânea"
      ]
    },
    {
      id: "endolaser",
      name: "Endolaser (Endolift)",
      tag: "Tecnologia Avançada",
      image: "/images/technology.png",
      price: "2.990",
      description: "Tecnologia revolucionária que utiliza uma microfibra óptica a laser por baixo da pele para liquefazer a gordura localizada e promover uma intensa retração da pele (efeito lifting imediato). Ideal para tratar a papada, contorno mandibular, abdômen e flacidez severa sem cortes.",
      benefits: [
        "Eliminação definitiva de gordura localizada",
        "Retração de pele e tratamento da flacidez severa",
        "Procedimento minimamente invasivo (sem cortes)",
        "Recuperação rápida e excelente alternativa à cirurgia"
      ]
    }
  ]
};
