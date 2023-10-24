

def main():
    print("-:glosor:-")
    antal_ratt = 0
    glosor = {}

    while True:
        svglosa = input("\n\tMata in svensk glosa: ")
        engglosa = input("\n\tMata in alternativa språkglosa: ")

        glosor[svglosa] = engglosa




        stoppa = input("\n\tVill du mata in en glosa till? j/n ")

        if(stoppa == "n"):
           break


    #slut på första while loop

    #startar andra whileloop so är förhöret 
    while True:


        #print(f"Längd på diktenary = {len(glosor)}")

        for glosa in glosor:
            
            svar = input(f"\n\t {glosa} :")

            if svar == glosor[glosa]:
                print("\n\trätt svar! ")
            else:
                print(f"rätt svar är: {glosor[glosa]}")

        one_more_time = input("\n\tVill du göra förhöret en gång till j/n :")
    

        if (one_more_time == "n"):
            break

main()