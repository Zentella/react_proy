import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() { // hooks mounted
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts') // esperar respuesta de la api (promesa) asíncrono y almacenarla en resp
        // console.log(resp)
        const data = await resp.json() // convertir respuesta en json despues de espera y guardarla en data
        // console.log(data) // 100 datos
        this.setState({ posts: data }) // poner datos en array posts del state
    }
    render() {
        return (
            <div>
                Posts
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
