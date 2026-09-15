import { Icon } from "@/components/icon";
import { restaurant } from "@/content/restaurant";

export function ReservationCard() {
  return (
    <a
      className="channel-card channel-card--whatsapp"
      href={restaurant.reservation}
      target="_blank"
      rel="noreferrer"
      aria-label="Reservar mesa pelo WhatsApp"
    >
      <span className="channel-card__brand">
        <Icon name="message" size={16} />
        WhatsApp
      </span>
      <span>Reservar</span>
      <Icon name="arrow-down-right" size={17} />
    </a>
  );
}

export function DeliveryCard() {
  return (
    <a
      className="channel-card channel-card--ifood"
      href={restaurant.ifood}
      target="_blank"
      rel="noreferrer"
      aria-label="Fazer pedido no iFood"
    >
      <span className="channel-card__brand" aria-hidden="true">iFood</span>
      <span>Fazer pedido</span>
      <Icon name="arrow-down-right" size={17} />
    </a>
  );
}
