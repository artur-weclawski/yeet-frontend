import Variables from "../../Globals/Variables";

const TCreate = () => {
    const handleCreate = async (data, endpoint, token) => {
        const response = await fetch(Variables.API + endpoint, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json()
    }

    return {
        handleCreate
    }
}

export default TCreate;