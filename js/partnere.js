const url = "https://afjutwclepcrcssmvfwj.supabase.co/rest/v1/Samarbejdspartnere";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmanV0d2NsZXBjcmNzc212ZndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU3MjIxMDUsImV4cCI6MjA4MTI5ODEwNX0.wOJZVLMMj_zpMDqrd21kGdVVw_6DzH8nEqWBswHcB5c";

const options = {
  headers: {
    apikey: key,
  },
};

const supaRequest = await fetch(url, options);
const supaData = await supaRequest.json();

console.log("supaData", supaData);
