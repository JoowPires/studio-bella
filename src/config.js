// Configurações do Salão - Edite aqui para personalizar
const config = {
  // Informações básicas
  salonName: "Studio Bella",
  salonSubtitle: "Estética",
  city: "[cidade]",
  
  // WhatsApp (apenas números, com código do país)
  whatsappNumber: "5599999999999",
  
  // Textos
  heroTitle: "Realce sua",
  heroTitleHighlight: "beleza natural",
  heroTitleEnd: "com cuidado especializado",
  heroSubtitle: "Atendimento personalizado e tratamentos exclusivos para você que merece o melhor. Agende agora pelo WhatsApp.",
  
  // Estatísticas
  stats: {
    experience: "8+",
    experienceLabel: "Anos de experiência",
    clients: "500+",
    clientsLabel: "Clientes atendidas",
    treatments: "15+",
    treatmentsLabel: "Tratamentos"
  },
  
  // Horários
  schedule: [
    { day: "Segunda a Sexta", time: "9h às 18h" },
    { day: "Sábado", time: "9h às 14h" },
    { day: "Domingo", time: "Fechado" }
  ],
  
  // Serviços
  services: [
    {
      id: 1,
      title: "Limpeza de Pele",
      description: "Tratamento profundo que remove impurezas e renova a pele, deixando-a radiante.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
      whatsappMessage: "Olá! Gostaria de agendar uma limpeza de pele."
    },
    {
      id: 2,
      title: "Design de Sobrancelhas",
      description: "Sobrancelhas perfeitas que harmonizam e valorizam seu olhar.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
      whatsappMessage: "Olá! Gostaria de agendar um design de sobrancelhas."
    },
    {
      id: 3,
      title: "Manicure e Pedicure",
      description: "Unhas impecáveis com acabamento de alta qualidade.",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
      whatsappMessage: "Olá! Gostaria de agendar manicure e pedicure."
    },
    {
      id: 4,
      title: "Procedimentos Estéticos",
      description: "Tratamentos avançados para resultados excepcionais.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
      whatsappMessage: "Olá! Gostaria de saber mais sobre os procedimentos estéticos."
    }
  ],
  
  // Depoimentos
  testimonials: [
    {
      id: 1,
      text: "Ambiente maravilhoso e atendimento impecável! Recomendo de olhos fechados!",
      author: "Maria Silva",
      role: "Cliente há 3 anos",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
      id: 2,
      text: "Encontrei o lugar perfeito para meu autocuidado. Super indico!",
      author: "Ana Costa",
      role: "Cliente há 2 anos",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    },
    {
      id: 3,
      text: "Profissionalismo de primeira! A atenção aos detalhes me conquistou desde a primeira visita.",
      author: "Juliana Santos",
      role: "Cliente há 1 ano",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80"
    }
  ],
  
  // Imagens
  images: {
    heroBg: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80",
    heroMain: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    aboutMain: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?w=800&q=80",
    aboutSecondary: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80"
  },
  
  // Redes sociais
  social: {
    instagram: "#",
    whatsapp: "https://wa.me/5599999999999"
  }
};

export default config;
