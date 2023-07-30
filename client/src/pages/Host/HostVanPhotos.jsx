import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { hostVanDetails } = useOutletContext();

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
