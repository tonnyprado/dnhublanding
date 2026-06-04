export default function FaqItem({ question, answer }) {
  return (
    <details className="faq">
      <summary>
        {question}
        <span className="ic">+</span>
      </summary>
      <div className="ans">{answer}</div>
    </details>
  );
}
