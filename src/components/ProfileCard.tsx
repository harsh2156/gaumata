import type { FC } from "react"

interface ProfileCardProps {
  name: string
  title: string
  imageUrl: string
}

const ProfileCard: FC<ProfileCardProps> = ({ name, title, imageUrl }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-white">
      <div className="mb-4">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="w-full h-auto bg-gray-100 rounded-md" />
      </div>
      <h3 className="text-xl font-medium text-gray-900">{name}</h3>
      <p className="text-amber-600">{title}</p>
    </div>
  )
}

export default ProfileCard

