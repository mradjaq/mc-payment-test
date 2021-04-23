var baseUrl ='http://localhost:3000/api/budget';
    async function getData() {
        try {
            const resp = await fetch(baseUrl, {
                method: 'GET', 
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'application/json'
            },
            });
            
            const respJson = await resp.json();
            console.log("RES Get Budget", respJson);

            let boxData = document.getElementById("boxData");
            for (let i = 0;i<respJson.length;i++){
                let div = document.createElement("div");
                div.className = 'rowData';
                div.innerHTML = `
                <p>${dayConverter((i+1) % 7)} Date ${(i+1)%7}<p> <br>
                Income: Rp.${respJson[i].income} <br>
                Expenses: Rp.${respJson[i].expenses} <br>
                Balance: Rp.${respJson[i].balance} <br>
                `;
                boxData.appendChild(div);
            }
        } catch (e) {
            console.error("error getting budget");
        }
    }
    
    function dayConverter(num) {
        if(num % 7 == 0) return 'Sunday';
        else if (num % 6 == 0) return 'Saturday';
        else if (num % 5 == 0) return 'Friday';
        else if (num % 4 ==0) return 'Thursday';
        else if (num % 3 == 0 && num != 6) return 'Wednesday';
        else if (num % 2 == 0 && num != 4) return 'Tuesday';
        else return 'Monday';
    }