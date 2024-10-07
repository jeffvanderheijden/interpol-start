import { navigate } from "@reach/router";
export const api = "https://api.interpol.sd-lab.nl/api";

export const login = async (formData) => {
    try {
        const response = await fetch(`${api}/create-session`, {
            method: 'POST',
            body: formData,
            credentials: 'include' // Ensure cookies are included with the request
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (response && response.error) {
            console.error('Login error:', response.error);
            return response.error;
        } else {
            console.log('Login successful:', response.statusText);
            window.location.reload();
            return true;
        }
    } catch (error) {
        console.error('Error creating session:', error);
    }
}

export const checkSession = async (type) => {
    try {
        const response = await fetch(`${api}/check-type`, {
            method: 'GET',
            credentials: 'include' // Include cookies in the request
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();

        if (userData && userData.error) {
            console.error('Error checking session:', userData.error);
            return false;
        }

        // If user is logged in, check what type of user is logged in
        if (type === "STUDENT") {
            return userData === 'STUDENT' ? true : false;
        } else if (type === "DOCENT") {
            return userData === 'DOCENT' ? true : false;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error checking session:', error);
        return false;
    }
}

export const getStudentData = async () => {
    try {
        const response = await fetch(`${api}/student-data`, {
            method: 'GET',
            credentials: 'include' // Include cookies in the request
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();

        if (userData && userData.error) {
            console.error('Error student data:', userData.error);
            return false;
        }

        if (userData) {
            return userData;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error checking student data:', error);
        return false;
    }
}

export const getAdditionalStudentData = async (studentId) => {
    try {
        const response = await fetch(`${api}/student-additional-data?student_id=${studentId}`, {
            method: 'GET',
            credentials: 'include' // Include cookies in the request
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData = await response.json();

        if (userData && userData.error) {
            console.error('Error student data:', userData.error);
            return false;
        }

        if (userData) {
            return userData;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error checking student data:', error);
        return false;
    }
}

export const logout = async () => {
    try {
        const response = await fetch(`${api}/logout.php`, {
            method: 'POST',
            credentials: 'include' // Include cookies in the request
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Logout successful:', data);

        // Redirect to login page or perform other actions
        navigate('/login');

    } catch (error) {
        console.error('Error logging out:', error);
        // Handle error, e.g., display error message
    }
}

export const createTeam = async (formData, setTeamSuccessfullyCreated) => {
    try {
        const response = await fetch(`${api}/create-team`, {
            method: 'POST',
            body: formData,
        });
        const newTeam = await response.text();
        console.log(JSON.parse(newTeam).message);
        if (JSON.parse(newTeam).message) {
            setTeamSuccessfullyCreated(true);
            // Set initial points for the team on completion
            // ======================================
            // TODO: Set points based on min points and time spend on the challenge
            // ======================================
            const setPoints = async () => {
                const formData = new FormData();
                formData.append('group_id', JSON.parse(newTeam).message);
                formData.append('challenge_id', 4);
                formData.append('completed', 1);
                formData.append('points', Math.floor(Math.random() * 200) + 100);
                try {
                    const response = await fetch(`${api}/set-challenge-points`, {
                        method: 'POST',
                        body: formData
                    });
                    const success = await response.text()
                    console.log(success);
                } catch (error) {
                    console.error('Error setting points:', error);
                }
            
            }
            setPoints();
        }
    } catch (error) {
        console.error('Error creating team:', error);
    }
}


// TODO::::: Implement the following functions :::======
export const getTeamData = async () => {
    try {
        const response = await fetch(`${api}/team-data?id=${groupId}`, {
            method: 'GET',
            credentials: 'include' // Include cookies in the request
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const teamData = await response.json();

        if (teamData && teamData.error) {
            console.error('Error getting team data:', teamData.error);
            return false;
        }

        if (teamData) {
            return teamData;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error getting team data:', error);
    }
}