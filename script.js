const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
 ans = []
	s = 0
	temp = []

	for( i = 0; i<arr.length; )
	{
	    s += arr[i]
		if(s<=n)
		{
			temp.push(arr[i])
		}
		else
		{
		    
			while(s>0)
				{
					s--
				}
				i--
			ans.push(temp)
			temp = []
		}

	i++
   	
	}
	ans.push(temp)
	return ans
};

//const n = prompt("Enter n: ");
//alert(JSON.stringify(divide(arr, n)));
