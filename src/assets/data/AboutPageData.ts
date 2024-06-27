import gym from '../images/EmptyGym.jpg'
import fitness from '../images/fitness.jpg'
import pt1 from '../images/PersonalTraining.jpg'
import pt2 from '../images/PersonalTraining2.jpg'
import gym1 from '../images/GymPage.jpg'
import gym2 from '../images/GymPage2.jpg'
import yboxing from '../images/youthboxing.jpg'
import yboxing2 from '../images/youthboxing2.jpg'


interface ActObj  {
	"acttitle" : string,
	"actdesc" : string,
	"actpic1": string,
	"actpic2": string,
}

type ActArray = ActObj[]

let semiclasses : ActObj = {
    "acttitle" : "Classes/Semi's",
    "actdesc" : "We actually take the time to educate oppose to just making you punch a bag for an hour with some burpees mixed in. Our goal is to provide the same learning curve you will get from a private boxing coach but with the intensity and energy of a group class.",
    "actpic1" : gym,
    "actpic2" : fitness
}

let ptfile: ActObj = {
    "acttitle" : "Personal Training",
    "actdesc" : "Our Boxing and Strength Training Personal Training Program Is Coached By Some Of NYC’s Most Experienced Personal Trainers. We Have Been Delivering Results To Our New York City Clientele Since 2009! Come See For Yourself Why Our Personalized Attention Will Motivate, Educate and Fast Track You To Where You Want To Be Mentally and Physically.",
    "actpic1" : pt1,
    "actpic2" : pt2
}

let gymfile: ActObj = 
{
    "acttitle" : "The Perfect Gym",
	"actdesc" : "Not Boujee, Not Brutal, Just Right! What makes WTF UNIQUE is our style of classes, in every single class offered you will get mitt work with the instructor. We will modify exercises for you and even assist you during class to correct form, combinations, etc.",
	"actpic1": gym1,
	"actpic2": gym2,
}

let yboxfile: ActObj = 
{
    "acttitle" : "Youth Boxing",
	"actdesc" : "Our classes involve all sorts of drills: Shadowboxing, Mitt Work, Partner Drills, etc. We like to keep the classes fresh because it keeps the youth more engaged. Boxing is a great sport for discipline, cardio, coordination and more. We combine our boxing training with fitness exercises to promote better athleticism in order create better habits for youth in the future.",
	"actpic1": yboxing,
	"actpic2": yboxing2,
}

export let acttree : ActArray = [semiclasses, ptfile, gymfile, yboxfile]
    