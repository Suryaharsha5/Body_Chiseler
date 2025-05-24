// Elements
const genderButtons = document.getElementById('gender-selection');
const bodyShapesDiv = document.getElementById('body-shape-selection');
const exerciseListDiv = document.getElementById('exercise-recommendations');
let selectedGenderButton = null;
let selectedBodyShapeButton = null;

// Body Shapes Data
const bodyShapes = {
    men: ['Ectomorph', 'Endomorph', 'Mesomorph'],
    women: ['Hourglass', 'Pear', 'Rectangle']
};

// Exercises Data
const exercises = {
    men: {
        Ectomorph: [
            { 
                name: 'Compound Lifts', 
                description: 'Includes exercises like Deadlifts and Squats that target multiple muscle groups simultaneously. Great for building muscle mass and overall strength.',
                imageUrl: 'pics/squat.png' 
            },
            { 
                name: 'High-Intensity Interval Training (HIIT)', 
                description: 'Combines short bursts of intense activity with periods of rest or lower intensity. Helps in building cardiovascular endurance without compromising muscle gains.',
                imageUrl: 'pics/hiit.png'
            },
            { 
                name: 'Calisthenics', 
                description: 'Bodyweight exercises such as Push-ups, Pull-ups, and Dips improve muscle definition and functional strength.',
                imageUrl: 'pics/cal.png'
            },
            { 
                name: 'Progressive Overload Training', 
                description: 'Involves gradually increasing the weight or resistance in your exercises. Essential for continuous muscle growth.',
                imageUrl: 'pics/over.png'
            },
            { 
                name: 'Core Strengthening', 
                description: 'Exercises like Planks and Russian Twists target the core muscles, which are crucial for overall stability and strength.',
                imageUrl: 'pics/core.png'
            }
        ],
        Endomorph: [
            { 
                name: 'Cardio', 
                description: 'Activities like Running, Cycling, or Swimming are essential for burning calories and improving cardiovascular health. Helps in managing body weight.',
                imageUrl: 'pics/cardio.png'
            },
            { 
                name: 'Full-Body Strength Training', 
                description: 'Engage in exercises like Deadlifts, Bench Press, and Rows that target major muscle groups to build muscle and boost metabolism.',
                imageUrl: 'pics/strength.png'
            },
            { 
                name: 'Circuit Training', 
                description: 'A combination of cardio and strength exercises performed in a circuit format. Keeps the heart rate up and burns more calories in less time.',
                imageUrl: 'pics/circuit.png'
            },
            { 
                name: 'Resistance Band Workouts', 
                description: 'Use resistance bands for exercises like Squats, Lunges, and Chest Presses. These workouts add extra tension to your muscles, aiding in fat loss and muscle toning.',
                imageUrl: 'pics/band.png'
            },
            { 
                name: 'High-Volume Training', 
                description: 'Focus on higher reps with moderate weights to increase calorie burn while building muscle endurance. Ideal for fat loss and muscle shaping.',
                imageUrl: 'pics/volume.png'
            }
        ],
        Mesomorph: [
            { 
                name: 'Weightlifting', 
                description: 'Focus on progressive overload with exercises like Bench Press, Squats, and Deadlifts to enhance muscle growth and strength.',
                imageUrl: 'pics/weight.png'
            },
            { 
                name: 'Resistance Training', 
                description: 'Incorporates resistance bands or machines to target specific muscle groups, improving muscle tone and endurance.',
                imageUrl: 'pics/res.png'
            },
            { 
                name: 'Plyometrics', 
                description: 'Explosive exercises like Box Jumps, Jump Squats, and Burpees that improve power, agility, and athletic performance.',
                imageUrl: 'pics/pylo.png'
            },
            { 
                name: 'Split Training', 
                description: 'Focus on different muscle groups each day (e.g., chest/triceps, back/biceps, legs) to maximize muscle growth and recovery.',
                imageUrl: 'pics/split.png'
            },
            { 
                name: 'Functional Training', 
                description: 'Exercises like Kettlebell Swings and Medicine Ball Slams that enhance strength, coordination, and overall athleticism.',
                imageUrl: 'pics/fun.png'
            }
        ]
    },
    women: {
        Hourglass: [
            { 
                name: 'Squats', 
                description: 'Targets the glutes, hamstrings, and quadriceps, helping to enhance lower body strength and shape.',
                imageUrl: 'pics/squats.png'
            },
            { 
                name: 'Lunges', 
                description: 'Works the legs and glutes while improving balance and coordination. Great for toning the lower body.',
                imageUrl: 'pics/lunges.png'
            },
            { 
                name: 'Hip Thrusts', 
                description: 'Focuses on the glutes and hamstrings, essential for building a strong and shapely posterior.',
                imageUrl: 'pics/hip.png'
            },
            { 
                name: 'Deadlifts', 
                description: 'Engages the entire posterior chain (back, glutes, hamstrings) and core, promoting full-body strength and conditioning.',
                imageUrl: 'pics/deadlifts.png'
            },
            { 
                name: 'Leg Press', 
                description: 'A machine-based exercise that targets the quadriceps, hamstrings, and glutes. It allows for controlled movement and heavy lifting.',
                imageUrl: 'pics/leg.png'
            }
        ],
        Pear: [
            { 
                name: 'Side Lunges', 
                description: 'Targets the inner and outer thighs along with the glutes, helping to balance out the lower body.',
                imageUrl: 'pics/side.png'
            },
            { 
                name: 'Step-ups', 
                description: 'Works the quadriceps, hamstrings, and glutes while also improving cardiovascular fitness.',
                imageUrl: 'pics/step.png'
            },
            { 
                name: 'Glute Bridges', 
                description: 'Activates the glutes and hamstrings, aiding in toning and strengthening the lower body.',
                imageUrl: 'pics/glute.png'
            },
            { 
                name: 'Resistance Band Side Steps', 
                description: 'A great exercise for targeting the hip abductors and glutes, which are often underdeveloped in pear-shaped bodies.',
                imageUrl: 'pics/steps.png'
            },
            { 
                name: 'Single-Leg streches', 
                description: 'Targets the hamstrings, glutes, and core, improving balance and overall lower body strength.',
                imageUrl: 'pics/single.png'
            }
        ],
        Rectangle: [
            { 
                name: 'Plank', 
                description: 'A core exercise that strengthens the abdominals, lower back, and shoulders. Improves posture and stability.',
                imageUrl: 'pics/plank.png'
            },
            { 
                name: 'Mountain Climbers', 
                description: 'A dynamic exercise that works the core, shoulders, and legs while also providing a cardio workout.',
                imageUrl: 'pics/mou.png'
            },
            { 
                name: 'Burpees', 
                description: 'A full-body exercise that combines strength and cardio, improving endurance, agility, and coordination.',
                imageUrl: 'pics/burpees.webp'
            },
            { 
                name: 'Russian Twists', 
                description: 'Targets the oblique muscles, helping to tone and strengthen the sides of the abdomen.',
                imageUrl: 'pics/twists.png'
            },
            { 
                name: 'Dumbbell Rows', 
                description: 'A back-strengthening exercise that also engages the core and shoulders, promoting overall upper body strength.',
                imageUrl: 'pics/rows.png'
            }
        ]
    }
};

