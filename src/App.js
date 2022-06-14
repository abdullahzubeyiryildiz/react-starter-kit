  import { useState } from "react"

function App() {
  
    // const genders = ['Erkek','Kadın']   

     const genders = [ 
      { key:'1', value: 'Erkek' },
      { key:'2', value: 'Kadın' }
    ]   


    const categoryList = [ 
      { key:1, value: 'PHP' },
      { key:2, value: 'JavaScript' },
      { key:3, value: 'CSS' },
      { key:4, value: 'HTML' },
    ]   
 

    const [name, setName] = useState('Abdullah')

    const [description, setDescription] = useState('')

    const [gender, setGender] = useState('2')
    const [categories, setCategories] = useState([2,4])

    const [rule,setRule] = useState(true)


   /* 
     Array için örnek
   const selectedGender = genders[gender]; 
   */

   const selectedGender = genders.find(g => g.key === gender)


    const selectedCategories = categories && categoryList.filter(c => categories.includes(c.key))


    return (
      <>
        <button onClick={() => setName('Yıldız') }>Adı Değiştir</button>
        <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />
       
       
        <textarea value={description}  onChange={e => setDescription(e.target.value)}  /><br />
        
           <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="">Seçin</option>


          { 
         /*
             Array için örnek
         genders.map((gender,index) => (
                <option value={index} key={index}>{gender}</option>
          )) */ 

          genders.map((gender) => (
                <option value={gender.key} key={gender.key}>{gender.value}</option>
          ))
          }   
 
        </select>  <br />


          <button onClick={()=> setCategories([2,3,4])}>Kategorileri Seç</button>
        <select value={categories} multiple={true} onChange={e => setCategories([...e.target.selectedOptions].map(option => +option.value))}>
          {  
            categoryList.map((category) => (
                  <option value={category.key} key={category.key}>{category.value}</option>
            ))
          }   
 
        </select>  <br />



        {
        
       /*
       Array için örnek
       selectedGender */ 
          
        }

          <pre>
            {JSON.stringify(selectedGender, null, 2)}

            {JSON.stringify(categories, null, 2)}


            {JSON.stringify(selectedCategories, null, 2)}

            
          </pre>


          <label>
            <input type="checkbox" checked={rule} onChange={E => setRule(E.target.checked)} /> Kuralları Okudum Onaylıyorum.
          </label>

          <br/>


          <button disabled={!rule}>Devam Et</button>

      </>
    )
}

export default App;
