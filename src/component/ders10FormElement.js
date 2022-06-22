import { useEffect, useState } from "react"

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
 
      const levels = [
        {key:'beginner', value:'Başlangıç'},
        {key:'jr_developer', value:'Jr. Developer'},
        {key:'sr_developer', value:'Sr. Developer'},
      ];

    const [name, setName] = useState('Abdullah')

    const [description, setDescription] = useState('')

    const [gender, setGender] = useState('2')
    const [categories, setCategories] = useState([2,4])

    const [rule,setRule] = useState(true)

    const [rules,setRules] = useState([
      {key:1, value:'1. kuralı kabul ediyorum', checked: false},
      {key:2, value:'2. kuralı kabul ediyorum', checked: false},
      {key:3, value:'3. kuralı kabul ediyorum', checked: true}
    ])

    const [level,setLevel] = useState('jr_developer')

    const [avatar,setAvatar] = useState(false)
    const [image,setImage] = useState(false)

    useEffect(() => {
          if(avatar) {
            const fileReader = new FileReader()

            fileReader.addEventListener('load', function() {
               setImage(this.result)
            })
      
            fileReader.readAsDataURL(avatar)
          }
    },[avatar])


    const checkRule = (key, checked) => {
      setRules(rules => rules.map(rule => {
        if(key === rule.key) {
            rule.checked = checked
        }
        return rule
      }))
    }

    const submitHandle = () => {
      const formData = new FormData()
      formData.append('avatar',avatar)
      formData.append('name',name)
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData
      })
    }
 
   /* 
     Array için örnek
   const selectedGender = genders[gender]; 
   */

   const selectedGender = genders.find(g => g.key === gender)
   const selectedLevel = levels.find(l => l.key === level)

    const selectedCategories = categories && categoryList.filter(c => categories.includes(c.key))

    const enabled = rules.every(rule => rule.checked) && avatar
 


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

          {rules.map(rule => (
              <label key={rule.key}>
              <input type="checkbox" checked={rule.checked} onChange={e => checkRule(rule.key, e.target.checked) }/>
              {rule.value}
            </label> 
          ))}

          <br/>

            <pre>
            {JSON.stringify(rules,null,2)} 
            </pre>


               {levels.map((l,index) => (
                <label key={index}>
                  <input type="radio" value={l.key} checked={l.key === level} onChange={e=>setLevel(e.target.value)} />
                  {l.value}
                </label>
               ))} 
               <br/>
             {level} 

              
            {JSON.stringify(selectedLevel)} 
            


            <label>
                <input type="file" onChange={e => setAvatar(e.target.files[0])} /> 
                {
                 /* console.log(e.target.files) */
                }
            </label>    
              
              <br/>
              
              {avatar && (
                <>
                <h3>{avatar.name}</h3>
                {image && <img src={image} alt="" />}
                </>
              )}

          <button onClick={submitHandle} disabled={!enabled}>Devam Et</button>

      </>
    )
}

export default App;
