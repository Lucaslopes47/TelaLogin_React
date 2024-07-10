import './style.css'

function Home() {

    const users = [{
        id: "21212123",
        name: 'Rodolfo',
        age: 33,
        email: 'Rod@email.com',
    },
    {
        id: "212121232",
        name: 'Rodolfo2',
        age: 332,
        email: 'rod2@email.com',
    },
    ]

    return (
        <div className='container'>
            <form>
                <h1>Cadastro de Usuários</h1>
                <input placeholder='Nome' name='nome' type='text' />
                <input placeholder='Idade' name='idade' type='number' />
                <input placeholder='E-mail' name='email' typeof='email' />
                <button type='button'>Cadastrar</button>
            </form>

            {users.map(user => (
                <div key={user.id} className='card'>
                    <div>
                        <p>Nome: <span>{user.name}</span></p>
                        <p>Idade: <span>{user.age}</span></p>
                        <p>Email: <span>{user.email}</span></p>
                    </div>
                    <button>
                        <img src='' />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Home
