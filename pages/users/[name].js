import Link from "next/link"
import Head from "next/head"
import Layout from '../../components/layout'

import { getAllUsersNames, getUsers } from '../lib/users'

const SingleUser = ({ userData }) => {
    console.log(userData, userData.address)
    return(
        <Layout>
            <div>
                <h1>{userData.name}</h1>
                <h2>{userData.username}</h2>
                <ol>
                    { userData.address ? Object.keys(userData.address).map((data, i) => {
                        let [key, val] = Object.entries(data);
                        console.log(data)
                        return(
                            <li key={i}>
                               {data} : {typeof userData.address[data] != 'object' ? userData.address[data]  : null}
                            </li>
                        )
                    }) : null}
                </ol>  
            </div>
        </Layout>
    )
}
export default SingleUser


export async function getStaticPaths() {
    const paths = await getAllUsersNames();
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) { 
    const user = await getUsers(params.name)
    return({
        props: {
            userData: user
        }
    })
}