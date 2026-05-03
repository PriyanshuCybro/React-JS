import React from "react";
import Card from "./components/Card";

const App = () => {
  // const arr = [1,2,3,4,5]; ye smjhne ke liye tha  ki array kaise pass hota hai prpops mai
  const jobOpenings = [
    {
      companyName: "Google",
      brandLogo:
        "data:image/png;base64,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",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Lucknow, India",
    },
    {
      companyName: "Apple",
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEUAAAD///9DQ0P7/PvKzMnZ3d6tsKzz9PKLjYrX2db4+fh7fnrm5+Wkp6PHycYVGRTR09Cvs7UOEA1KTUqQk4+4ureqrKoeIR03OjYcHhwYGRducGycn5t1eHQ8PjuRkpAoKyZXWlcHDgNiZWAuMC1RUlASFhBYVk/i4d63trFkYl0sKiQXFQseHBZ1cmzt6+c5MiwXDQB/eXhoYGEfGBgVDQ6hm5tWUlJEPz+PiYmDf36ppqkiHyM5Njl4dHjHxMcdIyUTGBo0PD9DS00mZxnlAAAEiUlEQVR4nO3c21raQBQF4IwBE0KEpArSAirVWmw9tNV6rDXa93+nCjF8CTOgldnsbbr+67nYi2SOJHEcAAAAAAAAAAAAAAAAAAAAAAAAAPifvFvfaLW5i6CzWa8ESqngHXchRDqrnkq95y6FRLOlJja5i6HgK1XqhJ1aPqD7gbse67pBPqA64a7Hug1VVOMuyLbeVEDV4q7IMi2g6nOXZFddC6i2uGuyal0PWLJuGOoJt7lrsmpND+jucBdlU0cPWLKRtGJI2OEuyqZB6S9hw5CwyV2UTVuGgD53UVbpqxkVcddk11AL6O1x12TVjn4JB9w12dXXAna5S7JsdTpgyfYU2lwRlO0KOk7hbEYNy7VnGitsK9a4q6GQSxi9/cVos6mf1EdP8dzG9CSxv9n8uJy6bNjs9irD8OQkDGstvxBlPNJ4kZ+/flv9cWvPC4e1tf5buLJ+rXgU6lX8ydXZ7fndlfxfFIN26BZau8MN2cffnZYyierGxm3P2LqyvuyyX2zPnG+ssVv8e2nHr81uHAnN2HNn15zerp/SO3D/kx/Nb6tWBW4aV/R9gyHl43BSC80351TLXe5A0wzHvAvqcUcq0tbUFlS4Q+WZjl8WV5MzcZiOCG0I97mTPaG5giND7mipA7KAQs6ppv/PtWuVO575FNuexgp3PuOfZdaIOOag7IQiZovPhAFl/GPzksXoKx1wZxs7pgvY4M6WmrPHW5CQuZ6uFwZfubOl6AbSY+5oqcOXbGVfRUgndL5QBVRC7lG6m1TGROEQLtgOuZM9OaIKKKUX0k33X7iTZdpEAb0j7mQZqsMLOWdsJ0QJ5TyLSRRQTjekSuhecgfLfCVKKGeguSRKKOftkhWihCF3sAkkfK3y36WelHU3WcJAzMNgpiearRAz43+jSnjNnSzznSqhmO0h2bpUznRBdtIm5nmh6PlaX0fMFxbIjto87mSZc6qE6gd3tCenZAmljDVnZAnFTIlkg6nyfnJnS1E9CqXEnOvTDTVSBpsLwoQyzqPO6DriY1c84443QraqGQklRLyiTKg8ATcq1TY/85s7IOkDQ2MH7PMi5Xwx5nGvbqjOvXNC5pmR+jYdcS84E9KOpinm7eISEp7zJpzzMpctvAGXMNbcMCekXbmN/OJOSHeWkYq5AzpOlTSge8udz3F+kyYUcAlpL2LA3gtHKHsi81yYobuIUk6/6ebEU+5omZgo4B13sAmiIykZw0zqmiThFXesPIq1m4j3RyduCRIKWM3k2f/igLivZNm+T+U8kZFJguer/gfePXcg3a7VhCK/xXdjMaCcp9kL7P1jKuMVYANbL0JVuYPMlNhZvYUCR5nMg40B1Uu4Y8zzsPhVDBPuEPPtze6LbhjF2/617/fi6uwfoppwR3iWeUR17+r5j3jcD3rmkwE5W8I5tg133naitxvc6Q3fyIehk6n39qqzPlGSTB0O3CXLLHMhD/Gko3nxn3kt/WowafiwrPLsGNTX4rjXnxtvbK/rt+P2tciFKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBn9BcakTE8Z0+SZAAAAAElFTkSuQmCC",
      datePosted: "2 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Bangalore, India",
    },
    {
      companyName: "Meta",
      brandLogo: "https://logo.clearbit.com/meta.com",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Remote",
    },
    {
      companyName: "Amazon",
      brandLogo: "https://logo.clearbit.com/amazon.com",
      datePosted: "3 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Hyderabad, India",
    },
    {
      companyName: "Netflix",
      brandLogo: "https://logo.clearbit.com/netflix.com",
      datePosted: "1 week ago",
      post: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Remote",
    },
    {
      companyName: "Microsoft",
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Noida, India",
    },
    {
      companyName: "Tesla",
      brandLogo: "https://logo.clearbit.com/tesla.com",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Pune, India",
    },
    {
      companyName: "Adobe",
      brandLogo: "https://logo.clearbit.com/adobe.com",
      datePosted: "6 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Delhi, India",
    },
    {
      companyName: "Uber",
      brandLogo: "https://logo.clearbit.com/uber.com",
      datePosted: "8 days ago",
      post: "React Native Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Remote",
    },
    {
      companyName: "Airbnb",
      brandLogo: "https://logo.clearbit.com/airbnb.com",
      datePosted: "12 days ago",
      post: "Web Developer",
      tag1: "Contract",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Mumbai, India",
    },
  ];

 

  return (
    <>
      <div className="parent">
        {/* <Card name="Hari"/> for simple string pass props example */}
        {/* <Card name={arr[0]} /> for array pass props example */}
        {/* {arr.map(function(elem){
        return <h1><Card/></h1> ;
      })}
        // */}
        {/* yha tak basic tha itna array and array of objects kaise pass hote hai props ki help se  */}

        {jobOpenings.map(function (elem,idx) {
          return (
            <div key={idx}>
            <Card   
              company={elem.companyName}
              posted={elem.datePosted}
              logo={elem.brandLogo}
            />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
