var studentNames=["stud1","stud2","stud3"];
var test1=[54,59,76];
var test2=[79,98,88];
var test3=[14,23,44];
var avg;

for(var i=0;i<3;i++)
{
var sum;
sum=test1[i]+test2[i]+test3[i];
avg=sum/3;



console.log("the average for",studentNames[i],"is",avg);
}