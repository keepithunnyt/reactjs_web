import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "moon",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTExMTlfNjUg%2FMDAxNTc0MTQyMzA1MTM3.GNq7hfCXppP-WhKzlLKqN_3D3irAE74dut2AqVzwu64g.zTcRrZPc08qAAOOmm5iaEF2V2OkEX5B3qjXw7QeONfkg.PNG.halowd%2F%25B5%25B5%25C4%25BF.png&type=sc960_832",
    rating: 5,
  },
  {
    id: 2,
    name: "ubuntu",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MTZfODgg%2FMDAxNjE4NTYzNTk2OTI3.SWEZ1L0w_dq5rlbwnymS1AwDWu10DDvLScwhcPk4rW4g.FShjl6KXwxOvGAUgqRTl3NnzGAoszEAM92NUDeTvs4Ag.PNG.dkeldl0486%2Fimage.png&type=sc960_832",
    rating: 4.4,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <h4>{rating} / 5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
