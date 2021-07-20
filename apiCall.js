const api = 'http://numbersapi.com'

async function NumberFacts(nums){
   
    const res = await axios.get(`${api}/${nums}?json`);
    return {
        number: res.data.number,
        text: res.data.text
    }

}

async function fourFacts(nums){
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => axios.get(`${api}/${nums}?json`))
    )
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
      })
    
}




