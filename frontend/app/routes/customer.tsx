//@ts-nocheck

export async function clientLoader()
{
    const res = await fetch("/api/customers")
    const customers = await res.json()
    return {customers}
}

export default function Customer({loaderData})
{
    return(
        <ul>
            {loaderData.customers.map((customer) =><li>{customer.name}</li>)}
        </ul>
    )
}