function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 40.818976051031825,
			lng: -96.7036812027826,
		},
		zoom: 16,
		mapId: 'MAP_ID',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});

	const markers = [
		[
			"University of Nebraska - Lincoln",
			40.819237095401085,
      -96.70349194886641,
			'zelda-big-castle.png',
			200,
			200,
		],
		[
			'The Dorm',
			40.81970461810723,
      -96.69754007077049,
			'zelda-hut.png',
			30,
			30,
		],
    [
			'The Dorm',
			40.81920461810723,
      -96.69754007077049,
			'zelda-hut.png',
			30,
			30,
		],
    [
			'The Dorm',
			40.81870461810723,
      -96.69754007077049,
			'zelda-hut.png',
			30,
			30,
		],
		[
			'Memorial Stadium',
			40.81983792246904,
      -96.70629480065159,
			'zelda-castle.png',
			50,
			80,
		],
		[
      'Wendy\'s',
      40.81624911780498,
      -96.7018530626972,
      'zelda-house.png',
      30,
      30,
     ],
		[
			'Nebraska Union',
			40.81704484237825, -96.70050122940673,
			'zelda-long-house.png',
			60,
			40,
		],
		[
			'Pinnacle Bank Arena',
			40.817353386051806,
      -96.71082236946377,
			'zelda-long-castle.png',
			55,
			80,
		],
		[
			'Love Library',
			40.81706449405675,
      -96.70253323463348,
			'zelda-dungeon.png',
			60,
			60,
		],
    [
			'Westbrook',
  		40.81717475565417,
      -96.70480754408991,
			'zelda-pink-house.png',
			30,
			40,
		]
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}
