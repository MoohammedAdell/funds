function Map() {
  const persons = [
    { id: 1, name: "mohamed", age: 20, tech: "react" },
    { id: 2, name: "walid", age: 15, tech: "vwe" },
    { id: 3, name: "asfour", age: 25, tech: "ar" },
    { id: 4, name: "hamada", age: 88, tech: "en" },
  ];

  return (
    <div>
      {persons.map((person) => (
        <h1 key={person.id}>
          Hello i'm {person.name} . i'm {person.age} years old . I know{" "}
          {person.tech}
        </h1>
      ))}
    </div>
  );
}

export default Map;
