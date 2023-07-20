import { useSelector } from "react-redux";

export default function HostVanPhotos() {
  const { hostVanDetails } = useSelector((state) => state.host);

  return (
    <section>
      <div className="w-fit rounded-lg">
        <img
          src={hostVanDetails.imageUrl}
          alt={hostVanDetails.name}
          className="w-40 object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
