function formatarTelefone(input) {
    // Remove caracteres não numéricos
    let value = input.value.replace(/\D/g, '');
    
    // Formata para o padrão brasileiro
    if (value.length <= 10) {
        // Fixo: (XX) XXXX-XXXX
        input.value = value.replace(/^(\d{2})(\d{4})(\d)/, '($1) $2-$3');
        input.value = input.value.replace(/(\d)(\d{4})$/, '$1-$2'); // Finaliza a formatação
    } else {
        // Celular: (XX) XXXXX-XXXX
        input.value = value.replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3');
        input.value = input.value.replace(/(\d)(\d{4})$/, '$1-$2'); // Finaliza a formatação
    }
}
function formatarcep(input){
    let value = input.value.replace(/\D/g, '');
    input.value = value.replace(/^(\d{2})(\d{3})(\d)/, '$1-$2-$3');
    input.value = input.value.replace(/(\d)(\d{2})$/, '$1$2');
}

const estados = [
    "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", 
    "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", 
    "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", 
    "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", 
    "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", 
    "Rondônia", "Roraima", "Santa Catarina", "São Paulo", 
    "Sergipe", "Tocantins"
];