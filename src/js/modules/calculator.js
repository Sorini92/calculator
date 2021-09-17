const calculator = () => {
    let wrapper = document.querySelector('.wrapper'),
        result = document.querySelector('.result'),
        total = 0,
        sign,
        arrayOfNum;

    function calc (result) {
        let res;
        sign = result.match(/[*+/-]/g);
        console.log(sign);
        arrayOfNum = result.split(/[*+/-]/g);
        console.log(arrayOfNum);
        for (let i = 0; i < sign.length; i++) {
            switch (sign[i]) {
                case '+':
                    res = Number(arrayOfNum[i]) +Number(arrayOfNum[i+1]);
                break;
                case '/':
                    res = Number(arrayOfNum[i]) / Number(arrayOfNum[i+1]);
                break;
                case '*':
                    res = Number(arrayOfNum[i]) * Number(arrayOfNum[i+1]);
                break;
                case '-':
                    res = Number(arrayOfNum[i]) - Number(arrayOfNum[i+1]);
                break;
            }
        }
        return res;
    } 

    wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        if (result.textContent == '0') {
            result.textContent = '';
        }
        const target = e.target;

        if(e.target && target.classList.contains('number')) {
            result.textContent = result.textContent + e.target.value;
        }

        if(e.target && target.classList.contains('dot')) {
            if (result.textContent.match(/\./)) {
                result.textContent = `${result.textContent}`;
            } else {
                result.textContent = `${result.textContent}.`;
            }
        }

        if(e.target && target.classList.contains('invert')) {
            result.textContent = result.textContent * (-1);
        }

        if(e.target && target.classList.contains('equals')) {
            total = calc(result.textContent);
            result.textContent = `${total}`
        }

        if(e.target && target.classList.contains('backspace')) {
            if (result.textContent.length > 1) {
                result.textContent = `${result.textContent.slice(0, -1)}`;
            } else {
                result.textContent = "0";
            }
        }

        if(e.target && target.classList.contains('clear')) {
            result.textContent = "0";
        }
        
        switch (target.value) {
            case '+':
                if (result.textContent.match(/\+/)) {
                    result.textContent = `${result.textContent}`;
                } else {
                    result.textContent = `${result.textContent}${target.value}`;
                }
            break;
            case '/':
                if (result.textContent.match(/\//)) {
                    result.textContent = `${result.textContent}`;
                } else {
                    result.textContent = `${result.textContent}${target.value}`;
                }
            break;
            case '*':
                if (result.textContent.match(/\*/)) {

                    result.textContent = `${result.textContent}`;
                } else {
                    result.textContent = `${result.textContent}${target.value}`;
                }
            break;
            case '-':
                if (result.textContent.match(/-/)) {
                    result.textContent = `${result.textContent}`;
                } else {
                    result.textContent = `${result.textContent}${target.value}`;
                }
            break;
            /* case 'dot':
                if (result.textContent.match(/\./)) {
                    result.textContent = `${result.textContent}`;
                } else {
                    result.textContent = `${result.textContent}.`;
                }
            break;
            case 'invert':
                result.textContent = result.textContent * (-1);
            break;
            case '=': 
                total = calc(result.textContent);
                result.textContent = `${total}`
            break;
            case 'back':
                result.textContent = `${result.textContent.slice(0, -1)}`;
            break;
            case 'clear':
                result.textContent = "0";
            break; */
        }
    });
};

export default calculator;