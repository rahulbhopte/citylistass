import "./styles.css";

const cityList = [
  { name: 'Goa', country: 'India' },
  { name: 'Amsterdam', country: 'Netherlands' },
  { name: 'New York', country: 'USA' },
  { name: 'Darjeeling', country: 'India' },
  { name: 'Tokyo', country: 'Japan' },
  { name: 'Lonavala', country: 'India' }
  ]

export default function App() {
  return (
    <div>
      <ol>
      {
       cityList.filter((city)=>city.country==="india")
       .map((city,index)=>{
         const key= 'location' + index;
         return<li key={key}>{city.name}</li>
       })
      }
</ol>
      </div>
  );
}