// Function to display exercises based on selected body shape
function displayExercises(gender, shape) {
    // Clear any existing exercises
    exerciseListDiv.innerHTML = '';

    // Create a list of exercises
    const ul = document.createElement('ul');
    exercises[gender][shape].forEach(exercise => {
        const li = document.createElement('li');

        // Exercise Name
        const exerciseName = document.createElement('strong');
        exerciseName.innerText = exercise.name;

        // Exercise Description
        const exerciseDescription = document.createElement('p');
        exerciseDescription.innerText = exercise.description;

        // Exercise Image
        const exerciseImage = document.createElement('img');
        exerciseImage.src = exercise.imageUrl;
        exerciseImage.alt = exercise.name;
        exerciseImage.classList.add('exercise-img'); // Optional CSS class for styling

        li.appendChild(exerciseName);
        li.appendChild(exerciseDescription);
        li.appendChild(exerciseImage); // Add image to the list item
        ul.appendChild(li);
    });

    // Add the list to the exercise list div
    exerciseListDiv.appendChild(ul);
}

// Function to display body shapes based on gender
function displayBodyShapes(gender) {
    // Clear previous body shape buttons
    bodyShapesDiv.innerHTML = '';

    // Create buttons for body shapes
    bodyShapes[gender].forEach(shape => {
        const button = document.createElement('button');
        button.innerText = shape;
        button.classList.add('body-shape');
        button.addEventListener('click', function() {
            // Remove selected class from previously selected button
            if (selectedBodyShapeButton) {
                selectedBodyShapeButton.classList.remove('selected');
            }

            // Add selected class to the current button
            button.classList.add('selected');
            selectedBodyShapeButton = button;

            // Display exercises for selected gender and body shape
            displayExercises(gender, shape);
        });
        bodyShapesDiv.appendChild(button);
    });
}

// Event listener for gender selection
genderButtons.addEventListener('click', function(e) {
    if (e.target.classList.contains('gender-option')) {
        // Remove selected class from previously selected gender button
        if (selectedGenderButton) {
            selectedGenderButton.classList.remove('selected');
        }

        // Add selected class to the clicked button
        e.target.classList.add('selected');
        selectedGenderButton = e.target;

        // Display body shapes for the selected gender
        const gender = e.target.id;
        displayBodyShapes(gender);
    }
});
