import Link from "next/link"
import Head from "next/head"
import Layout from '../../components/layout'

import { getUsers } from '../lib/users'


export default function UsersPage({ allUsers }) {
    //console.log(allUsers)
    return(
        <Layout>
            {allUsers.map(user => {
                return(
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>
                                <b>{user.name}</b><span>{user.username}</span>
                            </a>
                        </Link>
                    </li>
                )
            })}
        </Layout>
    )
} 


export async function getStaticProps() { 
    const allUsers = await getUsers()

    return {
        props: { 
            allUsers
        }   
    }
} 


