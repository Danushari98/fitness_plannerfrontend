import React from "react";
import "./Workouts.css";

// IMPORT IMAGES
import wr1 from "../assets/wr1.jpg";
import wr2 from "../assets/wr2.avif";
import wr3 from "../assets/wrk3.avif";
import wr4 from "../assets/wr4.avif";
import wr5 from "../assets/wr5.webp";
import wr6 from "../assets/wr6.avif";
import wr7 from "../assets/wr7.webp";
import wr8 from "../assets/wr8.webp";
import wr9 from "../assets/wr9.jpg";

export default function Workouts() {

  const workoutData = [
    {
      title: "Chest Workout",
      desc: "Build upper body strength and chest size.",
      exercises: ["Bench Press", "Incline Dumbbell Press", "Chest Fly", "Push Ups"],
      warmup: ["Arm Circles", "Push-Ups", "Resistance Band Stretch"],
      img: wr1
    },
    {
      title: "Back Workout",
      desc: "Improve posture, width and back thickness.",
      exercises: ["Deadlift", "Lat Pulldown", "Seated Row", "Pull Ups"],
      warmup: ["Cat-Cow Stretch", "Dead Hang", "Resistance Pulls"],
      img: wr4
    },
    {
      title: "Leg Workout",
      desc: "Increase lower body power and strength.",
      exercises: ["Squats", "Leg Press", "Lunges", "Hamstring Curl"],
      warmup: ["Jumping Jacks", "Bodyweight Squats", "Hip Circles"],
      img: wr5
    },
    {
      title: "Shoulder Workout",
      desc: "Build wide and strong shoulders.",
      exercises: ["Overhead Press", "Lateral Raises", "Front Raises", "Shrugs"],
      warmup: ["Arm Swings", "Light Dumbbell Raises"],
      img: wr8
    },
    {
      title: "Biceps Workout",
      desc: "Increase arm size and peak.",
      exercises: ["Barbell Curl", "Dumbbell Curl", "Hammer Curl", "Cable Curl"],
      warmup: ["Wrist Rotations", "Light Curls"],
      img: wr2
    },
    {
      title: "Triceps Workout",
      desc: "Build thicker and stronger arms.",
      exercises: ["Tricep Dips", "Skull Crushers", "Rope Pushdown", "Close Grip Press"],
      warmup: ["Arm Stretch", "Bench Dips"],
      img: wr3
    },
    {
      title: "Abs Workout",
      desc: "Strengthen core and improve definition.",
      exercises: ["Crunches", "Leg Raises", "Plank", "Russian Twist"],
      warmup: ["Torso Twists", "Light Plank"],
      img: wr6
    },
    {
      title: "Full Body Workout",
      desc: "Overall strength, fat loss and conditioning.",
      exercises: ["Burpees", "Kettlebell Swings", "Deadlift", "Push Ups"],
      warmup: ["Jump Rope", "High Knees", "Dynamic Stretch"],
      img: wr7
    },
    {
      title: "Full Body Warm-Up",
      desc: "Essential warm-up routine to prevent injuries and improve performance.",
      warmup: [
        "Jumping Jacks",
        "Arm Circles",
        "High Knees",
        "Hip Rotations",
        "Bodyweight Squats",
        "Dynamic Stretching"
      ],
      img: wr9
    }
  ];

  return (
    <div className="workouts-container">
      <h1 className="page-title">Workout Programs</h1>
      <p className="page-subtitle">
        Warm-up properly & train like a champion 💪
      </p>

      <div className="workout-grid">
        {workoutData.map((item, index) => (
          <div className="workout-card" key={index}>

            <div className="image-box">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="workout-content">
              <h2>{item.title}</h2>
              <p className="desc">{item.desc}</p>

              {/* MAIN WORKOUT (only if exists) */}
              {item.exercises && (
                <>
                  <h4 className="sub-title">💪 Main Exercises</h4>
                  <ul className="exercise-list">
                    {item.exercises.map((ex, i) => (
                      <li key={i}>✔ {ex}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* WARM-UP */}
              <h4 className="sub-title">🔥 Warm-up Exercises</h4>
              <ul className="warmup-list">
                {item.warmup.map((w, i) => (
                  <li key={i}>• {w}</li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
