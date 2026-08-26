import './StatusWidget.css';

export default function StatusWidget() {
  return (
    <div className="status-widget">
      <span className="status-widget__dot" />
      <span className="status-widget__text">All systems operational</span>
    </div>
  );
}
