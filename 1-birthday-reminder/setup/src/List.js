import React from 'react';

const List = (props) => {

    return (
        <>
            {props.person.map((people)=>{
                const {id, name, age, image}=people;
                return(
                    <article key={id}
                    className="person"
                    >
                        <img
                        src={image}
                        />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>

                    </article>

                )
            })}
        </>
    );
};

export default List;
