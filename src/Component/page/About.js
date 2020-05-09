import React from 'react'

export default function (props) {
    return (
        <div>
            <h2>About page</h2>
            <p>
            <h5>{props.match.params.id}</h5>
            <h5>{props.match.params.name}</h5>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
            </p>
        </div>
    )
}
