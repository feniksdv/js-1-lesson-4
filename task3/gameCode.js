
//игра кто хочет стать миллионером
//выводим на экран соообщение, вопрос + 4 ответа
//если пользователь ответил правильно, переходим к следующему вопросу
//иначе проиграл
//есть 2 подсказки, звонок по телефону и убрать 2 ответа

var ok, answer;

telephon = true; //подсказка - помощь друга по телефону
fifty = true; //подсказка - убрать два неверных ответа


function question(n) {
    do {
        ok = false;
        
        //answer = +prompt("Выберите один из 4 ответов \n" + questions[n].q + "\n" + "1 - " + questions[n].a1 + "   2 - " + questions[n].a2 + "\n3 - " + questions[n].a3 + "   4 - " + questions[n].a4 + "\nСомневаетесь? У вас есть две подсказки \nУбрать два неверных ответа, введите 50 \nПозвонить другу — введите 100" +"\nДля выхода введите -1");
        
        if (telephon && fifty)
        {
            answer = +prompt("Выберите один из 4 ответов \n" + questions[n].q + "\n" + "1 - " + questions[n].a1 + "   2 - " + questions[n].a2 + "\n3 - " + questions[n].a3 + "   4 - " + questions[n].a4 + "\nСомневаетесь? У вас есть две подсказки \nУбрать два неверных ответа, введите 50 \nПозвонить другу — введите 100" +"\nДля выхода введите -1");
        }
        else if (telephon)
        {
            answer = +prompt("Выберите один из 4 ответов \n" + questions[n].q + "\n" + "1 - " + questions[n].a1 + "   2 - " + questions[n].a2 + "\n3 - " + questions[n].a3 + "   4 - " + questions[n].a4 + "\nСомневаетесь? У вас осталась одна подсказка \nПозвонить другу — введите 100" +"\nДля выхода введите -1");
        }
        else if (fifty)
        {
            answer = +prompt("Выберите один из 4 ответов \n" + questions[n].q + "\n" + "1 - " + questions[n].a1 + "   3 - " + questions[n].a3 + "\n3 - " + questions[n].a3 + "   4 - " + questions[n].a4 + "\nСомневаетесь? У вас осталась одна подсказка \nУбрать два неверных ответа, введите 50" +"\nДля выхода введите -1");
        }
        else
        {
            answer = +prompt("Выберите один из 4 ответов \n" + questions[n].q + "\n" + "1 - " + questions[n].a1 + "   2 - " + questions[n].a2 + "\n3 - " + questions[n].a3 + "   4 - " + questions[n].a4 + "\nУ вас больше не осталось подсказок" +"\nДля выхода введите -1");
        }

        switch (answer)
        {
            case questions[n].correct:
                alert("Поздравляю, вы ответили правильно! Ваш выйгрыш составляет " + questions[n].manney + "$");
                break;
            case 2:
            case 3:
            case 4:
                alert("Вы проиграли!");
                break;
            case 50:
                if (fifty) {
                    fifty = false;
                    if (!telephon && !fifty)
                    {
                        answer = +prompt("Вы воспользовались подсказкой! Выберите один из 2 ответов \n" + questions[n].q + "\n" + questions[n].hint + "   3 - " + questions[n].a3 + "\nУ вас больше не осталось подсказок" + "\nДля выхода введите -1");
                    }
                    else
                    {
                        answer = +prompt("Вы воспользовались подсказкой! Выберите один из 2 ответов \n" + questions[n].q + "\n" + questions[n].hint + "   3 - " + questions[n].a3 + "\nСомневаетесь? У вас осталась одна подсказка \nПозвонить другу — введите 100" + "\nДля выхода введите -1");
                    }
                    switch (answer) {
                        case questions[n].correct:
                            alert("Поздравляю, вы ответили правильно! Ваш выйгрыш составляет " + questions[n].manney + "$");
                            break;
                        case 2:
                        case 3:
                        case 4:
                            alert("Вы проиграли!");
                            break;
                    }
                }
                else
                {
                    alert("Вы уже использовали эту подсказку!")
                    isAnswer(answer);
                }
                
                break;
            case 100:
                if (telephon) {
                    telephon = false; 
                    if (!fifty && !telephon)
                    {
                        answer = +prompt("Вы воспользовались подсказкой! Ваш друг утверждает, что верный ответ "+ questions[n].hint+ "\n" + questions[n].q + "\n" + "1 - " + questions[n].a1 + "   2 - " + questions[n].a2 + "\n3 - " + questions[n].a3 + "   4 - " + questions[n].a4 + "\nУ вас больше не осталось подсказок" + "\nДля выхода введите -1");
                    }
                    else
                    {
                        answer = +prompt("Вы воспользовались подсказкой! Ваш друг утверждает, что верный ответ "+ questions[n].hint+ "\n" + questions[n].q + "\n" + "1 - " + questions[n].a1 + "   2 - " + questions[n].a2 + "\n3 - " + questions[n].a3 + "   4 - " + questions[n].a4 + "\nСомневаетесь? У вас осталась одна подсказка \nУбрать два неверных ответа, введите 50" + "\nДля выхода введите -1");   
                    }
                    switch (answer) {
                        case questions[n].correct:
                            alert("Поздравляю, вы ответили правильно! Ваш выйгрыш составляет " + questions[n].manney + "$");
                            break;
                        case 2:
                        case 3:
                        case 4:
                            alert("Вы проиграли!");
                            break;
                    }
                }
                else
                {
                    alert("Вы уже использовали эту подсказку!")
                    isAnswer(answer);
                }
                break;
            case -1:
                break;
            default:
        }
        
        if (answer == -1)
        {
            break;
        }
        else
        {
            ok = isAnswer(answer);
        }
        
    } while (!ok);
}

for (var i = 0; i < questions.length; i++)
{   
    if (answer == -1)
    {
        break;
    }

    question(i);

    if (answer != questions[i].correct)
    {
        break;
    }
    //console.log(telephon, fifty);
}

function isAnswer(answer)
{
    if (isNaN(answer) || !isFinite(answer))
    {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (answer == 50 || answer == 100)
    {
        if (!fifty || !telephon)
        {
            return false;
        }
        else
        {
            return true; 
        }
        
    }
    else if (answer < 1 || answer > 4)
    {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    else
    {
        return true;
    }   
}